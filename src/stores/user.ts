import { defineStore } from 'pinia'
import { reactive } from 'vue'

import type UserInfo from '@/service/data/user/UserInfo'
import type LoginR from '@/service/data/auth/loginR'

export const useUserStore = defineStore('user', () => {
  const user = reactive<{ userInfo: UserInfo }>({
    userInfo: {
      username: '',
      useremail: '',
      token: '',
      role: ''
    }
  })

  function setUser(loginR: LoginR) {
    user.userInfo.username = loginR.username
    user.userInfo.useremail = loginR.useremail
    user.userInfo.token = loginR.token
    user.userInfo.role = loginR.auth.role
  }

  return {
    user,
    setUser
  }
})
