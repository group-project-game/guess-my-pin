<template>
  <div class="atm-view">
      <div class="pin">
        <div class="pin-game">
            <p>{{pin}}</p>
        </div>
        <div class="answer">
            {{answer}}
        </div>
        <div class="time">
            <p>{{time}}</p>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pin: '',
            pinList : ['565634','562634','565614','565604','165634'],
            answer : '',
            index: 0,
            time: 3
        }
    },
    methods: {
        showPin(index) {
            this.pin = this.pinList[index]
            setTimeout(() => {
                this.pin = ''
            }, 3000)
            let interval = setInterval(() => {
                this.time --
                if(this.time <= 0) {
                    clearInterval(interval)
                }
            }, 1000)
        }
    },
    created() {
        this.showPin(this.index)
    }
}
</script>

<style scoped>
.atm-view{
    background: rgb(12, 12, 117);
    border-style:inset;
    border-width: 5pt; 
    width: 427px;
    height: 385px;
    border-radius: 20px ;
    display: flex;
    justify-content: center;
    align-items: center
   
}
.pin{
    padding-top: 5px;
    height: 200px;
    border: 2pt solid orange ;
    border-style:dotted;
    width: 400px;
    display: flex;
    align-items: center;
    flex-direction: column
}
.pin-game{
    font-size: 32pt;
    color: rgb(247, 225, 31);
    text-align: center;
    height: 60px;
    position: relative;
    width: 300px;
    margin-bottom: 20px;
}
.pin-game p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.answer{
    width: 280px;
    background: rgb(48, 48, 253);
    height: 50px;
    font-size: 40px;
    color: aliceblue
}
.time{
    margin-top: 20px;
    width: 60px;
    height: 60px;
    background-color: #ffdd19;
    border-radius: 50%;
    position: relative;
}
.time p{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 25pt;
    font-family: 'Squada One', cursive;
    color: black;
}
</style>