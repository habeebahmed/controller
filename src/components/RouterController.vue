<template>
    <div class="main">
        <Auth v-if="layout == '1'" @clicked="onAuth" />
        <DPadController v-else-if="layout == '2'"/>
        <ActionController v-else-if="layout == '3'"/>
    </div>
</template>

<script>
import { socket } from './socket'
import Auth from '@/components/Auth'
import DPadController from '@/components/DPadController'
import ActionController from '@/components/ActionController'
    export default {
        components: {
            Auth,
            DPadController,
            ActionController

        },
        watch: {
            socket: (d,v) => {
                socket.on('message', (payload) => {

                })
            }
        },
        mounted(){

        },
        data() {
            return {
                layout:'1'
            }
        },
        methods: {
            onAuth(val){
                if(val == 1) {
                    this.layout = 2;
                }
            }
        }
    }
</script>

<style scoped>

.main {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
}

</style>