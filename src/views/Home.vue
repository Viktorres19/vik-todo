<template>
  <AddTask @add-task="addTask" :showAddTask="showAddTask" />
  <!--    catch the method here-->
  <TaskCounter :tasks="tasks" />
  <Tasks
    @toggle-reminder="toggleReminder"
    @change-text="changeText"
    @delete-task="deleteTask"
    :tasks="tasks"
  />
</template>

<script>
import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";
import TaskCounter from "../components/TaskCounter";

export default {
  name: "Home",
  props: {
    showAddTask: Boolean,
  },
  components: {TaskCounter, AddTask, Tasks },
  data () {
    return {
      tasks: []
    }
  },
  emits: ['delete-task', 'toggle-reminder', 'change-text'],
  methods: {
    async addTask(task) {
      const res = await fetch('api/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task)
      })

      const data = await res.json()

      this.tasks = [...this.tasks, data]
      this.toggleAddTask()
    },
    async deleteTask(id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`api/tasks/${id}`, {
          method: 'DELETE'
        })
        res.status === 200 ? (this.tasks = this.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
      }
    },
    async toggleReminder(id) {
      const taskToToggle = await this.fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`api/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      this.tasks = this.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
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
    async fetchTasks() {
      const res = await fetch('api/tasks')

      const data = await res.json()

      return data
    },
    async fetchTask(id) {
      const res = await fetch(`api/tasks/${id}`)

      const data = await res.json()

      return data
    }
  },
  /*Because here returns promise*/
  async created() {
    this.tasks = await this.fetchTasks()
  }
}
</script>

<style scoped>

</style>