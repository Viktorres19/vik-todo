<template>
  <div class="wrapper">
    <div class="container">
      <div class="app">
        <Header
          :showAddTask="showAddTask"
          @toggle-add-task="toggleAddTask"
        />
        <router-view :showAddTask="showAddTask"></router-view>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: 'App',
  components: {Footer, Header},
  data() {
    return {
      showAddTask: false
    }
  },
  methods: {
    toggleAddTask() {
      this.showAddTask = !this.showAddTask
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  background: rgba(65,73,148,1);
  background: -moz-linear-gradient(left, rgba(65,73,148,1) 0%, rgba(148,75,105,1) 45%, rgba(226,124,108,1) 100%);
  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(65,73,148,1)), color-stop(45%, rgba(148,75,105,1)), color-stop(100%, rgba(226,124,108,1)));
  background: -webkit-linear-gradient(left, rgba(65,73,148,1) 0%, rgba(148,75,105,1) 45%, rgba(226,124,108,1) 100%);
  background: -o-linear-gradient(left, rgba(65,73,148,1) 0%, rgba(148,75,105,1) 45%, rgba(226,124,108,1) 100%);
  background: -ms-linear-gradient(left, rgba(65,73,148,1) 0%, rgba(148,75,105,1) 45%, rgba(226,124,108,1) 100%);
  background: linear-gradient(to right, rgba(65,73,148,1) 0%, rgba(148,75,105,1) 45%, rgba(226,124,108,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#414994', endColorstr='#e27c6c', GradientType=1 );
}
body {
  font-family: 'Poppins', sans-serif;

  color: #2f4255;
}
[v-cloak] {
  display: none;
}
.wrapper {

}
.app {
  background-color: #F3F6F9;
  padding: 30px;
  -webkit-box-shadow: 0px 4px 30px 0px #000000;
  box-shadow: 0px 4px 30px 0px #000000;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, .5);
}
.container {
  max-width: 500px;
  margin: 30px auto 0;
  min-height: 300px;
}
.btn {
  display: inline-block;
  background: #54c8db;;
  color: #fff;
  font-weight: 700;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}
.btn:focus {
  outline: none;
}
.btn:active {
  transform: scale(0.98);
}
.btn-block {
  display: block;
  width: 100%;
}
.router-link {
  color: #333;
  text-decoration: none;
  position: relative;
}
.router-link:hover {
  color: #333;
  text-decoration: none;
}
.router-link:after {
  position: absolute;
  bottom: -2px;
  right: 0;
  content: '';
  height: 2px;
  transition: all .2s ease;
  background-color: #333;
  width: 0;
}
.router-link:hover:after {
  width: 100%;
}
</style>
