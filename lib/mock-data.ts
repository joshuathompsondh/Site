import type {
  Track,
  ActivityItem,
  PinnedItem,
  Note,
  Session,
  CanonicalText,
  EmailEntry,
  StatusTile,
  QuickLink,
  AiLabEntry,
  HandoffEntry,
  FileEntry,
} from './types'

export const tracks: Track[] = [
  {
    id: 'track-01',
    num: 1,
    title: 'The Fall of What Is',
    album: 'Demo I',
    type: 'demo',
    dateAdded: 'APR 24, 2026',
    duration: '06:40',
    durationSeconds: 400,
  },
  {
    id: 'track-02',
    num: 2,
    title: 'No Kingdom, No Throne',
    album: 'Demo I',
    type: 'demo',
    dateAdded: 'APR 24, 2026',
    duration: '05:12',
    durationSeconds: 312,
  },
  {
    id: 'track-03',
    num: 3,
    title: 'From the Unseen',
    album: 'Field Session I',
    type: 'session',
    dateAdded: 'APR 23, 2026',
    duration: '07:33',
    durationSeconds: 453,
  },
  {
    id: 'track-04',
    num: 4,
    title: 'Ashes to Winter',
    album: 'Demo II',
    type: 'demo',
    dateAdded: 'APR 22, 2026',
    duration: '04:58',
    durationSeconds: 298,
  },
  {
    id: 'track-05',
    num: 5,
    title: 'Signal in the Silence',
    album: 'Field Session I',
    type: 'session',
    dateAdded: 'APR 22, 2026',
    duration: '06:01',
    durationSeconds: 361,
  },
  {
    id: 'track-06',
    num: 6,
    title: 'Between Light & Rot',
    album: 'Demo II',
    type: 'demo',
    dateAdded: 'APR 21, 2026',
    duration: '05:47',
    durationSeconds: 347,
  },
  {
    id: 'track-07',
    num: 7,
    title: 'They Will Not Find Us',
    album: 'Live & Raw',
    type: 'live',
    dateAdded: 'APR 20, 2026',
    duration: '08:19',
    durationSeconds: 499,
  },
  {
    id: 'track-08',
    num: 8,
    title: 'A Map Without North',
    album: 'Fragments',
    type: 'fragment',
    dateAdded: 'APR 19, 2026',
    duration: '03:46',
    durationSeconds: 226,
  },
  {
    id: 'track-09',
    num: 9,
    title: 'Ritual of the Forgotten',
    album: 'Rituals',
    type: 'ritual',
    dateAdded: 'APR 18, 2026',
    duration: '06:24',
    durationSeconds: 384,
  },
  {
    id: 'track-10',
    num: 10,
    title: 'Dust in the Threshold',
    album: 'Live & Raw',
    type: 'live',
    dateAdded: 'APR 17, 2026',
    duration: '07:05',
    durationSeconds: 425,
  },
]

export const recentActivity: ActivityItem[] = [
  {
    id: 'act-01',
    icon: 'file',
    label: 'Chapter draft updated',
    time: '2h ago',
  },
  {
    id: 'act-02',
    icon: 'audio',
    label: 'Frequency anomaly detected',
    time: '4h ago',
  },
  {
    id: 'act-03',
    icon: 'book',
    label: 'Canonical ref: hypostasis',
    time: '6h ago',
  },
  {
    id: 'act-04',
    icon: 'mail',
    label: 'Message from the archon',
    time: '1d ago',
  },
  {
    id: 'act-05',
    icon: 'hex',
    label: 'AI lab: synthesis complete',
    time: '1d ago',
  },
]

export const pinnedItems: PinnedItem[] = [
  { id: 'pin-01', icon: 'file', label: 'thesis outline — v3' },
  { id: 'pin-02', icon: 'audio', label: 'rough mix — track 07' },
  { id: 'pin-03', icon: 'book', label: 'the hypostasis of light' },
  { id: 'pin-04', icon: 'book', label: 'Gospel of Thomas' },
  { id: 'pin-05', icon: 'file', label: 'Principles of Detachment' },
]

