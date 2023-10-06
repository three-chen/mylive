import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useRTCStore = defineStore('rtc', () => {
  const mediaBoxElement = ref<HTMLDivElement | null>(null)

  const chatBoxElement = ref<HTMLDivElement | null>(null)

  const setMediaBoxElement = (element: HTMLDivElement | null) => {
    mediaBoxElement.value = element
  }

  const setChatBoxElement = (element: HTMLDivElement | null) => {
    chatBoxElement.value = element
  }

  return {
    mediaBoxElement,
    setMediaBoxElement,
    chatBoxElement,
    setChatBoxElement
  }
})
