import { useState } from 'react'
import TabBar from '../components/TabBar'

const FONT = 'Montserrat, sans-serif'

// ── Asset URLs from Figma MCP ─────────────────────────────────────────────
const IMG = {
  // Background
  glow:     'https://www.figma.com/api/mcp/asset/0fe719e8-1071-4073-8877-e310aefeaf84',

  // League drops
  dropTeal: 'https://www.figma.com/api/mcp/asset/1b4ec9a2-f4c3-453d-8b2f-581dd0f18fd6',
  dropPurp: 'https://www.figma.com/api/mcp/asset/3833b2a0-abcd-4fb5-a8fa-9f5694525395',
  dropLock: 'https://www.figma.com/api/mcp/asset/8246441a-8f82-4561-bde2-fe15e406a56e', // gray drop shape
  lock:     'https://www.figma.com/api/mcp/asset/90fe8871-de28-4d49-82a2-de99b08269db', // lock icon
  dot:      'https://www.figma.com/api/mcp/asset/64b09c8b-4b87-4d82-8526-d10ccef982ba', // small dot

  // Podium columns (shared)
  col1:     'https://www.figma.com/api/mcp/asset/d833e60e-beee-4d99-831d-3d9a2a42e80a',
  col3:     'https://www.figma.com/api/mcp/asset/79ca18ea-cf71-40f7-a8e9-1265184f641f',
  col2:     'https://www.figma.com/api/mcp/asset/cd77e81c-8100-4d16-ae55-dd40853bbd9b',

  // Crown
  crown:    'https://www.figma.com/api/mcp/asset/b0d9319e-ec04-4235-878b-0ea73ada5788',

  // Fire icons
  fire:     'https://www.figma.com/api/mcp/asset/7f2e0c15-78a6-4a14-b61f-c80432a9e97a',
  fire1:    'https://www.figma.com/api/mcp/asset/d54a29f4-6047-4d8b-950c-31b2d462170e',

  // ── TODOS — podium photos ────────────────────────────────────────────────
  p1:       'https://www.figma.com/api/mcp/asset/59cf586f-5b4c-41f8-b7e8-9a61eec083c2', // Javier12 center
  p2:       'https://www.figma.com/api/mcp/asset/87e4a6b9-0367-44ac-ac0e-439a16240264', // Esteban03 right
  p3:       'https://www.figma.com/api/mcp/asset/8cf89760-4c98-41c7-bf7e-fd52f7e80f49', // Anto.o left

  // ── TODOS — list photos ──────────────────────────────────────────────────
  l1:       'https://www.figma.com/api/mcp/asset/aff9552f-1bdb-4530-a24c-db26ea6c9ec8',
  l2:       'https://www.figma.com/api/mcp/asset/3242f846-b97d-4fce-91e5-0430b2280124',
  l3:       'https://www.figma.com/api/mcp/asset/4fbd1bc0-20ee-4505-844c-f7df3fae48f1',
  l4:       'https://www.figma.com/api/mcp/asset/47c6c5da-b890-4208-82d2-80427480f12a',
  l5:       'https://www.figma.com/api/mcp/asset/ff03f77c-4340-432a-9ee8-868c782c2b11',

  // ── AMIGOS — podium photos (node 768:29084) ──────────────────────────────
  ap1:      'https://www.figma.com/api/mcp/asset/50449f6d-1a70-4b40-9104-843cd2f5811a', // Javier center
  ap2:      'https://www.figma.com/api/mcp/asset/15b99d10-abe4-4d9f-a8ee-97f9e3b777d2', // Esteban03 right
  ap3:      'https://www.figma.com/api/mcp/asset/29dbad18-6b1a-4b49-9364-ddce91774931', // bordoy_777 left

  // ── AMIGOS — list photos ─────────────────────────────────────────────────
  al1:      'https://www.figma.com/api/mcp/asset/c7b15ef1-e86f-4ec5-8878-2892ddd6c12c',
  al2:      'https://www.figma.com/api/mcp/asset/06687cdf-f579-4bf8-8ec8-1f7ee61f1aec',
  al3:      'https://www.figma.com/api/mcp/asset/593b82a8-d0ee-41ae-a1b7-c9cd61866ff0',
  al4:      'https://www.figma.com/api/mcp/asset/39c42782-2f42-4e28-8eff-843dabaf989b',
  al5:      'https://www.figma.com/api/mcp/asset/f48a0a58-ec5b-4b69-8a58-9205600773f7',
}

// ── Podium data per tab ───────────────────────────────────────────────────
const PODIUM = {
  todos: [
    { alias: 'Javier12',  xp: '2500 XP', photo: IMG.p1 }, // 1st center
    { alias: 'Esteban03', xp: '2160 XP', photo: IMG.p2 }, // 2nd right
    { alias: 'Anto.o',    xp: '1953 XP', photo: IMG.p3 }, // 3rd left
  ],
  amigos: [
    { alias: 'Javier',     xp: '2500 XP', photo: IMG.ap1 }, // 1st center
    { alias: 'Esteban03',  xp: '2160 XP', photo: IMG.ap2 }, // 2nd right
    { alias: 'bordoy_777', xp: '1953 XP', photo: IMG.ap3 }, // 3rd left
  ],
}