export const quickLinks: QuickLink[] = [
  { id: 'ql-01', icon: 'file', label: 'Documents' },
  { id: 'ql-02', icon: 'search', label: 'Search archive' },
  { id: 'ql-03', icon: 'audio', label: 'Audio tools' },
  { id: 'ql-04', icon: 'book', label: 'Canonical texts' },
  { id: 'ql-05', icon: 'upload', label: 'Upload file' },
  { id: 'ql-06', icon: 'hex', label: 'AI assistant' },
]

export const notes: Note[] = [
  {
    id: 'note-01',
    noteId: 'N-0013',
    title: 'The weight of unspoken truths',
    date: 'MAY 2026',
    stars: 5,
    content: [
      'Some truths are not meant for the mouth. They live in the bones, they settle in the breath between words. To speak them is to invade a silence that was carefully built for a reason.',
      'We carry them like stones in the pocket of the soul—heavy, unmoved, undeniable. They shape the way we walk, the way we forgive, the way we choose to be kind even when no one deserves it.',
      'Maybe the world would break if every hidden thing were shouted into the light. Or maybe it would heal.',
      'I do not know. So I wait. And I write. The page is safer. The page listens.',
    ],
    created: 'May 03, 2026',
    edited: 'May 07, 2026',
  },
  {
    id: 'note-02',
    noteId: 'N-0012',
    title: 'Echoes through the empty halls',
    date: 'MAY 2026',
    stars: 4,
    content: [
      'The demiurge did not create in silence. Every act of false making is accompanied by noise—the grinding of matter into form, the scream of light becoming trapped.',
      'We hear it still. In tinnitus. In the hum of machines. In the frequency beneath all sound that no instrument can tune to but every body knows.',
      'What if the album is a tuning fork? What if we are calibrating something that has been out of alignment since the beginning?',
    ],
    created: 'May 01, 2026',
    edited: 'May 06, 2026',
  },
  {
    id: 'note-03',
    noteId: 'N-0011',
    title: 'Maps are lies we agree to follow',
    date: 'APR 2026',
    stars: 4,
    content: [
      'Every map is a negotiation between what exists and what can be represented. The territory refuses to be flattened. It has depth, time, contradiction.',
      'The Archons built maps. That is their primary function—to make the infinite navigable, and in doing so, to make it smaller than it is.',
      'We follow these maps because we were given nothing else. But somewhere there is a direction that does not appear on any chart.',
    ],
    created: 'Apr 28, 2026',
    edited: 'Apr 29, 2026',
  },
  {
    id: 'note-04',
    noteId: 'N-0010',
    title: 'What we fear becomes our compass',
    date: 'APR 2026',
    stars: 3,
    content: [
      'Fear is directional. It points. Not always toward the danger—more often toward the thing we have not yet been willing to face.',
      'The album needs a movement built entirely around this inversion. The thing that repels is the thing that calls. The abyss that stares back is not threatening—it is inviting.',
      'Track 4 draft captures something of this. The descent is not a fall. It is a choice.',
    ],
    created: 'Apr 22, 2026',
    edited: 'Apr 25, 2026',
  },
  {
    id: 'note-05',
    noteId: 'N-0009',
    title: 'All paths circle the silent door',
    date: 'MAR 2026',
    stars: 4,
    content: [
      'Every spiritual tradition encodes the same terminal instruction: be still. The noise is the labyrinth. The silence is the exit.',
      'But silence is not absence. It is presence without object. The highest Gnostic state is not knowing—it is being known, recognized by the source that never forgot you.',
      'This is what the final track must accomplish. Not resolution. Recognition.',
    ],
    created: 'Mar 15, 2026',
    edited: 'Mar 19, 2026',
  },
  {
    id: 'note-06',
    noteId: 'N-0008',
    title: 'Dust remembers what we forget',
    date: 'MAR 2026',
    stars: 3,
    content: [
      'Matter is memory. Every particle has passed through a star, a sea, a skull. The ground we walk on is the compressed biography of the universe.',
      'The pneumatic spark is not alien to matter—it is what matter has been trying to say all along. We are not spirits trapped in bodies. We are the universe attempting to remember itself.',
    ],
    created: 'Mar 09, 2026',
    edited: 'Mar 10, 2026',
  },
  {
    id: 'note-07',
    noteId: 'N-0007',
    title: 'The fever dream of certainty',
    date: 'FEB 2026',
    stars: 3,
    content: [
      'Nothing destroys more completely than the conviction that one has understood. Understanding is a room. The truth lives outside all rooms.',
      'The Archons rule through certainty—through the construction of systems so complete that no question can survive inside them. This is the real prison.',
      'Doubt, then, is a spiritual practice. Not despair. Doubt is the door slightly ajar.',
    ],
    created: 'Feb 20, 2026',
    edited: 'Feb 22, 2026',
  },
  {
    id: 'note-08',
    noteId: 'N-0006',
    title: 'Inside the worm and the star',
    date: 'FEB 2026',
    stars: 4,
    content: [
      'The ouroboros is not a symbol of endless return. It is a diagram of digestion—the cosmos consuming itself to remain alive.',
      'We are simultaneously the worm and the star it swallows. The gnosis is not escape from the cycle but the recognition of what is doing the eating.',
      'Track 9 sketch: drone + pulse + the sound of something too large to name passing through the room.',
    ],
    created: 'Feb 11, 2026',
    edited: 'Feb 14, 2026',
  },
  {
    id: 'note-09',
    noteId: 'N-0005',
    title: 'Notes on the art of disappearing',
    date: 'JAN 2026',
    stars: 3,
    content: [
      'The mystic does not transcend the world. The mystic becomes transparent to it. Light passes through without being stopped.',
      'I have been practicing this. Saying less. Leaving earlier. Choosing rooms that will not remember me. The archive is the opposite of this impulse—a record of everything I wanted to preserve.',
      'Maybe that is why I keep both. The erasure and the index. The disappearing and the proof that I was here.',
    ],
    created: 'Jan 28, 2026',
    edited: 'Jan 30, 2026',
  },
]

