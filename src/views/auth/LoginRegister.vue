<script setup lang="ts">
import { postRegisterInfo } from '@/service/api/auth/postRegister'
import type RegisterInfo from '@/service/data/auth/RegisterInfo';
import { postLoginInfo } from '@/service/api/auth/postLogin'
import type LoginInfo from '@/service/data/auth/LoginInfo';

import { ref } from 'vue';

const loginEmail = ref('')
const loginPass = ref('')

const registerUserName = ref('')
const registerPass = ref('')
const registerEmail = ref('')

function login() {
    const loginInfo: LoginInfo = {
        email: loginEmail.value,
        password: loginPass.value
    }
    postLoginInfo(loginInfo).then((res: any) => {
        console.log(res);
    }).catch((err: any) => {
        console.log(err);
    })
}

function register() {
    const userInfo: RegisterInfo = {
        name: registerUserName.value,
        password: registerPass.value,
        email: registerEmail.value
    }
    postRegisterInfo(userInfo).then((res: any) => {
        console.log(res);
    }).catch((err: any) => {
        console.log(err);
    })
}

</script>

<template>
    <div class="box">
        <div>
            <h1>登录</h1>
            <input type="email" placeholder="邮箱" v-model="loginEmail">
            <input type="password" placeholder="密码" v-model="loginPass">
            <button @click="login()">登录</button>
        </div>
        <div>
            <h1>注册</h1>
            <input type="text" placeholder="用户名" v-model="registerUserName">
            <input type="password" placeholder="密码" v-model="registerPass">
            <input type="email" placeholder="邮箱" v-model="registerEmail">
            <button @click="register()">注册</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.box {
    display: flex;
    flex-direction: column;
    height: 100vh;
}
</style>
@/service/api/auth/postLogin@/service/api/auth/postRegister@/service/data/auth/LoginInfo