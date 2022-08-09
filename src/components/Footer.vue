<template>
  <footer>
    <p>{{ copyRight }}</p>
    <router-link v-show="$route.name === 'Home'" to="/about" class="router-link">{{ about }}</router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      copyRight: 'Copyright 2022',
      about: 'About'
    }
  }
}
</script>

<style scoped>
a {
  color: #333;
}

footer {
  text-align: center;
}
</style>