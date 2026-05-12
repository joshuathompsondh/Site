export type TrackType = 'demo' | 'session' | 'live' | 'fragment' | 'ritual'

export interface Track {
  id: string
  num: number
  title: string
  album: string
  type: TrackType
  dateAdded: string
  duration: string
  durationSeconds: number
}

export interface ActivityItem {
  id: string
  icon: 'file' | 'audio' | 'book' | 'mail' | 'lab' | 'hex'
  label: string
  time: string
}

export interface PinnedItem {
  id: string
  icon: 'file' | 'audio' | 'book'
  label: string
}

export interface Note {
  id: string
  title: string
  date: string
  stars: number
  content: string[]
  created: string
  edited: string
  noteId: string
}

export interface Session {
  id: string
  iconType: 'circle' | 'triangle' | 'lines' | 'hex' | 'wave'
  name: string
  tracks: number
}

export interface CanonicalText {
  id: string
  title: string
  category: string
  date: string
  tags: string[]
  excerpt: string
}

export interface EmailEntry {
  id: string
  from: string
  subject: string
  date: string
  preview: string
  read: boolean
}

export interface StatusTile {
  id: string
  label: string
  value: number
  iconType: 'rings' | 'wave' | 'hex' | 'triangle' | 'sliders'
}

export interface QuickLink {
  id: string
  icon: 'file' | 'search' | 'audio' | 'book' | 'upload' | 'hex'
  label: string
}

export interface AiLabEntry {
  id: string
  title: string
  model: string
  date: string
  status: 'complete' | 'running' | 'archived'
  type: string
}

export interface HandoffEntry {
  id: string
  title: string
  recipient: string
  date: string
  status: 'pending' | 'delivered' | 'acknowledged'
  notes: string
}

export interface FileEntry {
  id: string
  name: string
  type: string
  size: string
  date: string
  section: string
}
