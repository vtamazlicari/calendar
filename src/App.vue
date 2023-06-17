<template>
  <main>
    <router-view />
  </main>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
main {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  padding: 0;
  margin: 0;
}
</style>
