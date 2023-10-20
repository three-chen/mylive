<script setup lang="ts">
import LiveBox from '@/components/live/LiveBox.vue';
import router from '@/router'

</script>

<template>
  <div class="box">
    <LiveBox :room="router.currentRoute.value.params.room" />
  </div>
</template>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: calc(100vh - 80px);
  background-color: #fff;
}
</style>
