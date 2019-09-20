<template>
<div class="background">
  <Score></Score>
  <div class="mechine">
      <div class="game">
      <Atm :answer='answer' :index="index"></Atm>
      <Keyboard @beforeSubmit="playing" @submit="check"></Keyboard>
      </div>
      <div class="ornament">
          <Fancy></Fancy>
      </div>
  </div>
</div>
</template>

<script>
import Atm from '../components/Atm.vue'
import Keyboard from '../components/Keyboard.vue'
import Fancy from '../components/Fancy.vue'
import Score from '../components/Score.vue'
import db from '../apis/firebase'

export default {
  name: 'Game',
  data() {
    return {
      index : 0,
      answer : '',
      pinlist : [],
      players: []
    }
  },
  created() {
    db.collection('room').doc(this.$route.params.id).get()
      .then(doc => {
          this.pinlist = doc.data().answerPin
          this.players = doc.data().players
      })
      .catch(err => {
          console.log(err)
      })
    this.playSound()
  },
  methods: {
    playSound() {
      let audio = new Audio(require("../assets/bg-1.mp3"));
      audio.addEventListener(
        "ended",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
      audio.play();
    },
    playing(input){
      this.answer = input
    },
    check(){
      let pinNow = this.pinlist[this.index]
      if (pinNow == this.answer){
        for(let i=0;i<this.players.length;i++) {
          if(this.players[i].username == localStorage.getItem('username')) {
            this.players[i].score ++
            console.log(this.players, '<<<<<<<<')
            db.collection('room').doc(this.$route.params.id).update({
              players: this.players
            })
            .then(response => {
              console.log('ssdfsdf', response)
            })
            .catch(err => {
              console.log('errr', err)
            })
          }
        }
        console.log('benarrrrrrrr')
      }
      else {
        console.log('salahhhh')
      }
      // if (this.answer === '000'){
      //   console.log(true) 
      // }
      this.index++
        this.answer = ''
    }
  },
  components : {
        Atm, Keyboard, Fancy, Score
    }
};
</script>

<style scoped>
.background{
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(https://image.freepik.com/free-vector/shopping-mall-corridor-with-panoramic-roof_1262-16605.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.mechine{
    width: 750px;
    height: 750px;
    background:  rgb(133, 126, 126);
    border-radius: 20px ;
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-auto-rows: minmax(50px, auto);
}
.game{
    display: flex;  
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
}

.ornament{
    margin-top: 18%;
}
</style>