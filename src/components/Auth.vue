<template>
    <div class="auth">
        <div class="top">
            <div class="icon">
                <i class="fas fa-plug "></i><br>
                <span class="top-text">
                    Open <a href="https://google.com" class="website">www.NoConsole.com</a> on Desktop to get code
                </span>
            </div>
            <div class="code-input">
                <i class="fas fa-plug code-input-icon"></i>
                <div class="code-input-text">{{code}}</div>
            </div>
        </div>
        <div class="bottom">
            <div class="grid">
                <div class="digit one" @click="addCode(1)" >1</div>
                <div class="digit one" @click="addCode(2)" >2</div>
                <div class="digit one" @click="addCode(3)" >3</div>
                <div class="digit one" @click="addCode(4)" >4</div>
                <div class="digit one" @click="addCode(5)" >5</div>
                <div class="digit one" @click="addCode(6)" >6</div>
                <div class="digit one" @click="addCode(7)" >7</div>
                <div class="digit one" @click="addCode(8)" >8</div>
                <div class="digit one" @click="addCode(9)" >9</div>
                <div class="digit one" @click="clearCode()" style="color:red;" ><i class="fas fa-times"></i></div>
                <div class="digit one" @click="addCode(0)" >0</div>
                <div class="digit one" @click="validate()" style="color:green;" ><i class="fas fa-check"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { socketStart , socket } from './socket';
    export default {
        data() {
            return {
                code:'',
            }
        },
        mounted() {
            
        },
        methods: {
            addCode(val) {
                
                if(this.code.length < 6){
                    this.code += val;
                }
                
            },
            clearCode() {
                this.code = '';
            },
            validate() {

                if(this.code == '0') {
                    
                    socketStart(this.code)
                    // let data = { keyCode: 15 }
                    // socket.emit('CONTROLLER_CONTROL', { data } )
                    this.$emit('clicked','1')
                }
                else {
                    this.code = "INVALID"
                    // this.$emit('clicked','0')
                }
            }
        }
    }
</script>

<style scoped>


@media screen and (min-width: 800px) {
    .auth {
        display: none;
    }
}
@media screen and (max-width: 800px) {
    .auth {
        margin:0;
        padding: 0;
        width: 100vw;
        height: 100vh;
        background-color: #1f1f1f;
    }
    .top {
        height: 40vh;
        color: white;
    }
    .icon {
        padding: 12vh 4vw 2vh 4vw;
    }
    .fa-plug {
        font-size: 10vw;
        color: orangered;
        padding-bottom: 2vh;
    }
    .top-text {
        padding: 1vh 4vw;
        padding-right: 8vw;
    }
    .website {
        text-decoration: none;
        color: orangered;
    }
    .code-input {
        background-color: #2d2d2d;
        height: 8vh;
        margin: 1vh 8vw 1vh 8vw;
        padding-bottom: 1vh;
        display: flex;
    }
    .code-input-icon {
        margin: 2vh 2vh 1vh 2vh ;
    }
    .code-input-text {
        font-size: 2rem;
        margin: 2vh 4vh 1vh 1vh;
        letter-spacing: 0.8rem;
        font-family: 'Orbitron', sans-serif;
    }
    .bottom {
        height: 60vh;
        background-color: #2d2d2d;
    }
    .grid {
        width: 80vw;
        height: 50vh;
        display: flex;
        flex-flow: wrap row;
        justify-content: space-between;
        padding: 5vh 10vw 10vh 10vw;
        color: white; 
    }
    .digit {
        cursor: pointer;
        border-bottom: 0.3rem solid #000;
        width: 25vw;
        height: 10vh;
        padding-top: 1vh;
        font-size: 3rem;
        background-color: #3b3b3b;
        font-family: 'Orbitron', sans-serif;
    }
    .digit:active {
        border-bottom: none;
    }
}

</style>