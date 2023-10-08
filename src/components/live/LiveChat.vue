<script setup lang="ts">
import { useRTCStore } from '@/stores/rtc';
import { onMounted, ref } from 'vue';

import RichText from '@/modules/richText/index';

const chatBox = ref(null);
const richTextBox = ref(null);
const rtcStroe = useRTCStore();

const richText = new RichText();

onMounted(() => {
    rtcStroe.setChatBoxElement(chatBox.value);
    richText.mount(richTextBox.value!);

})

function sendMessage() {
    const message = richText.getHTML();
    const liveRTC = rtcStroe.liveRTC;

    liveRTC!.sendMessage(message);
    richText.clear();

}
</script>

<template>
    <div class="chatContainer">
        <div class="chatBox" ref="chatBox"></div>
        <div class="richTextBox" ref="richTextBox"></div>
        <div class="sendMessage" @click="sendMessage()">发送信息</div>
    </div>
</template>

<style lang="scss" scoped>
.chatContainer {
    position: relative;
    width: 20%;
    margin-right: 10%;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    .chatBox {
        width: 100%;
        height: 60%;
        // /* background-color: #F1F2F3; */
        overflow-y: auto;
        overflow-x: hidden;
    }

    .richTextBox {
        width: 100%;
        height: 30%;
        overflow-y: auto;
    }

    .sendMessage {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 40%;
        height: 10%;
        cursor: pointer;
        background-color: skyblue;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>