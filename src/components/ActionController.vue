<template>
  <div class="controller2">
    <div class="left-buttons">
      <div>
        <span class="fa-stack fa-2x l-button" @click="emitKey(71)" >
          <i class="fas fa-square fa-stack-2x" style="color:blue"></i>
          <i class="fas fa-caret-up fa-stack-2x fa-inverse"></i>
        </span>
      </div>
      <div>
        <span class="fa-stack fa-2x l-button" @click="emitKey(72)">
          <i class="fas fa-square fa-stack-2x" style="color:blue"></i>
          <i class="fas fa-caret-left fa-stack-2x fa-inverse"></i>
        </span>
        <span class="fa-stack fa-2x l-button" @click="emitKey(89)">
          <i class="fas fa-square fa-stack-2x" style="color:blue"></i>
          <i class="fas fa-caret-right fa-stack-2x fa-inverse"></i>
        </span>
      </div>
      <div>
        <span class="fa-stack fa-2x l-button" @click="emitKey(74)">
          <i class="fas fa-square fa-stack-2x" style="color:blue"></i>
          <i class="fas fa-caret-down fa-stack-2x fa-inverse"></i>
        </span>
      </div>
    </div>
    <div class="right-buttons">
      <div>
        <span class="fa-stack fa-1x r-button" @click="emitKey(83)">
          <i class="fas fa-circle fa-stack-2x" style="color:blue"></i>
          <span class="fas fa-stack-1x fa-rotate-90 fa-inverse">X</span>
        </span>
      </div>
      <div>
        <span class="fa-stack fa-1x r-button" @click="emitKey(68)">
          <i class="fas fa-circle fa-stack-2x" style="color:green"></i>
          <span class="fas fa-stack-1x fa-rotate-90 fa-inverse">A</span>
        </span>
        <span class="fa-stack fa-1x r-button" @click="emitKey(65)">
          <i class="fas fa-circle fa-stack-2x" style="color:yellow"></i>
          <span class="fas fa-stack-1x fa-rotate-90 fa-inverse">Y</span>
        </span>
      </div>
      <div>
        <span class="fa-stack fa-1x r-button" @click="emitKey(70)">
          <i class="fas fa-circle fa-stack-2x" style="color:red"></i>
          <span class="fas fa-stack-1x fa-rotate-90 fa-inverse">B</span>
        </span>
      </div>
    </div>

    <div class="bottom">
      <div class="back">
        <i class="fas fa-reply fa-rotate-90" style="color:red" @click="emitKey(8)" ></i>
      </div>
      <div class="restart">
        <i class="fas fa-redo-alt fa-rotate-90" style="color:red" @click="emitKey(32)"></i>
      </div>
      <div class="block">
        <i class="fas fa-shield-alt fa-rotate-90" style="color:red" @click="emitKey(16)"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { socket } from './socket'
export default {
  name: "Controller2",
  mounted() {
    const vm = this
    socket.on('LAYOUT', (payload) => {
      console.log("In Layout ActionController"+payload.layout);
      vm.$emit('layoutChange',payload.layout)
    })
  },
  data() {
    return {};
  },
  methods: {
    emitKey(val){
      let data = { keyCode: val }
      socket.emit('CONTROLLER_CONTROL', { data } )
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 800px) {
  .controller2 {
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
    font-size: 13vw;
    cursor: pointer;
  }

  .fa-caret-square-up {
    color: red;
  }

  .right-buttons {
    position: absolute;
    height: 44vh;
    width: 70vw;
    /* border: 1px solid whitesmoke; */
    border-radius: 1rem;
    top: 55vh;
    right: 15vw;
  }
  .r-button {
    font-size: 13vw;
    cursor: pointer;
  }
  .r-button-red {
    color: rgb(178, 34, 34);
  }
  .r-button-green {
    color: #00ff7f;
  }

  .bottom {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 17vw;
    height: 40vh;
    top: 35vh;
    left: 2vw;
    /* border: 1px solid whitesmoke; */
    justify-content: space-around;
    align-content: space-between;
  }
  .back {
    cursor: pointer;
    font-size: 5vh;

  }
  .restart {
    cursor: pointer;
    font-size: 5vh;
  }
  .block {
    cursor: pointer;
    font-size: 10vh;
  }
}

@media screen and (min-width: 800px) {
  .controller2 {
    display: none;
  }
}
</style>
