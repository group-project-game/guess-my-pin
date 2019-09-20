<template>
  <div class="score">
    <h1>Score Board</h1>
    <div class="user" v-for="(user, index) in players" :key="index">
      <p>{{index+1 + '. ' + user.username + ' (Rp. ' + user.score * 100000 + ')'}}</p>
    </div>
  </div>
</template>

<script>

import db from '../apis/firebase'

export default {
  name: 'Score',
  data() {
    return {
      players: []
    }
  },
  created() {
    db.collection('room').doc(this.$route.params.id)
      .onSnapshot(querySnapshot => {
        console.log(querySnapshot.data().players, '------------')
        this.players = querySnapshot.data().players
      });
  }
}
</script>

<style scoped>

.score{
  background-color: red;
  padding: 20px;
  border-radius: 10px 0 0 20px;
  background-color: rgb(94, 85, 85);
  border: 5px solid rgb(133, 126, 126);
}

.score h1{
  color: #ffffff;
  font-family: 'Squada One', cursive;
  padding: 20px;
  border-bottom: 2px solid #ffffff;
}
.user{
  padding: 10px;
}
.user p{
  padding: 5px;
  color: #ffffff;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 18pt;
}

</style>