export const sessions: Session[] = [
  { id: 'sess-01', iconType: 'wave', name: 'Early Demos', tracks: 12 },
  { id: 'sess-02', iconType: 'circle', name: 'Live & Raw', tracks: 18 },
  { id: 'sess-03', iconType: 'triangle', name: 'Field Sessions', tracks: 9 },
  { id: 'sess-04', iconType: 'lines', name: 'Fragments', tracks: 23 },
  { id: 'sess-05', iconType: 'hex', name: 'Rituals', tracks: 14 },
]

export const canonicalTexts: CanonicalText[] = [
  {
    id: 'can-01',
    title: 'The Gospel of Thomas',
    category: 'Sayings Gospel',
    date: '2nd century CE',
    tags: ['primary', 'sayings', 'gnosis'],
    excerpt:
      'If you bring forth what is within you, what you bring forth will save you. If you do not bring forth what is within you, what you do not bring forth will destroy you.',
  },
  {
    id: 'can-02',
    title: 'The Apocryphon of John',
    category: 'Sethian',
    date: '2nd–3rd century CE',
    tags: ['primary', 'cosmogony', 'archons'],
    excerpt:
      'The perfect Pronoia of all, Barbelo, the first power, the glory of the Invisible Virgin Spirit—she is called the perfect glory.',
  },
  {
    id: 'can-03',
    title: 'Pistis Sophia',
    category: 'Coptic',
    date: '3rd–4th century CE',
    tags: ['primary', 'sophia', 'repentance'],
    excerpt:
      'O Light of lights, in whom I have had faith from the beginning, hearken now, O Light, to my repentance.',
  },
  {
    id: 'can-04',
    title: 'The Hypostasis of the Archons',
    category: 'Sethian',
    date: '3rd century CE',
    tags: ['archons', 'demiurge', 'cosmology'],
    excerpt:
      'Their chief is blind; because of his power and his ignorance and his arrogance he said, with his power, "It is I who am God; there is none apart from me."',
  },
  {
    id: 'can-05',
    title: 'The Gospel of Truth',
    category: 'Valentinian',
    date: '2nd century CE',
    tags: ['valentinian', 'pleroma', 'error'],
    excerpt:
      'The gospel of truth is a joy for those who have received from the Father of Truth the gift of knowing him, through the power of the Word.',
  },
  {
    id: 'can-06',
    title: 'On the Origin of the World',
    category: 'Untitled Treatise',
    date: '3rd–4th century CE',
    tags: ['cosmogony', 'sophia', 'chaos'],
    excerpt:
      'Since everyone—the gods of the world and mankind—says that nothing existed prior to chaos, I shall demonstrate that they all erred.',
  },
]

