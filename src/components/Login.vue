<template>
  <div class="login">
    <img src="../assets/logoa.png">
    <form @submit.prevent="signin">
      <input type="text" placeholder="Your name..." v-model="username">
      <button type="submit">SIGNIN</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: ''
    }
  },
  methods: {
    signin() {
      this.$store.commit('login', this.username)
    }
  }
}
</script>

<style scoped>

.login img{
  width: 250px;
  margin-bottom: 20px;
  display: block;
  margin: 0 auto 20px;
}

form{
  display: flex;
  flex-direction: column;
}
form input{
  padding: 20px;
  font-size: 20pt;
  border: none;
  border-radius: 10pt;
  border: 5px solid #ffbb00;
  margin-bottom: 10px;
  font-family: 'Squada One', cursive;
  width: 400px;
}
form input:focus{
  outline: none;
}
form button{
  padding: 10px 30px;
  border: none;
  font-size: 20pt;
  font-family: 'Squada One', cursive;
  background-color: #ffbb00;
  border: 2px solid #ffffff;
  border-radius: 10pt;
  cursor: pointer;
  align-self: center;
}
form button:hover{
  background-color: #ffc933;
}
form button:focus{
  outline: none;
}
form button:active{
  transform: scale(0.9);
}
</style>
