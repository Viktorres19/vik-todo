<template>
<!--  we're not gonna create method, but emit some-->
  <div @dblclick="toggleReminder(task.id)" :class="[task.reminder ? 'reminder' : '', 'task']">
    <div class="task__row">
      <div>
        <input
          ref="input"
          v-model="newText"
          class="task__input"
          v-if="isEditing"
        />
        <h3 v-else>{{ task.text }}</h3>
      </div>
      <div class="task__buttons">
        <button class="task__edit">
          <svg @click="changeText(task.id)" v-if="isEditing" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 451.296 451.296" style="enable-background:new 0 0 451.296 451.296" xml:space="preserve"><circle style="fill:#45b39c" cx="225.648" cy="225.638" r="225.638"/><path style="opacity:.1;enable-background:new" d="m450.855 239.322-99.451-99.451c-.076-.08-.13-.176-.209-.255l-39.537-39.491a12.776 12.776 0 0 0-9.026-3.76H109.178c-7.052 0-12.834 5.735-12.834 12.834v232.898c0 3.672 1.566 6.958 4.035 9.295l98.236 98.236c8.87 1.06 17.878 1.668 27.034 1.668 120.028 0 218.126-93.724 225.206-211.974z"/><path style="fill:#64798a" d="m351.176 139.612-39.501-39.501a12.823 12.823 0 0 0-9.066-3.755H109.186c-7.081 0-12.821 5.74-12.821 12.821V342.1c0 7.082 5.74 12.822 12.821 12.822H342.11c7.081 0 12.821-5.74 12.821-12.822V148.678c0-3.401-1.351-6.662-3.755-9.066z"/><path style="fill:#fff" d="M310.065 212.47H141.231c-6.129 0-11.098 4.969-11.098 11.098v88.637c0 6.129 4.969 11.098 11.098 11.098h168.833c6.129 0 11.098-4.969 11.098-11.098v-88.637c0-6.129-4.968-11.098-11.097-11.098z"/><path style="fill:#ebf0f3" d="M149.565 233.626h152.177v9.4H149.565zM149.565 263.168h152.177v9.4H149.565zM149.565 292.762h152.177v9.4H149.565zM156.714 96.355v58.059c0 5.443 4.413 9.856 9.856 9.856h118.156c5.443 0 9.856-4.413 9.856-9.856V96.355H156.714z"/><path style="fill:#3a556a" d="M259.491 107.622h15.698v44.022h-15.698z"/></svg>
          <svg @click="toggleIsEditing" v-else xmlns="http://www.w3.org/2000/svg" width="15.933" height="16.003" viewBox="0 0 4.216 4.234"><path d="M110.983 142.958v2.336h2.337v-1.024c.115-.076.22-.156.321-.241.024-.02.072-.058.133-.117v1.608a.228.228 0 0 1-.227.228h-2.791a.228.228 0 0 1-.227-.228v-2.79c0-.125.102-.227.227-.227h.76a2.884 2.884 0 0 0-.214.455zm3.707-1.409a2.687 2.687 0 0 0-.281-.028h-.028l-.05-.003h-.003l-.041-.002h-.001c-.753-.026-1.276.198-1.276.198-.714.29-1.205.805-1.426 1.593-.072.255-.05.52-.013.782.004.024.017.06.093.01.152-.412.404-.799.704-1.132.38-.42.806-.755 1.334-.965.097-.039.19-.068.288-.102.003.01-.004.018-.012.02l-.01.004a2.853 2.853 0 0 0-.764.457 5.29 5.29 0 0 0-1.011 1.11c-.334.48-.602.992-.777 1.55 0 0-.031.14.074.039l.465-.579a.067.067 0 0 1 .02-.024.103.103 0 0 1 .036-.02c.212-.08.427-.152.633-.245.276-.126.53-.282.757-.477.025-.019.277-.215.541-.621.004-.005.01-.012.012-.019l.005-.009c.064-.1.13-.214.192-.34l-.533-.073s.603-.085.692-.28l.016-.04c.047-.106.094-.223.147-.32a1.51 1.51 0 0 1 .26-.389c.029-.032 0-.089-.044-.096z" style="fill:#0ff;fill-opacity:1;stroke-width:.00864604" transform="translate(-110.529 -141.514)"/></svg>
        </button>
        <button @click="deleteTask(task.id)" name="button" class="delete-button"></button>
      </div>
    </div>
    <div>
      <input
        v-model="newDate"
        class="task__input"
        v-if="isEditing"
      />
      <p v-else>{{ task.day }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Task',
  data() {
    return {
      newText: this.task.text,
      newDate: this.task.day,
      isEditing: false
    }
  },
  props: {
    task: Object
  },
  emits: ['change-text'],
  methods: {
    ...mapActions(['launchFetchTasks']),
    changeText() {
      console.log(this.task.id, this.newText, this.newDate)
      const newObj = {
        id: this.task.id,
        text: this.newText,
        date: this.newDate
      }
      this.$store.dispatch('launchChangeText', newObj)
      this.toggleIsEditing()
    },
    toggleIsEditing() {
      this.isEditing = !this.isEditing;
      if (this.isEditing) {
        this.$nextTick(()=>{
          this.$refs['input'].focus()
        })
      }
    },
    deleteTask(id) {
      this.$store.dispatch('launchDeleteTask', id)
    },
    toggleReminder(id) {
      this.$store.dispatch('launchToggleReminder', id)
    }
  }
}
</script>