export const emails: EmailEntry[] = [
  {
    id: 'email-01',
    from: 'the.archon@void.net',
    subject: 'Re: Consciousness & Collapse',
    date: 'MAY 09, 2026',
    preview:
      'Your reading of the second aeon is not incorrect, but you are missing the recursion. The Demiurge does not simply create—it forgets that it is created.',
    read: true,
  },
  {
    id: 'email-02',
    from: 'sophia.fragment@pleroma.io',
    subject: 'Model: Illusion Framework v1.2',
    date: 'MAY 08, 2026',
    preview:
      'Attached is the revised framework. Note section 4 on light-trapping mechanisms—I believe this maps directly to what you described in track 3.',
    read: false,
  },
  {
    id: 'email-03',
    from: 'studio.access@demiurge.local',
    subject: 'Field Session II — booking confirmed',
    date: 'MAY 05, 2026',
    preview:
      'The space is reserved for the 18th. Remember to bring the contact mics and the resonator. No digital recording this time—analogue only.',
    read: true,
  },
  {
    id: 'email-04',
    from: 'collaborator@nag-hammadi.org',
    subject: 'Translations — Gospel of Philip passages',
    date: 'APR 30, 2026',
    preview:
      'Here are the three passages you requested, along with my notes on the Coptic ambiguities. The word translated as "kiss" may also mean "breath."',
    read: true,
  },
  {
    id: 'email-05',
    from: 'mastering@aetheric.studio',
    subject: 'Track 01 reference master — notes',
    date: 'APR 27, 2026',
    preview:
      'Listened through twice. The low-end is exactly right—do not compress it further. The silence at 4:12 needs to be longer. Let it breathe more.',
    read: false,
  },
]

export const statusTiles: StatusTile[] = [
  { id: 'st-01', label: 'Composition Progress', value: 78, iconType: 'rings' },
  { id: 'st-02', label: 'Sonic Research', value: 63, iconType: 'wave' },
  { id: 'st-03', label: 'Concept Mapping', value: 82, iconType: 'hex' },
  { id: 'st-04', label: 'Mix Refinement', value: 49, iconType: 'triangle' },
  { id: 'st-05', label: 'Mastering Prep', value: 21, iconType: 'sliders' },
]

export const aiLabEntries: AiLabEntry[] = [
  {
    id: 'ai-01',
    title: 'Synthesis: Archon Voice Textures',
    model: 'spectral-v3',
    date: 'MAY 10, 2026',
    status: 'complete',
    type: 'audio-synthesis',
  },
  {
    id: 'ai-02',
    title: 'Illusion Framework v1.2',
    model: 'conceptual-map',
    date: 'MAY 08, 2026',
    status: 'complete',
    type: 'conceptual',
  },
  {
    id: 'ai-03',
    title: 'Frequency Anomaly Analysis — Track 03',
    model: 'spectral-v3',
    date: 'MAY 06, 2026',
    status: 'complete',
    type: 'analysis',
  },
  {
    id: 'ai-04',
    title: 'Lyrical Exegesis: Acts I–II',
    model: 'language-oracle',
    date: 'APR 29, 2026',
    status: 'archived',
    type: 'text',
  },
  {
    id: 'ai-05',
    title: 'Harmonic Convergence Model',
    model: 'spectral-v3',
    date: 'APR 22, 2026',
    status: 'archived',
    type: 'audio-synthesis',
  },
  {
    id: 'ai-06',
    title: 'Structural Map: The Five Acts',
    model: 'conceptual-map',
    date: 'APR 15, 2026',
    status: 'archived',
    type: 'conceptual',
  },
]

