<script setup lang="ts">
</script>

<template>
    <div class="mediaBox">
        <video class="media"></video>
    </div>
</template>

<style scoped>
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
