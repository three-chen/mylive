<script setup lang="ts">
import { useVideoStore } from '@/stores/video';
import { onMounted, ref } from 'vue';

const videoMedia = ref(null);
const videoStore = useVideoStore();

onMounted(() => {
    videoStore.setVideoElement(videoMedia.value);
})
</script>

<template>
    <div class="mediaBox">
        <video class="media" ref="videoMedia"></video>
    </div>
</template>

<style lang="scss" scoped>
.mediaBox {
    width: 70%;
    height: 80%;
    aspect-ratio: 16/9;
    min-width: 668px;
    min-height: 376px;

    .media {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
</style>
