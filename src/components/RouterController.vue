<template>
    <div id="main">
        <Auth v-if="layout == '1'" @clicked="onAuth" @onFullScreen="onFullScreen"/>
        <DPadController v-else-if="layout == '2'" @layoutChange="onLayout" @setController="setController" />
        <ActionController v-else-if="layout == '3' && controllerId==1" @layoutChange="onLayout"/>
        <ActionController2 v-else-if="layout == '3'" @layoutChange="onLayout"/>
    </div>
</template>

<script>
import { socket } from './socket'
import Auth from '@/components/Auth'
import DPadController from '@/components/DPadController'
import ActionController from '@/components/ActionController'
import ActionController2 from '@/components/ActionController2'
    export default {
        components: {
            Auth,
            DPadController,
            ActionController,
            ActionController2

        },
        mounted() {
            console.log("Mounted");
            //Add full screen
            
            const vm = this
            if(socket) {
                socket.on('message', (payload) => {

            })
            socket.on('LAYOUT', (payload) => {
                console.log("In Layout Parent");
                if(payload.status && payload.layout == '2') {
                    console.log("Layout 2");
                    vm.layout = 2;
                }
                if(payload.status && payload.layout == '3') {
                    console.log("Layout 3");
                    vm.layout = 3;
                }
            })
            }
            
        },
        data() {
            return {
                layout:'1',
                controllerId: null
            }
        },
        methods: {
            onAuth(val){
                if(val == 1) {
                    this.layout = 2;
                    this.fullscreen = true
                }
            },
            onLayout(val) {
                console.log("In onLayout "+val);
                this.layout = val
            },
            setController(val) {
                console.log("ControllerId "+val);
                this.controllerId = val;
            },
            onFullScreen() {
                var elem = document.getElementById("main");
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) { /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) { /* IE/Edge */
                    elem.msRequestFullscreen();
                }
            }
        }
    }
</script>

<style scoped>

#main {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
}
.main-fs {

}

</style>