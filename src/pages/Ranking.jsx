import { useState } from 'react'
const FONT = 'Montserrat, sans-serif'

const AVATAR_COLORS = ['#3ae2d1', '#e88ff4', '#7c6eff', '#ff9f6b', '#ffd166']
function avatarColor(alias) {
  return AVATAR_COLORS[alias.charCodeAt(0) % AVATAR_COLORS.length]
}

const PODIUM = {
  todos: [
    { alias: 'Javier12',  xp: '2500 XP', photo: '/assets/avatar-javier12.png' },
    { alias: 'Esteban03', xp: '2160 XP', photo: '/assets/avatar-esteban03.png' },
    { alias: 'Anto.o',    xp: '1953 XP', photo: '/assets/avatar-anto.png' },
  ],
  amigos: [
    { alias: 'Javier',     xp: '2500 XP', photo: '/assets/avatar-javier12.png' },
    { alias: 'Esteban03',  xp: '2160 XP', photo: '/assets/avatar-esteban03.png' },
    { alias: 'bordoy_777', xp: '1953 XP', photo: null },
  ],
}

const TODOS = [
  { pos: 1, alias: 'Javier12',  xp: '2500 XP', days: '47 días', photo: '/assets/avatar-javier12.png', isMe: true },
  { pos: 2, alias: 'Esteban03', xp: '2160 XP', days: '40 días', photo: '/assets/avatar-esteban03.png' },
  { pos: 3, alias: 'Anto.o',    xp: '1953 XP', days: '38 días', photo: '/assets/avatar-anto.png' },
  { pos: 4, alias: 'Sabri.C',   xp: '1899 XP', days: '33 días', photo: '/assets/avatar-sabric.png' },
  { pos: 5, alias: 'Marceel',   xp: '1897 XP', days: '47 días', photo: '/assets/avatar-marceel.png' },
]

const AMIGOS = [
  { pos: 1, alias: 'Javier12',   xp: '2500 XP', days: '47 días', photo: '/assets/avatar-javier12.png', isMe: true },
  { pos: 2, alias: 'Esteban03',  xp: '2160 XP', days: '40 días', photo: '/assets/avatar-esteban03.png' },
  { pos: 3, alias: 'bordoy_777', xp: '2099 XP', days: '38 días', photo: null },
  { pos: 4, alias: 'Anto.o',     xp: '1953 XP', days: '38 días', photo: '/assets/avatar-anto.png' },
  { pos: 5, alias: 'porota33',   xp: '1453 XP', days: '38 días', photo: null },
]

function PodiumPhoto({ alias, src, size }) {
  const ring = {
    width: size, height: size, borderRadius: '50%', flexShrink: 0,
    boxShadow: '0 0 0 4px #19101b, 0 0 0 11px #3ae2d1',
  }
  if (src) {
    return (
      <div style={{ ...ring, overflow: 'hidden' }}>
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    )
  }
  return (
    <div style={{ ...ring, backgroundColor: avatarColor(alias), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: size * 0.42, fontWeight: 700, color: '#19101b' }}>{alias[0].toUpperCase()}</span>
    </div>
  )
}

function ListPhoto({ alias, src }) {
  const ring = {
    width: 39, height: 39, borderRadius: '50%', flexShrink: 0,
    boxShadow: '0 0 0 3px #1a0f29, 0 0 0 5.5px #3ae2d1',
  }
  if (src) {
    return (
      <div style={{ ...ring, overflow: 'hidden' }}>
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
    )
  }
  return (
    <div style={{ ...ring, backgroundColor: avatarColor(alias), display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ fontSize: 15, fontWeight: 700, color: '#19101b' }}>{alias[0].toUpperCase()}</span>
    </div>
  )
}

function LockedDrop() {
  return (
    <img src="/assets/league-drop-locked.svg" alt="" style={{ width: 45.63, height: 59.3, flexShrink: 0 }} />
  )
}

function CrownIcon({ style }) {
  return (
    <img src="/assets/icon-crown.svg" alt="" style={{ width: 33, height: 33, ...style }} />
  )
}

function EllipsisIcon() {
  return (
    <svg
      width="24" height="24" viewBox="0 0 24 24" fill="white"
      style={{ position: 'absolute', left: 'calc(75% + 53.75px)', top: 141 }}
    >
      <circle cx="5"  cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  )
}

