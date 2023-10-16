import { defineStore } from 'pinia'
import { reactive } from 'vue'

import type UserInfo from '@/service/data/user/UserInfo'

export const useUserStore = defineStore('user', () => {
  const user = reactive<{ userInfo: UserInfo }>({
    userInfo: {
      username: '',
      useremail: '',
      token: ''
    }
  })

  function setUser(data: UserInfo) {
    user.userInfo = data
  }

  return {
    user,
    setUser
  }
})
