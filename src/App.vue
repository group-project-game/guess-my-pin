<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>

@import url('https://fonts.googleapis.com/css?family=Squada+One&display=swap');
@import url('https://fonts.googleapis.com/css?family=Fredoka+One&display=swap');

*{
  margin: 0;
  padding: 0;
}

body{
  background: #2daeff; /* Old browsers */
  background: -moz-linear-gradient(top,  #2daeff 0%, #2ab0ed 33%, #9fd8ef 74%, #e4f5fc 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  #2daeff 0%,#2ab0ed 33%,#9fd8ef 74%,#e4f5fc 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  #2daeff 0%,#2ab0ed 33%,#9fd8ef 74%,#e4f5fc 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2daeff', endColorstr='#e4f5fc',GradientType=0 ); /* IE6-9 */
  background-size: cover;
  background-repeat: no-repeat;
}
#app{
  height: 100vh;
}

</style>
