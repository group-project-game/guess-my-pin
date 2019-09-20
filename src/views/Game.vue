<template>
<div class="background">
  <div class="mechine">
      <div class="game">
      <Atm></Atm>
      <Keyboard></Keyboard>
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

export default {
  created() {
    //this.$store.dispatch('fillPlayer', this.$route.params.id)
    this.$store.dispatch("findRoomState", this.$route.params.id);
    this.playSound()
  },
  methods: {
    playSound() {
      let audio = new Audio(require("../assets/bg-2.mp3"));
      audio.addEventListener(
        "ended",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
      audio.play();
    }
  },
  components : {
        Atm, Keyboard, Fancy
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
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: left top;

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