<style scoped>
.fas {
  color: #e80262;
}
.task {
  box-sizing: border-box;
  min-height: 76px;
  transform-style: preserve-3d;
  position: relative;
  background: #f4f4f4;
  z-index: 3;
  margin: 5px 0;
  padding: 10px 20px;
  cursor: pointer;
  border-radius:  0 5px 5px 0;
  //border: 1px solid lightgrey;
  border-top: 1px solid lightgrey;
  border-right: 1px solid lightgrey;
  border-bottom: 1px solid lightgrey;
}
.task::before {
  transform: translateZ(-1px);
  content: '';
  position: absolute;
  z-index: 2;
  left: -36px;
  top: 0px;
  background: crimson;
  width: 74px;
  height: 74px;
  border-radius: 50%;
}
.task::after {
  transform: translateZ(-2px);
  content: '';
  position: absolute;
  z-index: 2;
  left: -37px;
  top: -1px;
  background: lightgrey;
  width: 76px;
  height: 76px;
  border-radius: 50%;
}
.task__row {
  display: flex;
  justify-content: space-between;
  padding-right: 5px;
}
.task__row input {
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 18.72px;
  line-height: 29px;
  font-weight: 700;
}
.task__edit {
  cursor: pointer;
  border: none;
}
.task__edit:hover {
  opacity: .7;
}
.task.reminder {
  box-shadow: 21px 4px 42px -5px rgba(0,0,0,0.2);
  -webkit-box-shadow: 21px 4px 42px -5px rgba(0,0,0,0.2);
  -moz-box-shadow: 21px 4px 42px -5px rgba(0,0,0,0.2);
}
.task.reminder h3 {
  color: forestgreen;
}
.task.reminder::before {
  background: forestgreen;
}
.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: crimson;
}
.delete-button {
  display: block;
  position: absolute;
  right: 5px;
  top: 9px;
  width: 16px;
  height: 16px;
  background-color: transparent;
  border: none;
  overflow: hidden;
  cursor: pointer;
}
.delete-button:after, .delete-button:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  height: 4px;
  width: 100%;
  background-color: crimson;
  transition: background-color .3s ease;
}
.delete-button:hover:after, .delete-button:hover:before {
  background-color: deeppink;
}
.delete-button:after {
  transform: translate(-50%, -50%) rotate(45deg);
}
.delete-button:before {
  transform: translate(-50%, -50%) rotate(-45deg);
}
</style>