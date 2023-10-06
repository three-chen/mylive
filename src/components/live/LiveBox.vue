<script setup lang="ts">
import LiveRTC from '@/liveRTC';
import { useRTCStore } from '@/stores/rtc';
import { watch } from 'vue';
import LiveChat from './LiveChat.vue';
import LiveMedia from './LiveMedia.vue';

const rtcStroe = useRTCStore();

const url = 'ws://localhost:3000'
const liveRTC = new LiveRTC()
window.addEventListener('pagehide', () => liveRTC.disconnect())

let times = 0;
watch(rtcStroe, () => {
    times++;
    if (rtcStroe.mediaBoxElement && rtcStroe.chatBoxElement && times === 1) {

        liveRTC.attachBox(rtcStroe.mediaBoxElement, rtcStroe.chatBoxElement)
        liveRTC.connect(url)
    }
})
</script>

<template>
    <div class="liveBox">
        <LiveMedia />
        <LiveChat />
    </div>
</template>

<style scoped>
.liveBox {
    height: 100%;
    display: flex;
}
</style>