<script lang="ts" setup>
</script>

<template>
    <ul class="rightHeader">

        <router-link to="/auth/login">
            <div class="feature">登录</div>
        </router-link>
    </ul>
</template>

<style lang="scss" scoped>
.rightHeader {
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