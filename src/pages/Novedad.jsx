import TabBar from '../components/TabBar'

const FONT = 'Montserrat, sans-serif'
const BG   = '#19101b'

const CHAT_ICON = 'https://www.figma.com/api/mcp/asset/10538709-b359-4982-a605-58e47df79e4e'
const CARD_ICON = 'https://www.figma.com/api/mcp/asset/9ede7c89-1df8-4a1b-a8a7-1e94fb5211e6'
const MORE_DOTS = 'https://www.figma.com/api/mcp/asset/d72e923e-8858-4a09-b7a8-046fe55a627b'

const POSTS = [
  {
    alias: 'Esteban03',
    time: 'Hace 2 horas',
    text: '¡Ha completado su meta semanal de "Hidratarse"!',
    photo: 'https://www.figma.com/api/mcp/asset/ab1dc0cb-9e61-4439-8fb5-d61100b9b4b1',
    action: 'celebrate',
    reactionPhotos: [
      'https://www.figma.com/api/mcp/asset/a82b6487-2db1-416f-add7-3b8cb7f90a46',
      'https://www.figma.com/api/mcp/asset/ffb54ccb-7e2e-4eba-828f-ff2ac2e5b27d',
      'https://www.figma.com/api/mcp/asset/3f25b706-c0e4-4f42-80cb-deb812752960',
    ],
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
    photo: 'https://www.figma.com/api/mcp/asset/e5aa5839-9152-427d-bc78-27ef84765d4d',
    action: 'comments',
    commentCount: 2,
    reactionPhotos: [
      'https://www.figma.com/api/mcp/asset/76ffb3d3-8d91-47e1-a822-98ab32bb3e4b',
      'https://www.figma.com/api/mcp/asset/a82b6487-2db1-416f-add7-3b8cb7f90a46',
    ],
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
    photo: 'https://www.figma.com/api/mcp/asset/53b74452-3694-4f95-97b2-b72ae1671bd7',
    action: 'comments',
    commentCount: 1,
    reactionPhotos: [
      'https://www.figma.com/api/mcp/asset/f9a3ff52-9469-4d77-8a8c-31937d5fee37',
    ],
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
    photo: 'https://www.figma.com/api/mcp/asset/69226310-3b55-4a16-9230-3017e6c79548',
    action: 'celebrate',
    reactionPhotos: [
      'https://www.figma.com/api/mcp/asset/ffb54ccb-7e2e-4eba-828f-ff2ac2e5b27d',
      'https://www.figma.com/api/mcp/asset/431c2d85-e9c4-48d4-8761-7ab7e81b2c22',
      'https://www.figma.com/api/mcp/asset/a48e5302-0b6a-4640-88d5-9da621eacb97',
    ],
    liked: [
      { text: 'Le gustó a ', bold: false },
      { text: 'AniK', bold: true },
      { text: ' y a ', bold: false },
      { text: 'otros usuarios', bold: true },
    ],
    dividerBefore: true,
  },
]

function ReactionPhotos({ photos }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {photos.map((src, i) => (
        <div
          key={i}
          style={{
            marginLeft: i > 0 ? -9 : 0,
            position: 'relative',
            zIndex: photos.length - i,
            width: 28,
            height: 28,
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #19101b',
            flexShrink: 0,
            background: 'rgba(255,255,255,0.1)',
          }}
        >
          <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
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
          {/* Profile photo */}
          <div style={{ width: 66, flexShrink: 0 }}>
            <div style={{ width: 66, height: 66, borderRadius: '50%', overflow: 'hidden', background: 'rgba(255,255,255,0.1)' }}>
              <img src={post.photo} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
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
                {/* "¡Felicítalo!" pill */}
                <div style={{
                  background: '#3ae2d1',
                  borderRadius: 51,
                  height: 26,
                  paddingLeft: 10,
                  paddingRight: 10,
                  display: 'flex',
                  alignItems: 'center',
                }}>
                  <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 11, color: '#19101b', whiteSpace: 'nowrap' }}>
                    ¡Felicítalo!
                  </span>
                </div>
                {/* Card icon circle */}
                <div style={{
                  background: '#3ae2d1',
                  borderRadius: '50%',
                  width: 26,
                  height: 26,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src={CARD_ICON} alt="" style={{ width: 14, height: 14, objectFit: 'contain' }} />
                </div>
                {/* Chat bubble pill */}
                <div style={{
                  background: '#3ae2d1',
                  borderRadius: 51,
                  width: 32,
                  height: 26,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <img src={CHAT_ICON} alt="" style={{ width: 13, height: 13, objectFit: 'contain' }} />
                </div>
              </div>
            ) : (
              /* Comment count badge */
              <div style={{
                background: '#3ae2d1',
                borderRadius: 51,
                width: 45,
                height: 26,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 4,
              }}>
                <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 12, color: '#19101b' }}>
                  {post.commentCount}
                </span>
                <img src={CHAT_ICON} alt="" style={{ width: 13, height: 13, objectFit: 'contain' }} />
              </div>
            )}
          </div>
        </div>

        {/* Liked row: reaction photos + text */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginTop: 14 }}>
          {/* Reaction photos in left column width */}
          <div style={{ width: 85, flexShrink: 0, display: 'flex', alignItems: 'center' }}>
            <ReactionPhotos photos={post.reactionPhotos} />
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 20, color: '#fff' }}>
            Novedades
          </span>
          <img src={MORE_DOTS} alt="" style={{ width: 24, height: 24 }} />
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
