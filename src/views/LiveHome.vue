<script setup lang="ts">
import LiveBox from '@/components/live/LiveBox.vue';
</script>

<template>
  <div class="box">
    <LiveBox />
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #fff;
}
</style>
