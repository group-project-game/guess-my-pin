<template>
<div class="wrapper">
  <div class="keyboard">
      <div>
      <button value="1">1</button>
      <button value="2">2</button>
      <button value="3">3</button>
      </div>
      <div>
      <button value="4">4</button>
      <button value="5">5</button>
      <button value="6">6</button>
      </div>
      <div>
      <button value="7">7</button>
      <button value="8">8</button>
      <button value="9">9</button>
      </div>
  </div>
  <div class="submit">
      <button name="submit">Submit</button>
  </div>
</div>
</template>

<script>
export default {

}
</script scoped>

<style scoped>
.wrapper{
    margin-left:20px; 
    display: grid;
    grid-template-columns: 5fr 4fr;
    grid-gap: 1vw;
    grid-auto-rows: minmax(50px, auto);
    background: rgb(5, 83, 114);
    height: 250px;
    padding: 2%;
    border-radius: 20px 
}
button[name="submit"]{
    width: 150px
}
.keyboard{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
button{
    height: 60px;
    width: 65px;
    border-radius: 10px;
    margin : 5px;
    font-size: 40px;
}
.submit{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column
}
button:hover{
cursor: pointer;
}


</style>