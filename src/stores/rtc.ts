import type LiveRTC from '@/liveRTC'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRTCStore = defineStore('rtc', () => {
  const liveRTC = ref<LiveRTC | null>(null)

  const mediaBoxElement = ref<HTMLDivElement | null>(null)

  const chatBoxElement = ref<HTMLDivElement | null>(null)

  const setLiveRTC = (rtc: LiveRTC | null) => {
    liveRTC.value = rtc
  }

  const setMediaBoxElement = (element: HTMLDivElement | null) => {
    mediaBoxElement.value = element
  }

  const setChatBoxElement = (element: HTMLDivElement | null) => {
    chatBoxElement.value = element
  }

  return {
    liveRTC,
    setLiveRTC,
    mediaBoxElement,
    setMediaBoxElement,
    chatBoxElement,
    setChatBoxElement
  }
})