// ── List data per tab ─────────────────────────────────────────────────────
const TODOS = [
  { pos: 1, alias: 'Javier12',  xp: '2500 XP', days: '47 días', photo: IMG.l1, isMe: true },
  { pos: 2, alias: 'Esteban03', xp: '2160 XP', days: '40 días', photo: IMG.l2 },
  { pos: 3, alias: 'Anto.o',    xp: '1953 XP', days: '38 días', photo: IMG.l3 },
  { pos: 4, alias: 'Sabri.C',   xp: '1899 XP', days: '33 días', photo: IMG.l4 },
  { pos: 5, alias: 'Marceel',   xp: '1897 XP', days: '47 días', photo: IMG.l5 },
]

const AMIGOS = [
  { pos: 1, alias: 'Javier12',   xp: '2500 XP', days: '47 días', photo: IMG.al1, isMe: true },
  { pos: 2, alias: 'Esteban03',  xp: '2160 XP', days: '40 días', photo: IMG.al2 },
  { pos: 3, alias: 'bordoy_777', xp: '2099 XP', days: '38 días', photo: IMG.al3 },
  { pos: 4, alias: 'Anto.o',     xp: '1953 XP', days: '38 días', photo: IMG.al4 },
  { pos: 5, alias: 'porota33',   xp: '1453 XP', days: '38 días', photo: IMG.al5 },
]

// ── Sub-components ────────────────────────────────────────────────────────

function PodiumPhoto({ src, size }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      boxShadow: '0 0 0 4px #19101b, 0 0 0 11px #3ae2d1',
    }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

function ListPhoto({ src }) {
  return (
    <div style={{
      width: 39, height: 39, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      boxShadow: '0 0 0 3px #1a0f29, 0 0 0 5.5px #3ae2d1',
    }}>
      <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

// Locked drop: gray drop shape + centered lock icon overlay + small dot
function LockedDrop() {
  return (
    <div style={{ position: 'relative', width: 45.63, height: 59.3, flexShrink: 0 }}>
      <img src={IMG.dropLock} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', left: 2, top: 12, width: 42, height: 42, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: '8.33% 16.67%' }}>
          <img src={IMG.lock} alt="" style={{ display: 'block', width: '100%', height: '100%' }} />
        </div>
      </div>
      <img src={IMG.dot} alt="" style={{ position: 'absolute', left: 18.67, top: 34.32, width: 8.108, height: 8.108 }} />
    </div>
  )
}

// Three horizontal dots (replaces broken Figma asset)
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

// ── Main screen ───────────────────────────────────────────────────────────
export default function Ranking() {
  const [tab, setTab] = useState('todos')
  const list    = tab === 'todos' ? TODOS : AMIGOS
  const podium  = PODIUM[tab]

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: '#19101b', fontFamily: FONT, overflow: 'hidden' }}>

      {/* Top teal gradient */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 260, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 120% 220px at 50% 0%, rgba(58,226,209,0.16) 0%, transparent 70%)',
      }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute', pointerEvents: 'none',
        width: 591.646, height: 590.23, left: -108, top: -489,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ transform: 'rotate(5.78deg)', flexShrink: 0 }}>
          <div style={{ width: 540.186, height: 538.602, position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-18.57% -18.51%' }}>
              <img alt="" src={IMG.glow} style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* League drops */}
      <div style={{ position: 'absolute', left: 27, top: 39, display: 'flex', alignItems: 'center', gap: 17 }}>
        <img src={IMG.dropTeal} alt="" style={{ width: 45.63, height: 59.3, flexShrink: 0 }} />
        <img src={IMG.dropPurp} alt="" style={{ width: 71.561, height: 93, flexShrink: 0 }} />
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

      {/* Three-dot menu icon */}
      <EllipsisIcon />

      {/* Description */}
      <p style={{
        position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 168, margin: 0,
        fontWeight: 400, fontSize: 10, color: 'white', textAlign: 'center',
        letterSpacing: '-0.156px', lineHeight: 'normal', width: 302,
      }}>Obten 1500 XP más para subir a la siguiente liga</p>

      {/* Podium column backgrounds */}
      <img src={IMG.col1} alt="" style={{ position: 'absolute', left: 'calc(25% + 46.25px)', top: 196, width: 93.17, height: 518 }} />
      <img src={IMG.col3} alt="" style={{ position: 'absolute', left: 34, top: 294, width: 93.17, height: 518 }} />
      <img src={IMG.col2} alt="" style={{ position: 'absolute', left: 'calc(50% + 58.5px)', top: 226, width: 93.17, height: 518 }} />

      {/* 1st place (center, tallest) */}
      <div style={{ position: 'absolute', left: 'calc(25% + 57.25px)', top: 207 }}>
        <PodiumPhoto src={podium[0].photo} size={71} />
      </div>
      <img src={IMG.crown} alt="" style={{ position: 'absolute', left: 'calc(25% + 76.25px)', top: 261, width: 33, height: 33 }} />
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
        <PodiumPhoto src={podium[1].photo} size={70} />
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
        <PodiumPhoto src={podium[2].photo} size={70} />
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
          overflowY: 'auto', paddingBottom: 94,
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

              <ListPhoto src={p.photo} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <p style={{
                  margin: 0, fontWeight: 700, fontSize: 14, color: 'white',
                  letterSpacing: '-0.2184px', lineHeight: 'normal', whiteSpace: 'nowrap',
                }}>{p.alias}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginTop: 3 }}>
                  <img src={p.isMe ? IMG.fire1 : IMG.fire} alt="" style={{ width: 14, height: 14, flexShrink: 0 }} />
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

      <TabBar />
    </div>
  )
}
