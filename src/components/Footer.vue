<template>
  <footer>
    <p>Copyright &copy; 2022</p>
    <router-link v-show="$route.name === 'Home'" to="/about" class="router-link">About</router-link>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
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