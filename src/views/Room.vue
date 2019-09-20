<template>
  <div class="room">
    <div class="room-header">
      <h1>Room List</h1>
      <button @click="toggleAddRoomForm">Create room</button>
      <AddRoom v-if="isShowAdd" @close="toggleAddRoomForm"></AddRoom>
    </div>
    <div class="room-content">
      <RoomCard
        v-for="(room, index) in $store.state.rooms"
        :key="index"
        :room="room">
      </RoomCard>
    </div>
  </div>
</template>

<script>

import RoomCard from '../components/RoomCard.vue'
// import RoomList from '../components/RoomList.vue'
import AddRoom from '../components/AddRoom.vue'

export default {
  name: 'Room',
  components: {
    RoomCard,
    AddRoom,
    // RoomList
  },
  data() {
    return {
      isShowAdd: false
    }
  },
  methods: {
    toggleAddRoomForm() {
      this.isShowAdd = !this.isShowAdd
    }
  },
  computed: {
    rooms() {
      return this.$store.state.rooms
    }
  },
  created() {
    this.$store.dispatch("getAllRooms");
  }
}
</script>

<style scoped>

.room{
  display: flex;
  flex-direction: column;
  height: 100%;
}
.room-header{
  padding: 10px;
  display: flex;
  justify-content: space-between;
}
.room-header h1{
  color: #ffc933;
  font-family: 'Squada One', cursive;
}
.room-header button{
  padding: 10px 30px;
  border: none;
  font-size: 20pt;
  font-family: 'Squada One', cursive;
  background-color: #ffbb00;
  border: 2px solid #ffffff;
  border-radius: 10pt;
  cursor: pointer;
  align-self: center;
}
.room-header button:hover{
  background-color: #ffc933;
}
.room-header button:focus{
  outline: none;
}
.room-header button:active{
  transform: scale(0.9);
}
.room-content {
  flex-grow: 1;
  overflow: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  background-color: #ffffff;
}

</style>