export default function Ranking() {
  const [tab, setTab] = useState('todos')
  const list   = tab === 'todos' ? TODOS : AMIGOS
  const podium = PODIUM[tab]

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: '#19101b', fontFamily: FONT, overflow: 'hidden' }}>

      {/* Top teal gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 260, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 120% 220px at 50% 0%, rgba(58,226,209,0.16) 0%, transparent 70%)',
      }} />

      {/* League drops */}
      <div style={{ position: 'absolute', left: 27, top: 39, display: 'flex', alignItems: 'center', gap: 17 }}>
        <img src="/assets/league-drop-teal.svg"   alt="" style={{ width: 45.63,  height: 59.3, flexShrink: 0 }} />
        <img src="/assets/league-drop-purple.svg" alt="" style={{ width: 71.561, height: 93,   flexShrink: 0 }} />
        <LockedDrop />
        <LockedDrop />
        <LockedDrop />
      </div>

      {/* Liga MORADA */}
      <p style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 141, margin: 0,
        fontWeight: 700, fontSize: 20, color: 'white', textAlign: 'center',
        letterSpacing: '-0.312px', lineHeight: 'normal', whiteSpace: 'nowrap',
      }}>Liga MORADA</p>

      {/* Three-dot menu */}
      <EllipsisIcon />

      {/* Description */}
      <p style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 168, margin: 0,
        fontWeight: 400, fontSize: 10, color: 'white', textAlign: 'center',
        letterSpacing: '-0.156px', lineHeight: 'normal', width: 302,
      }}>Obten 1500 XP más para subir a la siguiente liga</p>

      {/* Podium columns */}
      <img src="/assets/podium-col1.svg" alt="" style={{ position: 'absolute', left: 'calc(25% + 46.25px)', top: 196, width: 93.17, height: 518 }} />
      <img src="/assets/podium-col2.svg" alt="" style={{ position: 'absolute', left: 34, top: 294, width: 93.17, height: 518 }} />
      <img src="/assets/podium-col3.svg" alt="" style={{ position: 'absolute', left: 'calc(50% + 58.5px)', top: 226, width: 93.17, height: 518 }} />

      {/* 1st place (center) */}
      <div style={{ position: 'absolute', left: 'calc(25% + 57.25px)', top: 207 }}>
        <PodiumPhoto alias={podium[0].alias} src={podium[0].photo} size={71} />
      </div>
      <div style={{ position: 'absolute', left: 'calc(25% + 76.25px)', top: 261 }}>
        <CrownIcon />
      </div>
      <p style={{
        position: 'absolute', left: 'calc(25% + 93.25px)', top: 294, margin: 0,
        transform: 'translateX(-50%)', fontWeight: 700, fontSize: 13, color: 'white',
        textAlign: 'center', letterSpacing: '-0.2028px', lineHeight: 'normal', whiteSpace: 'nowrap',
      }}>{podium[0].alias}</p>
      <p style={{
        position: 'absolute', left: 'calc(25% + 93.75px)', top: 312, margin: 0,
        transform: 'translateX(-50%)', fontWeight: 400, fontSize: 10, color: 'white',
        textAlign: 'center', letterSpacing: '-0.156px', lineHeight: 'normal', width: 59,
      }}>{podium[0].xp}</p>

      {/* 2nd place (right) */}
      <div style={{ position: 'absolute', left: 'calc(50% + 70.5px)', top: 238 }}>
        <PodiumPhoto alias={podium[1].alias} src={podium[1].photo} size={70} />
      </div>
      <p style={{
        position: 'absolute', left: 'calc(50% + 105.5px)', top: 324, margin: 0,
        transform: 'translateX(-50%)', fontWeight: 700, fontSize: 13, color: 'white',
        textAlign: 'center', letterSpacing: '-0.2028px', lineHeight: 'normal', whiteSpace: 'nowrap',
      }}>{podium[1].alias}</p>
      <p style={{
        position: 'absolute', left: 'calc(50% + 104px)', top: 343, margin: 0,
        transform: 'translateX(-50%)', fontWeight: 400, fontSize: 10, color: 'white',
        textAlign: 'center', letterSpacing: '-0.156px', lineHeight: 'normal', width: 59,
      }}>{podium[1].xp}</p>

      {/* 3rd place (left) */}
      <div style={{ position: 'absolute', left: 46, top: 306 }}>
        <PodiumPhoto alias={podium[2].alias} src={podium[2].photo} size={70} />
      </div>
      <p style={{
        position: 'absolute', left: 81, top: 392, margin: 0,
        transform: 'translateX(-50%)', fontWeight: 700, fontSize: 13, color: 'white',
        textAlign: 'center', letterSpacing: '-0.2028px', lineHeight: 'normal', whiteSpace: 'nowrap',
      }}>{podium[2].alias}</p>
      <p style={{
        position: 'absolute', left: 81.5, top: 410, margin: 0,
        transform: 'translateX(-50%)', fontWeight: 400, fontSize: 10, color: 'white',
        textAlign: 'center', letterSpacing: '-0.156px', lineHeight: 'normal', width: 59,
      }}>{podium[2].xp}</p>

      {/* List card */}
      <div style={{
        position: 'absolute', left: 15, top: 447, width: 345, bottom: 0,
        backgroundColor: '#1a0f29',
        border: '1px solid #362644',
        borderRadius: '51px 51px 0 0',
        overflow: 'hidden',
      }}>

        {/* Toggle: Todos / Amigos */}
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 13,
          width: 256, height: 36,
          backgroundColor: '#2c203a',
          borderRadius: 999,
          display: 'flex', padding: 4, boxSizing: 'border-box',
        }}>
          <button
            onClick={() => setTab('todos')}
            style={{
              flex: 1, border: 'none', borderRadius: 999, cursor: 'pointer',
              backgroundColor: tab === 'todos' ? '#3ae2d1' : 'white',
              fontFamily: FONT,
              fontWeight: tab === 'todos' ? 700 : 600,
              fontSize: 12, lineHeight: '20px',
              color: tab === 'todos' ? '#282828' : 'rgba(25,16,27,0.4)',
            }}>Todos</button>
          <button
            onClick={() => setTab('amigos')}
            style={{
              flex: 1, border: 'none', borderRadius: 999, cursor: 'pointer',
              backgroundColor: tab === 'amigos' ? '#3ae2d1' : 'white',
              fontFamily: FONT,
              fontWeight: tab === 'amigos' ? 700 : 600,
              fontSize: 12, lineHeight: '20px',
              color: tab === 'amigos' ? '#282828' : 'rgba(25,16,27,0.5)',
            }}>Amigos</button>
        </div>

        {/* Ranked rows */}
        <div style={{
          position: 'absolute', top: 64, left: 0, right: 0, bottom: 0,
          overflowY: 'auto', paddingBottom: 'calc(78px + env(safe-area-inset-bottom, 0px))',
        }}>
          {list.map((p) => (
            <div key={`${tab}-${p.pos}`} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '6px 16px 6px 14px',
              backgroundColor: p.isMe ? '#15575b' : 'transparent',
              marginBottom: 12,
            }}>
              <span style={{
                width: 24, flexShrink: 0,
                fontWeight: 700, fontSize: 16, color: 'white',
                letterSpacing: '-0.2496px', lineHeight: 'normal',
              }}>{p.pos}.</span>

              <ListPhoto alias={p.alias} src={p.photo} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  margin: 0, fontWeight: 700, fontSize: 14, color: 'white',
                  letterSpacing: '-0.2184px', lineHeight: 'normal', whiteSpace: 'nowrap',
                }}>{p.alias}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}>
                  <img src={p.isMe ? "/assets/icon-fire-me.svg" : "/assets/icon-fire-other.svg"} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
                  <span style={{
                    fontWeight: 500, fontSize: 12,
                    color: p.isMe ? '#daa5e6' : '#e88ff4',
                    letterSpacing: '-0.1872px', lineHeight: 'normal',
                  }}>{p.days}</span>
                </div>
              </div>

              <span style={{
                flexShrink: 0, fontWeight: 400, fontSize: 13, color: 'white',
                letterSpacing: '-0.2028px', lineHeight: 'normal', textAlign: 'right',
              }}>{p.xp}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}
