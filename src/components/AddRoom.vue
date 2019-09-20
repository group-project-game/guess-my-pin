<template>
  <div class="add-room">
    <div class="add">
      <form @submit.prevent="createRoom">
        <p class="error" v-if="error">{{message}}</p>
        <input type="text" placeholder="Room name" v-model="name">
        <input type="text" placeholder="Room key" v-model="key">
        <button type="submit">Create</button>
        <button @click="closeForm()" class="btn-secondary">Close</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddRoom',
  data() {
    return {
      name: '',
      key: '',
      error: false,
      message: ''
    }
  },
  methods: {
    createRoom() {
      if(this.validateRoomName(this.name)) {
        this.$store.dispatch('createRoom', {
          roomName: this.name,
          roomKey: this.key
        })
        this.closeForm()
      }else{
        this.error = true
        this.message = 'Room name invalid'
        setTimeout( () => {
          this.error = false
          this.message = ''
        }, 2000)
      }
    },
    closeForm() {
      this.$emit('close')
    },
    validateRoomName(name) {
      if(name.length < 5 || name.length > 20) {
        return false
      }else{
        return true
      }
    }
  }
}
</script>

<style scoped>
.add-room{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.add{
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px 10px;
  box-shadow: 0 0 20px 10px rgba(0,0,0,.2);
  position: relative;
}
.add form{
  display: flex;
  flex-direction: column;
}
form h1{
  margin-bottom: 10px;
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
.btn-secondary{
  background-color: #ffffff;
  border: 2px solid #ffc933;
  margin-top: 20px;
}
.error{
  font-family: 'Squada One', cursive;
  color: #ff3333;
  font-size: 16pt;
  padding: 10px;
  border: 2px solid #ff3333;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>
