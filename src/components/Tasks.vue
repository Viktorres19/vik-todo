<template>
  <div class="task-list" v-cloak>
<!--    pass method even higher-->
    <Task :key="task.id"
          v-for="task in tasks"
          key="task.id"
          class="task"
          @toggle-reminder="$emit('toggle-reminder', task.id)"
          @change-text="changeText"
          @delete-task="$emit('delete-task', task.id)"
          :task="task" />
  </div>
</template>

<script>
import Task from "./Task";
export default {
  name: "Tasks",
  components: {Task},
  props: {
    tasks: Array
  },
  methods: {
    changeText(taskId, editingValue, newDate) {
      this.$emit('change-text', taskId, editingValue, newDate)
    }
  },
  emits: ['delete-task', 'toggle-reminder', 'change-text']
}
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>