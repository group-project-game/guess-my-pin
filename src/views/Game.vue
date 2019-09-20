<template>
<div class="background">
  <div class="game-result" v-if="isSubmit">
    <div class="result win" v-if="result">
      <img src="../assets/win.gif" alt="" srcset="">
    </div>
    <div class="result lose" v-else>
      <img src="../assets/lose.gif" alt="" srcset="">
    </div>
  </div>
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
import swal from 'sweetalert2'

export default {
  name: 'Game',
  data() {
    return {
      index : 0,
      answer : '',
      pinlist : [],
      players: [],
      isSubmit: false,
      result: null
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
      let audio = new Audio(require("../assets/bgk.mp3"))
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
      setTimeout(() => {
        this.isSubmit = false
      }, 3000)
      this.isSubmit = true
      let pinNow = this.pinlist[this.index]
      if (pinNow == this.answer){
        this.result = true
        let audio = new Audio(require("../assets/win.mp3"));
        audio.play()
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
        this.result = false
        let audio = new Audio(require("../assets/police.flac"));
        audio.play()
      }
      if(this.index >= 4) {
        let uang = 0;
        for(let i=0;i<this.players.length;i++) {
          if(this.players[i].username == localStorage.getItem('username')) {
            uang = this.players[i].score * 100000
          }
        }
        swal.fire({
          title: `Congratulation you steal Rp. ${uang.toLocaleString('id-IDR')}`,
          timer: 4000,
          imageUrl: 'https://media1.giphy.com/media/1TCK4mMFT8k6n1PU1S/giphy.gif',
          imageWidth: 400,
          showConfirmButton: false
        })
        this.$router.push('/room')
      }else{
        this.index++
      }
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
.game-result{
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,.4);
}
.result{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.lose{
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
}
.lose img{
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>