<template>
  <div class="wrapper">
    <div class="keyboard">
      <div>
        <button @click="clickKey(1)" :disabled="$store.state.isDisabled">1</button>
        <button @click="clickKey(2)" :disabled="$store.state.isDisabled">2</button>
        <button @click="clickKey(3)" :disabled="$store.state.isDisabled">3</button>
      </div>
      <div>
        <button @click="clickKey(4)" :disabled="$store.state.isDisabled">4</button>
        <button @click="clickKey(5)" :disabled="$store.state.isDisabled">5</button>
        <button @click="clickKey(6)" :disabled="$store.state.isDisabled">6</button>
      </div>
      <div>
        <button @click="clickKey(7)" :disabled="$store.state.isDisabled">7</button>
        <button @click="clickKey(8)" :disabled="$store.state.isDisabled">8</button>
        <button @click="clickKey(9)" :disabled="$store.state.isDisabled">9</button>
      </div>
      <div>
        <button @click="clickKey(0)" :disabled="$store.state.isDisabled">0</button>
      </div>
    </div>
    <div class="submit">
        <button name="submit" :disabled="$store.state.isDisabled" @click="clearInput">Clear</button>
      <button name="submit" @click="submitAnswer" :disabled="$store.state.isDisabled">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      answer: ""
    };
  },
  methods: {
    clickKey(value) {
      this.playSound();
      this.answer += value;
      this.$emit("beforeSubmit", this.answer);
      console.log("here", this.answer);
    },
    submitAnswer() {
      this.$emit("submit");
      this.answer = "";
    },
    playSound() {
      console.log("harusnya bunyi");
      let audio = new Audio(require("../assets/phone_number.wav"));
      audio.addEventListener(
        "",
        function() {
          this.currentTime = 0;
          this.play();
        },
        false
      );
      audio.play();
    },
    clearInput(){
        this.answer = ''
        this.$emit("beforeSubmit", this.answer);
    }
  }
};
</script>

<style scoped>
.wrapper {
  margin-left: 20px;
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-gap: 1vw;
  grid-auto-rows: minmax(50px, auto);
  background: rgb(5, 83, 114);
  height: 250px;
  padding: 2%;
  border-radius: 20px;
}
button[name="submit"] {
  width: 150px;
  height: 60px;
}
.keyboard {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
button {
  height: 50px;
  width: 65px;
  border-radius: 10px;
  margin: 5px;
  font-size: 40px;
}
.submit {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
button:hover {
  cursor: pointer;
}
</style>