<template>
  <div class="controller">
    <div class="left-buttons">
      <div><i class="fas fa-chevron-up l-button" @click="emitKey(37)"></i></div>
      <div>
      <i class="fas fa-chevron-left l-button" @click="emitKey(40)"></i>
      <i class="fas fa-circle l-button" @click="emitKey(13)"></i>
      <i class="fas fa-chevron-right l-button" @click="emitKey(38)"></i>
      </div>
      <div><i class="fas fa-chevron-down l-button" @click="emitKey(39)"></i></div>
    </div>
    <div class="right-buttons">
      <i class="fas fa-circle r-button r-button-green" @click="emitKey(8)"></i><br>
      <i class="fas fa-rotate-90 pause-play r-button-green" :class= "[value]" @click="emitKey(32);swap()"></i><br><br>
      <i class="fas fa-circle r-button r-button-red" @click="emitKey(82)"></i>
    </div>
  </div>
</template>

<script>
import { socket } from './socket'
export default {
  name: 'Controller',
  data () {
    return {
      value: "fa-pause"
    }
  },
  methods: {
    emitKey(val){
      let data = { keyCode: val }
      socket.emit('CONTROLLER_CONTROL', { data } )
    },
    swap(){
      this.value = this.value == "fa-pause" ? "fa-play" : "fa-pause"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@media screen and (max-width: 800px){
  .controller{
    background-color: black;
    height: 100vh;
    width: 100vw;
  }
  .left-buttons {
    position: absolute;
    height: 40vh;
    width: 70vw;
    /* border: 1px solid whitesmoke; */
    border-radius: 1rem;
    top: 3vh;
    right: 15vw;
  }

   .l-button {
    font-size: 28vw;
    cursor: pointer;

  }
  
  .right-buttons {
    position: absolute;
    height: 40vh;
    width: 70vw;
    /* border: 1px solid whitesmoke; */
    border-radius: 1rem;
    top: 55vh;
    right: 15vw;
  }
  
  .r-button {
    font-size: 30vw;
    cursor: pointer;
  }
  .r-button-red {
    color: rgb(178, 34, 34);
  }
  .r-button-green {
    color: #00ff7f;
  }
  .pause-play {
    float: left;
    color: brown;
    font-size: 8vw;
  }
}

@media screen and (min-width: 800px){
  .controller{
    display: none;
  }
}
</style>
