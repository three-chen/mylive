<script setup lang="ts">
import { RouterView } from 'vue-router';

import MyHeaderVue from '@/components/MyHeader.vue';

</script>

<template>
  <div class="box">
    <MyHeaderVue></MyHeaderVue>

    <RouterView />
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
</style>
