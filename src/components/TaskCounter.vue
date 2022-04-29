<template>
  <div class="task-counter">
    <div class="task-completion">
      <div class="task-completion__completed">
        <h4 class="h4">completed:</h4>
        <div class="task-completion__count"><div>{{ completedTasks }}</div></div>
      </div>
      <div class="task-completion__incompleted">
        <h4 class="h4">incompleted:</h4>
        <div class="task-completion__count"><div>{{ incompletedTasks }}</div></div>
      </div>
    </div>
    <div class="progress-bar">
      <div class="progress-bar__inner" :style="{ width: completedTasks * 100 / (completedTasks + incompletedTasks) + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskCounter",
  props: {
    tasks: Array
  },
  computed: {
    completedTasks () {
      let sum = 0
      this.tasks.map(item => {
        if (item.reminder === true) {
          sum += 1
        }
      })
      return sum
    },
    incompletedTasks () {
      let sum = 0
      this.tasks.map(item => {
        if (item.reminder === false) {
          sum += 1
        }
      })
      return sum
    }
  }
}
</script>

<style scoped>
  .task-counter {
    width: 100%;
  }
  .progress-bar {
    position: relative;
    width: 100%;
    height: 20px;
    background-color: lightblue;
    border-radius: 10px;
    border: 1px solid #2f4255;
  }
  .progress-bar__inner {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #2f4255;
    border-radius: 10px 0 0 10px;
  }
  .task-completion {
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin: 10px 0;
  }
  .task-completion__completed,
  .task-completion__incompleted {
    border: 1px solid #2f4255;
    border-radius: 10px;
    padding: 10px;
  }
  .task-completion__count {
    margin-top: 5px;
    display: flex;
    justify-content: center;
  }
  .task-completion__count > div {
    padding: 5px;
    background-color: #2f4255;
    color: #f4f4f4;
    border-radius: 50%;
    min-width: 35px;
  }
  .task-completion__completed .task-completion__count > div {
    background-color: forestgreen;
  }
  .task-completion__incompleted .task-completion__count > div {
    background-color: crimson;
  }
</style>