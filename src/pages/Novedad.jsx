import TabBar from '../components/TabBar'

const FONT = 'Montserrat, sans-serif'
const BG   = '#19101b'

const AVATAR_COLORS = ['#3ae2d1', '#e88ff4', '#7c6eff', '#ff9f6b', '#ffd166']
function avatarColor(alias) {
  return AVATAR_COLORS[alias.charCodeAt(0) % AVATAR_COLORS.length]
}

function ChatIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="#19101b">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  )
}

function CardIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#19101b">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
    </svg>
  )
}

function MoreDots() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <circle cx="5"  cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  )
}

const POSTS = [
  {
    alias: 'Esteban03',
    time: 'Hace 2 horas',
    text: '¡Ha completado su meta semanal de "Hidratarse"!',
    photo: null,
    action: 'celebrate',
    reactionCount: 3,
    liked: [
      { text: 'Le gustó a ', bold: false },
      { text: 'Marceel', bold: true },
      { text: ' y a ', bold: false },
      { text: 'otros usuarios', bold: true },
    ],
    gradient: true,
    dividerBefore: false,
  },
  {
    alias: 'Javier12',
    time: 'Hace 8 horas',
    text: '¡Has ganado 1000 XP en tu meta semanal "Caminata diaria"!!',
    photo: '/assets/avatar-javier.png',
    action: 'comments',
    commentCount: 2,
    reactionCount: 2,
    liked: [
      { text: 'Le gustó a ', bold: false },
      { text: 'Esteban03', bold: true },
      { text: ' y a ', bold: false },
      { text: 'Marceel', bold: true },
    ],
    dividerBefore: false,
  },
  {
    alias: 'Javier12',
    time: 'Hace 18 horas',
    text: '¡Has ganado 1200 XP en tu meta semanal de "Lectura diaria"!',
    photo: '/assets/avatar-javier.png',
    action: 'comments',
    commentCount: 1,
    reactionCount: 1,
    liked: [
      { text: 'Le gustó a ', bold: false },
      { text: 'Esteban03', bold: true },
    ],
    dividerBefore: true,
  },
  {
    alias: 'Marceel',
    time: 'Hace 1 día',
    text: '¡Ha completado su meta semanal de "Hidratarse"!',
    photo: null,
    action: 'celebrate',
    reactionCount: 3,
    liked: [
      { text: 'Le gustó a ', bold: false },
      { text: 'AniK', bold: true },
      { text: ' y a ', bold: false },
      { text: 'otros usuarios', bold: true },
    ],
    dividerBefore: true,
  },
]

function ReactionPhotos({ count }) {
  const colors = ['#3ae2d1', '#e88ff4', '#7c6eff', '#ff9f6b', '#ffd166']
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            marginLeft: i > 0 ? -9 : 0,
            position: 'relative',
            zIndex: count - i,
            width: 28,
            height: 28,
            borderRadius: '50%',
            border: '2px solid #19101b',
            flexShrink: 0,
            backgroundColor: colors[i % colors.length],
          }}
        />
      ))}
    </div>
  )
}

function LikedText({ segments }) {
  return (
    <p style={{ fontFamily: FONT, fontSize: 12, color: '#fff', lineHeight: 'normal', margin: 0 }}>
      {segments.map((seg, i) => (
        <span key={i} style={{ fontWeight: seg.bold ? 600 : 400 }}>{seg.text}</span>
      ))}
    </p>
  )
}

function PostCard({ post }) {
  return (
    <>
      {post.dividerBefore && (
        <div style={{ height: 1, background: 'rgba(255,255,255,0.12)', margin: '0 28px' }} />
      )}
      <div style={{
        padding: '20px 28px',
        background: post.gradient
          ? 'linear-gradient(to bottom, rgba(25,16,27,0.5), rgba(32,124,115,0.5))'
          : 'transparent',
      }}>
        {/* Main row: photo + content */}
        <div style={{ display: 'flex', gap: 19 }}>
          {/* Profile photo / avatar */}
          <div style={{ width: 66, flexShrink: 0 }}>
            {post.photo ? (
              <div style={{ width: 66, height: 66, borderRadius: '50%', overflow: 'hidden' }}>
                <img src={post.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ) : (
              <div style={{
                width: 66, height: 66, borderRadius: '50%',
                backgroundColor: avatarColor(post.alias),
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: 26, fontWeight: 700, color: '#19101b' }}>{post.alias[0].toUpperCase()}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff', margin: '0 0 2px', lineHeight: 'normal' }}>
              {post.alias}
            </p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, color: '#fff', margin: '0 0 14px', lineHeight: 'normal' }}>
              {post.time}
            </p>
            <p style={{ fontFamily: FONT, fontWeight: 600, fontSize: 16, color: '#fff', margin: '0 0 14px', lineHeight: '1.4' }}>
              {post.text}
            </p>

            {/* Action buttons */}
            {post.action === 'celebrate' ? (
              <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                <div style={{
                  background: '#3ae2d1', borderRadius: 51, height: 26,
                  paddingLeft: 10, paddingRight: 10,
                  display: 'flex', alignItems: 'center',
                }}>
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 11, color: '#19101b', whiteSpace: 'nowrap' }}>
                    ¡Felicítalo!
                  </span>
                </div>
                <div style={{
                  background: '#3ae2d1', borderRadius: '50%', width: 26, height: 26,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <CardIcon />
                </div>
                <div style={{
                  background: '#3ae2d1', borderRadius: 51, width: 32, height: 26,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <ChatIcon />
                </div>
              </div>
            ) : (
              <div style={{
                background: '#3ae2d1', borderRadius: 51, width: 45, height: 26,
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4,
              }}>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, color: '#19101b' }}>
                  {post.commentCount}
                </span>
                <ChatIcon />
              </div>
            )}
          </div>
        </div>

        {/* Liked row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: 14 }}>
          <div style={{ width: 85, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <ReactionPhotos count={post.reactionCount} />
          </div>
          <LikedText segments={post.liked} />
        </div>
      </div>
    </>
  )
}

export default function Novedad() {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, background: BG, overflowY: 'auto', fontFamily: FONT }}>
        {/* Top teal gradient */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 260, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse 120% 220px at 50% 0%, rgba(58,226,209,0.18) 0%, transparent 70%)',
        }} />
        {/* Header */}
        <div style={{
          padding: '40px 28px 16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 20, color: '#fff' }}>
            Novedades
          </span>
          <MoreDots />
        </div>

        {/* Feed */}
        <div style={{ paddingBottom: 110 }}>
          {POSTS.map((post, i) => (
            <PostCard key={i} post={post} />
          ))}
        </div>
      </div>

      <TabBar />
    </>
  )
}
