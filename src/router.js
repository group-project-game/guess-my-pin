import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Room from './views/Room.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, 
    {
      path: '/game/:id',
      name: 'game',
      component: Game
    },
     {
      path: '/room',
      name: 'room',
      component: Room
    },
    // {
    // path : '/1/game',
    // name : 'game',
    // component : Game
    // }
  ]
})
