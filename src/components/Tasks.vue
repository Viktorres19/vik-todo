<template>
  <div class="task-list" v-cloak>
    <Task
      :key="task.id"
      v-for="task in tasks"
      key="task.id"
      class="task"
      :task="task"
    />
  </div>
</template>

<script>
import Task from '@/components/Task'
import { mapActions } from 'vuex'

export default {
  name: 'Tasks',
  components: { Task },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    ...mapActions(['launchFetchTasks'])
  },
  created() {
    this.launchFetchTasks()
  }
}
</script>

<style scoped>
  [v-cloak] {
    display: none;
  }
</style>