<template>
  <div
    class="form-holder"
    :style="{maxHeight: showAddTask ? '600px' : '0' }"
  >
    <form @submit.enter="onSubmit" class="add-form">
      <div class="form-control">
        <label>{{ taskLabel }}</label>
        <input type="text" v-model="text" name="text" :placeholder="taskInputPlaceholder" />
      </div>
      <div class="form-control">
        <label>{{ dateLabel }}</label>
        <input
          type="text"
          v-model="day"
          name="day"
          :placeholder="dateInputPlaceholder"
        />
      </div>
      <div class="form-control form-control-check">
        <label>{{ completedLabel }}</label>
        <input type="checkbox" v-model="reminder" name="reminder" />
      </div>

      <input type="submit" :value="submitLabel" class="btn btn-block" />
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddTask',
  data() {
    return {
      text: '',
      day: '',
      reminder: false,
      taskLabel: 'Task',
      taskInputPlaceholder: 'Add Task',
      dateLabel: 'Day & Time',
      dateInputPlaceholder: 'Add Day & Time',
      completedLabel: 'Set completed',
      submitLabel: 'Save Task'
    }
  },
  computed: {
    showAddTask() {
      return this.$store.state.showAddTask
    }
  },
  methods: {
    onSubmit(e) {
      e.preventDefault()

      if(!this.text) {
        alert('Please add a task')
        return
      }

      const newTask = {
        id: Math.floor(Math.random() * 100000),
        text: this.text,
        day: this.day,
        reminder: this.reminder
      }

      this.$store.dispatch('launchAddTask', newTask)

      this.$store.state.showAddTask = false

      this.text = ''
      this.day = ''
      this.reminder = false
    }
  }
}
</script>

<style scoped>
.form-holder{
  -webkit-transition: max-height 1s;
  -moz-transition: max-height 1s;
  -ms-transition: max-height 1s;
  -o-transition: max-height 1s;
  transition: max-height 1s;
  overflow: hidden;
}
.add-form {
  margin-bottom: 40px;
}
.form-control {
  margin: 20px 0;
}
.form-control label {
  display: block;

}
.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px 0;
  padding: 3px 7px;
  font-size: 17px;
}
.form-control-check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.form-control-check label {
  flex: 1;
}
.form-control-check input {
  flex: 2;
  height: 20px;
}
.btn {
  transition: opacity .3s ease;
}
.btn:hover {
  opacity: .8;
}
</style>