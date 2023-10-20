<script setup lang="ts">
import LiveRTC from '@/liveRTC';
import { watch } from 'vue';
import LiveChat from './LiveChat.vue';
import LiveMedia from './LiveMedia.vue';

import { useUserStore } from '@/stores/user';
const userStore = useUserStore();
import { useRTCStore } from '@/stores/rtc';
const rtcStroe = useRTCStore();

const props = defineProps(['room'])
const url = 'ws://localhost:3000'

const liveRTC = new LiveRTC(props.room, userStore.user.userInfo.username)
rtcStroe.setLiveRTC(liveRTC)
console.log('liveRTC', rtcStroe.liveRTC);

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