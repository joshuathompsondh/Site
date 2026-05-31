import { create } from 'zustand'
import type { Track } from './types'
import { tracks } from './mock-data'

export type ViewId =
  | 'core'
  | 'notes'
  | 'canonical'
  | 'audio'
  | 'emails'
  | 'ai-lab'
  | 'handoff'
  | 'all-files'

interface AppStore {
  currentView: ViewId
  setCurrentView: (v: ViewId) => void

  currentTrack: Track | null
  isPlaying: boolean
  currentTime: number
  volume: number

  setTrack: (track: Track) => void
  togglePlay: () => void
  setTime: (t: number) => void
  incrementTime: () => void
  setVolume: (v: number) => void

  selectedTrackId: string | null
  setSelectedTrack: (id: string) => void

  selectedNoteId: string | null
  setSelectedNote: (id: string) => void
}

export const useAppStore = create<AppStore>((set, get) => ({
  currentView: 'core',
  setCurrentView: (v) => set({ currentView: v }),

  currentTrack: tracks[0],
  isPlaying: false,
  currentTime: 137,
  volume: 0.75,

  setTrack: (track) =>
    set({ currentTrack: track, currentTime: 0, isPlaying: true, selectedTrackId: track.id }),

  togglePlay: () => set((s) => ({ isPlaying: !s.isPlaying })),

  setTime: (t) => set({ currentTime: t }),

  incrementTime: () =>
    set((s) => {
      if (!s.currentTrack || !s.isPlaying) return {}
      const next = s.currentTime + 1
      if (next >= s.currentTrack.durationSeconds) {
        return { currentTime: s.currentTrack.durationSeconds, isPlaying: false }
      }
      return { currentTime: next }
    }),

  setVolume: (v) => set({ volume: Math.max(0, Math.min(1, v)) }),

  selectedTrackId: tracks[0].id,
  setSelectedTrack: (id) => set({ selectedTrackId: id }),

  selectedNoteId: 'note-01',
  setSelectedNote: (id) => set({ selectedNoteId: id }),
}))
