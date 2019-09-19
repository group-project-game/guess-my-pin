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
  background: #2daeff; /* Old browsers */
  background: -moz-linear-gradient(top,  #2daeff 0%, #2ab0ed 33%, #9fd8ef 74%, #e4f5fc 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #2daeff 0%,#2ab0ed 33%,#9fd8ef 74%,#e4f5fc 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #2daeff 0%,#2ab0ed 33%,#9fd8ef 74%,#e4f5fc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2daeff', endColorstr='#e4f5fc',GradientType=0 ); /* IE6-9 */
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
