<template>
  <AddTask />
  <TaskCounter />
  <Tasks />
</template>

<script>
import Tasks from '@/components/Tasks'
import AddTask from '@/components/AddTask'
import TaskCounter from '@/components/TaskCounter'

export default {
  name: "Home",
  components: { TaskCounter, AddTask, Tasks }
}
</script>

<style scoped>

</style>