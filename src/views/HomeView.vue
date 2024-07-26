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
      <h3>施工中···，敬请期待···  =)</h3>
      <h3>预期时间：24.7.25 - 24.7.27</h3>
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