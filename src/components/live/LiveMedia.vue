<script setup lang="ts">
import { useRTCStore } from '@/stores/rtc';
import { onMounted, ref } from 'vue';

const videoMedia = ref(null);
const rtcStroe = useRTCStore();

onMounted(() => {
    rtcStroe.setMediaBoxElement(videoMedia.value);
})

</script>

<template>
    <div class="mediaBox" ref="videoMedia">
    </div>
</template>

<style lang="scss">
.mediaBox {
    width: 70%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .video {
        --n: 3;
        --gap: calc((100% - var(--n) * 300px) / (var(--n)) / 2);
        width: 300px;
        height: 225px;
        margin: 2rem var(--gap);
    }
}
</style>