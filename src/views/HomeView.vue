<template>
  <div id="app">
    <nav>
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/js/prototype-link">link</RouterLink>
      <RouterLink to="/css/center-css">center-css</RouterLink>
      <RouterLink to="/text">text</RouterLink>
    </nav>
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterLink,RouterView } from 'vue-router';

</script>

<style scoped>
nav {
  width: 100%;
  height: 100px;
  border: 1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav a {
  margin: 0 10px;
}
main {
  width: 80%;
  border: 1px solid red;
  margin: 20px auto;
}
</style>