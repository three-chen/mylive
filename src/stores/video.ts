import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useVideoStore = defineStore('video', () => {
  const videoElement = ref<HTMLVideoElement | null>(null)

  const setVideoElement = (element: HTMLVideoElement | null) => {
    videoElement.value = element
  }

  const setVideoSrcobj = (stream: any) => {
    if (videoElement.value) {
      videoElement.value.srcObject = stream
    }
  }

  return {
    videoElement,
    setVideoElement,
    setVideoSrcobj
  }
})