export const handoffEntries: HandoffEntry[] = [
  {
    id: 'hoff-01',
    title: 'Demo I — mastering brief',
    recipient: 'aetheric.studio',
    date: 'APR 27, 2026',
    status: 'acknowledged',
    notes: 'Include reference tracks and the specific notes on track 01 silence.',
  },
  {
    id: 'hoff-02',
    title: 'Field Session II — raw files',
    recipient: 'collaborator.local',
    date: 'APR 23, 2026',
    status: 'delivered',
    notes: '48kHz FLAC, stems separated, no processing.',
  },
  {
    id: 'hoff-03',
    title: 'Concept map v4 — visual design',
    recipient: 'design.external',
    date: 'APR 18, 2026',
    status: 'pending',
    notes: 'Awaiting confirmation of receipt. Follow up if no response by May 15.',
  },
  {
    id: 'hoff-04',
    title: 'Gospel of Philip translations',
    recipient: 'collaborator@nag-hammadi.org',
    date: 'APR 15, 2026',
    status: 'acknowledged',
    notes: 'Requested the three passages + notes on Coptic ambiguities.',
  },
  {
    id: 'hoff-05',
    title: 'Thesis outline — v3',
    recipient: 'advisor.archive',
    date: 'APR 10, 2026',
    status: 'delivered',
    notes: 'Section 3 is still provisional. Flag this in the cover note.',
  },
]

export const fileEntries: FileEntry[] = [
  { id: 'file-01', name: 'demo-i-track01-v7.flac', type: 'audio', size: '184 MB', date: 'APR 24, 2026', section: 'audio' },
  { id: 'file-02', name: 'thesis-outline-v3.md', type: 'document', size: '42 KB', date: 'APR 10, 2026', section: 'notes' },
  { id: 'file-03', name: 'concept-map-v4.pdf', type: 'pdf', size: '3.2 MB', date: 'APR 18, 2026', section: 'canonical' },
  { id: 'file-04', name: 'field-session-i-raw.zip', type: 'archive', size: '2.1 GB', date: 'APR 23, 2026', section: 'audio' },
  { id: 'file-05', name: 'archon-voice-textures.wav', type: 'audio', size: '76 MB', date: 'MAY 10, 2026', section: 'audio' },
  { id: 'file-06', name: 'gospel-of-philip-notes.txt', type: 'document', size: '18 KB', date: 'APR 30, 2026', section: 'canonical' },
  { id: 'file-07', name: 'frequency-anomaly-track03.json', type: 'data', size: '1.4 MB', date: 'MAY 06, 2026', section: 'ai-lab' },
  { id: 'file-08', name: 'illusion-framework-v1.2.md', type: 'document', size: '94 KB', date: 'MAY 08, 2026', section: 'ai-lab' },
]

export const recentlyPlayed: Array<{ id: string; title: string; subtitle: string; gradient: string }> = [
  { id: 'rp-01', title: 'The Fall of What Is', subtitle: 'demo', gradient: 'from-bone-400/30 to-ink-600' },
  { id: 'rp-02', title: 'No Kingdom, No Throne', subtitle: 'demo', gradient: 'from-parchment-600/20 to-ink-700' },
  { id: 'rp-03', title: 'From the Unseen', subtitle: 'session', gradient: 'from-bone-300/20 to-ink-800' },
  { id: 'rp-04', title: 'Ashes to Winter', subtitle: 'demo', gradient: 'from-parchment-500/15 to-ink-700' },
  { id: 'rp-05', title: 'Signal in the Silence', subtitle: 'session', gradient: 'from-bone-400/25 to-ink-900' },
]
