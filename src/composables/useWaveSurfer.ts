import type { UseWaveSurfer, WaveSurferIns } from '@/types'
import { useWaveSurferInstance } from '@/composables/useWaveSurferInstance'
import { useWaveSurferState } from '@/composables/useWaveSurferState'
import type WaveSurfer from 'wavesurfer.js'
import type { Ref } from 'vue'

export const useWaveSurfer = ({containerRef, options}:WaveSurferIns): UseWaveSurfer =>{
  const {waveSurfer} = useWaveSurferInstance({containerRef, options})
  const {isReady, totalDuration, isPlaying, currentTime} = useWaveSurferState(waveSurfer as Ref<WaveSurfer>)
  return {
    waveSurfer,
    isReady, 
    totalDuration, 
    isPlaying, 
    currentTime
  }
}

