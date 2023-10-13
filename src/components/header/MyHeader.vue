<script lang="ts" setup>
import LeftHeader from './LeftHeader.vue';
import RightHeader from './RightHeader.vue';
import SearchHeader from './SearchHeader.vue';
</script>

<template>
    <div class="header">
        <LeftHeader />
        <SearchHeader />
        <RightHeader />
    </div>
</template>

<style scoped>
.header {
    position: sticky;
    height: 80px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    border-bottom: solid 1px #e5e5e5;
}
</style>