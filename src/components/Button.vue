<template>
  <button
    @click="$emit('toggle-add-task')"
    :style="{background: showAddTask ? buttonState.close.color : buttonState.open.color, color: showAddTask ? '' : buttonState.open.font }"
    class="btn"
  >
    {{ showAddTask ? buttonState.close.sign : buttonState.open.sign }}
  </button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      buttonState: {
        open: {
          color: "#3aff5b",
          font: "#5f5f5f",
          sign: "Add Task"
        },
        close: {
          color: "#e80262",
          font: "#fff",
          sign: "Close Form"
        }
      }
    }
  },
  props: {
    showAddTask: Boolean,
    text: String,
    color: String
  }
}
</script>

<style scoped>
  .btn {
    white-space: nowrap;
    border: 2px solid rgb(95, 95, 95);
    transition: opacity .3s ease;
  }
  .btn:hover {
    opacity: .8;
  }
</style>