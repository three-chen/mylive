<script setup lang="ts">
import { useRTCStore } from '@/stores/rtc';
import { onMounted, ref } from 'vue';

const chatBox = ref(null);
const rtcStroe = useRTCStore();

onMounted(() => {
    rtcStroe.setChatBoxElement(chatBox.value);
})
</script>

<template>
    <div class="chatContainer">
        <div class="chatBox" ref="chatBox"></div>
    </div>
</template>

<style lang="scss" scoped>
.chatContainer {
    width: 20%;
    margin-right: 10%;
    display: flex;
    align-items: center;

    .chatBox {
        width: 100%;
        height: 100%;
        // /* background-color: #F1F2F3; */
        overflow-y: auto;
        overflow-x: hidden;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px #999;
    }
}
</style>