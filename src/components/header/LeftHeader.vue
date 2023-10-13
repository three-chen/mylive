<script lang="ts" setup>
</script>

<template>
    <ul class="leftHeader">
        <ul class="feature">音乐</ul>
        <router-link to="/webrtc/home">
            <ul class="feature">视频聊天室</ul>
        </router-link>

        <ul class="feature">直播</ul>
    </ul>
</template>

<style lang="scss" scoped>
.leftHeader {
    display: flex;
    align-items: center;

    .feature {
        padding: 0 10px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        color: #999;
        border-right: 1px solid #e5e5e5;
        border-bottom: 1px solid #e5e5e5;
        cursor: pointer;

        &:hover {
            color: #333;
        }
    }
}
</style>