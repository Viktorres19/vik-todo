<template>
  <div class="task-list" v-cloak>
    <Task :key="task.id"
          v-for="task in tasks"
          key="task.id"
          class="task"
          @change-text="changeText"
          :task="task" />
  </div>
</template>

<script>
import Task from '@/components/Task'
import { mapActions } from 'vuex'

export default {
  name: 'Tasks',
  components: {Task},
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    ...mapActions(['launchFetchTasks']),
    changeText(taskId, editingValue, newDate) {
      this.$emit('change-text', taskId, editingValue, newDate)
    }
  },
  created() {
    this.launchFetchTasks()
  },
  emits: ['change-text']
}
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>