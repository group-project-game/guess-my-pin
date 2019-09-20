import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    login(state, username) {
      localStorage.setItem('username', username)
      router.push('/room')
    },
    addRoom(state, room) {
      state.rooms.push(room)
    }
  },
  actions: {
    createRoom({commit}, payload) {

      commit('addRoom', payload)
    },
    joinRoom({commit}, payload) {
      console.log(payload)
      router.push('/game')
    }
  }
})
