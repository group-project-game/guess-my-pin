import Vue from 'vue'
import Vuex from 'vuex'
import db from './apis/firebase'
import firebase from 'firebase/app'
import Swal from 'sweetalert2'
import router from './router'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    rooms: [],
    players: [],
    standby: false,
    room: {},
    isDisabled: true
  },
  mutations: {
    login(state, username) {
      localStorage.setItem('username', username)
      router.push('/room')
    },
    addRoom(state, room) {
      state.rooms.push(room)
    },
    getAllRooms(state, payload) {
      state.rooms = []
      state.rooms = payload
    },
    emptyRooms(state) {
      state.rooms = []
    },
    setPlayers(state, payload){
      state.players = payload
     },
     setStandByState(state, payload) {
      state.standby = payload
    },
    setRoomStatus(state, payload){
      state.room = payload
    },
    enableButton(state) {
      state.isDisabled = false
    },
    disableButton(state) {
      state.isDisabled = true
    }
  },
  actions: {
    createRoom({commit, dispatch}, payload) {
      let answerPin = []
      for (let i = 0; i < 5; i++) {
        let pin = ""
        for(let j=0; j < 6; j++){
          pin += Math.floor(Math.random() * (9 - 0 + 1)) + 0
        }
        answerPin.push(pin)
      }
      let player = {
        username:localStorage.getItem('username'),
        score:0
      }
      db.collection('room')
        .add({
          name: payload.roomName,
          key: payload.roomKey,
          players: [player],
          answerPin: answerPin,
          status: true,
          standby: false
        })
        .then(function (docRef) {
          commit('setRoomStatus', docRef.data())
          Swal.close();
          Swal.fire({
            title: "Successfully Create",
            text: "Room has been created",
            type: "success",
            timer: 2000,
            showConfirmButton: false
          })
          console.log(docRef.id)
          dispatch.setRoomStatus(docRef.id)
          router.push(`/game/${docRef.id}`)
        })
        .catch(err => {
          console.log(err)
        })
    },
    getThisRooms({commit}, payload){
      db.collection('room').doc(payload.roomId).get()
      .then(doc =>{
        console.log(doc)
      }).catch(err=>{
        console.log(err)
      })
    },
    getAllRooms ({
      commit
    }) {
      console.log("haloooooo ini get all rooms")
      let rooms = []
      db.collection('room')
      .onSnapshot(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = {
            id: doc.id,
            ...doc.data()
          };
          rooms.push(data)
        });
        commit('emptyRooms')
        commit('getAllRooms', rooms)
        rooms = []
      })
  },
    joinRoom({commit}, payload) {
      console.log(payload)
      let player = {
        username:localStorage.getItem('username'),
        score:0
      }
      db.collection('room').doc(payload.roomId).get()
      .then(doc =>{
        if(doc.data().key == payload.roomKey){
          router.push(`/game/${payload.roomId}`)
          return db.collection('room').doc(payload.roomId).update({
            players: firebase.firestore.FieldValue.arrayUnion(player)
          })
          .then(()=>{
            return db.collection('room').doc(payload.roomId).get()
          })
          .then((doc)=>{
            if (doc.data().players.length >= 4) {
              db.collection('room').doc(payload.roomId).update({status: false})
            } else {
              console.log('Successfuly join room')
            }
            commit('setRoomStatus', doc.data())
          })
        } else {
          Swal.fire({
            title: "Wrong Key",
            text: "Check again your key before join",
            type: "error",
            timer: 2000,
            showConfirmButton: false
          });
        }
      }).catch(err=>{
        console.log(err, "<<<<<<<<<< error get document pas join")
      })
    },
    setRoomStatus(context, payload) {
      db.collection('room').doc(payload)
        .onSnapshot(doc => {
          context.commit('setRoomStatus', doc.data())
        })
        //console.log()
    },
  }
})
