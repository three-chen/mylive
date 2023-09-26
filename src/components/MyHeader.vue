<script lang="ts" setup>
</script>

<template>
    <div class="header">
        <div class="header_container">
            <div class="header_icon"><img src="/images/LOGO.png" alt=""></div>
            <div class="header_des">
                <p>ember 直播</p>
                <p style="margin:0 20px">|</p>
                <p>good</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #040108;
}

.header_container {
    padding-left: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.header_des {
    font-size: 16px;
    font-weight: 400;
    color: #fff;
    margin-left: 16px;
    display: flex;
    align-items: center;
    flex-direction: row;
}

.header_icon img {
    width: 48px;
    height: 48px;
}
</style>