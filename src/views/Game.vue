<template></template>

<script>
export default {
  created() {
    //this.$store.dispatch('fillPlayer', this.$route.params.id)
    this.$store.dispatch("findRoomState", this.$route.params.id);
    console.log(this.$route.params);
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
  }
};
</script>

<style>
</style>