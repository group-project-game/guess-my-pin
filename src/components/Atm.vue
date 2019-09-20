<template>
  <div class="atm-view">
      <div class="pin">
        <div class="pin-game">
            {{pin}}
        </div>
        <div class="answer">
            {{answer}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            pin : '808080',
            answer : ''
        }
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
font-size: 89px;
color: rgb(247, 225, 31);
text-align: center;
}
.answer{
    width: 280px;
    background: rgb(48, 48, 253);
    height: 50px;
    font-size: 40px;
    color: aliceblue
}

</style>