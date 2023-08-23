import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    showAddTask: false
  },
  mutations: {
    async fetchTasks(state) {
      const res = await fetch('https://mock-api-json-pl4i.onrender.com/tasks')
      state.tasks = await res.json()
    },
    toggleAddTask(state) {
      state.showAddTask = !state.showAddTask
    },
    async addTask(state, newTask) {
      const res = await fetch('https://mock-api-json-pl4i.onrender.com/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(newTask)
      })

      const data = await res.json()

      state.tasks = [...state.tasks, data]
    },
    async deleteTask(state, id) {
      if (confirm('Are you sure?')) {
        const res = await fetch(`https://mock-api-json-pl4i.onrender.com/tasks/${id}`, {
          method: 'DELETE'
        })
        res.status === 200 ? (state.tasks = state.tasks.filter((task) => task.id !== id)) : alert('Error deleting task')
      }
    },
    async toggleReminder(state, id) {
      const res2 = await fetch(`https://mock-api-json-pl4i.onrender.com/tasks/${id}`)
      const taskToToggle = await res2.json()
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

      const res = await fetch(`https://mock-api-json-pl4i.onrender.com/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      state.tasks = state.tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    },
    async changeText(state, newObj) {
      const res2 = await fetch(`https://mock-api-json-pl4i.onrender.com/tasks/${newObj.id}`)
      const textToChange = await res2.json()
      const updTask = {...textToChange, text: newObj.text, day: newObj.date}

      const res = await fetch(`https://mock-api-json-pl4i.onrender.com/tasks/${newObj.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updTask)
      })

      const data = await res.json()

      state.tasks = state.tasks.map(task =>
        task.id === newObj.id ? {...task, text: data.text, day: data.day } : task
      )
    }
  },
  actions: {
    launchFetchTasks({ commit }) {
      commit('fetchTasks')
    },
    launchToggleAddTask({ commit }) {
      commit('toggleAddTask')
    },
    launchAddTask({ commit }, newTask) {
      commit('addTask', newTask)
    },
    launchDeleteTask({commit}, id) {
      commit('deleteTask', id)
    },
    launchToggleReminder({commit}, id) {
      commit('toggleReminder', id)
    },
    launchChangeText({commit}, newObj) {
      commit('changeText', newObj)
      commit('fetchTasks')
    }
  }
  ,
  getters: {
    countTasks: (state) => (bool) => {
      let sum = 0
      state.tasks.map(item => {
        if (item.reminder === bool) {
          sum += 1
        }
      })
      return sum
    }
  },
  modules: {}
})
