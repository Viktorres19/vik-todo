<template>
  <div class="about">
    <h3>{{ version }}</h3>
    <router-link to="/" class="router-link" v-text="linkText" />
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      version: 'Version 1.0.0',
      linkText: 'Go BAck'
    }
  }
}
</script>

<style scoped>
  .about {
    background-color: #f4f4f4;
  }
</style>