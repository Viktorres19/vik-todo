<template>
  <header>
    <h1 class="h1">{{ title }}</h1>
    <Button v-show="homePage" />
  </header>
</template>

<script>
import Button from '@/components/Button'
export default {
  name: 'Header',
  components: {Button},
  computed: {
    homePage() {
      if (this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  },
  props: {
    title: {
      type: String,
      default: 'What I\'m gonna do?'
    }
  }
}
</script>

<style scoped>
header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.h1 {
  font-size: 26px;
  margin-right: 10px;
}
</style>