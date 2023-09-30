<script setup lang="ts">
import LiveRTC from '@/liveRTC';
import { watch } from 'vue';
import LiveChat from './LiveChat.vue';
import LiveMedia from './LiveMedia.vue';

import { useVideoStore } from '@/stores/video';
const videoStore = useVideoStore()

const url = 'ws://localhost:3000'
const liveRTC = new LiveRTC()
liveRTC.connect(url)
watch(videoStore, () => {
    if (videoStore.videoElement) {
        liveRTC.attachStream(videoStore.videoElement)
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
    align-items: center;
    justify-content: center;
}
</style>