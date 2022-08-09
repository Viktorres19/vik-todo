<template>
  <AddTask />
  <TaskCounter />
  <Tasks
    @change-text="changeText"
  />
</template>

<script>
import Tasks from '@/components/Tasks'
import AddTask from '@/components/AddTask'
import TaskCounter from '@/components/TaskCounter'

export default {
  name: "Home",
  components: {TaskCounter, AddTask, Tasks },
  emits: ['change-text'],
  methods: {
    async changeText(taskId, newText, newDate) {
      const textToChange = await this.fetchTask(taskId)
      const updTask = {...textToChange, text: newText, day: newDate}

      const res = await fetch(`api/tasks/${taskId}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map(task =>
        task.id === taskId ? {...task, text: data.text, day: data.day } : task
      )
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    }
  }
}
</script>

<style scoped>

</style>