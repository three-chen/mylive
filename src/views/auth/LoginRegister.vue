<script setup lang="ts">
import { postLoginInfo } from '@/service/api/auth/postLogin';
import { postRegisterInfo } from '@/service/api/auth/postRegister';
import type LoginInfo from '@/service/data/auth/LoginInfo';
import type RegisterInfo from '@/service/data/auth/RegisterInfo';

import type R from '@/service/data/R';
import type LoginR from '@/service/data/auth/loginR';

import { authRenderRouter } from '@/service/auth/index'

import { ref } from 'vue';

import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

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
    postLoginInfo(loginInfo).then((res: R<LoginR>) => {
        userStore.setUser(res.data!)
        alert("登录成功")
        authRenderRouter(res.data!.auth)
    }).catch((err: R<LoginR>) => {
        console.log(err);
    })
}

function register() {
    const userInfo: RegisterInfo = {
        name: registerUserName.value,
        password: registerPass.value,
        email: registerEmail.value
    }
    postRegisterInfo(userInfo).then((res) => {
        console.log(res);
        alert("注册成功")
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