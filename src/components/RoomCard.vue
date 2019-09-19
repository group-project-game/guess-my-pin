<template>
  <div class="room-card">
    <h1>{{ room.name }}</h1>
    <form @submit.prevent="joinRoom">
      <input type="text" placeholder="Room key..." v-model="key">
      <button type="submit">Join</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  props: ['room'],
  data() {
    return {
      key: ''
    }
  },
  methods: {
    joinRoom() {
      this.$store.dispatch('joinRoom', this.key)
    }
  }
}
</script>

<style scoped>

.room-card{
  padding: 30px 10px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0,0,0,.1);
  border: 2px solid #ffc933;
}
.room-card h1{
  color: #ffc933;
  text-align: center;
  font-family: 'Fredoka One', cursive;
}
form{
  display: flex;
  flex-direction: column;
}
form input{
  border: none;
  border-bottom: 2px solid black;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
  font-size: 14pt;
  font-weight: bold;
}
form input:focus{
  outline: none;
}
form button{
  border: none;
  padding: 10px;
  background-color: #ffc933;
  border-radius: 10px;
}
form button:focus{
  outline: none;
}
form button:active{
  transform: scale(0.9);
}
</style>
