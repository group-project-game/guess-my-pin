<template>
  <div class="home">
    <Login></Login>
  </div>
</template>

<script>

import Login from '../components/Login.vue'

export default {
  name: 'home',
  components: {
    Login
  }
}
</script>

<style scoped>

.home{
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
