<script setup lang="ts">
import LiveChat from './LiveChat.vue';
import LiveMedia from './LiveMedia.vue';
import LiveRTC from '@/liveRTC';

const url = 'ws://localhost:3000'
const liveRTC = new LiveRTC()
liveRTC.connect(url)
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