<script setup lang="ts">
import { RouterView } from 'vue-router';

import MyHeaderVue from '@/components/header/MyHeader.vue';

</script>

<template>
  <div class="box">
    <MyHeaderVue></MyHeaderVue>

    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
