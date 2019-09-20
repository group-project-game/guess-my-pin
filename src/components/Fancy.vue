<template>
  <div>
    <div class="fancy">
      <div class="line-box">
        <div class="line"></div>
      </div>
      <div class="wrapper2">
        <div class="information">
            <img src="../assets/logoa.png" alt="" srcset="" width="160px">
        </div>
        <div class="card">
          <div class="line2"></div>
        </div>
      </div>
      <div class="line-box">
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.fancy{
    width: 240px;
    height: 450px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 0 auto
}
.line-box{
    width: 225px;
    height: 40px;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

}
.line{
    width: 190px;
    height: 6px;
    background: black;
}
.line2{
   width: 6px;
    height: 140px;
    background: black; 
}
.card{
    width: 32px;
    height: 200px;
    background: white;
    display: flex;
    border-radius: 10px; 
    justify-content: center;
    align-items: center
}
.information{
    width: 195px;
    height: 230px;
    background: linear-gradient(top,  #258bca 0%, #2ab0ed 33%, #9fd8ef 74%, #e5f4fa 100%);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.wrapper2{
      display: grid;
    grid-template-columns: 5fr 3fr;
    grid-gap: 1vw;
    grid-auto-rows: minmax(50px, auto);

}
</style>