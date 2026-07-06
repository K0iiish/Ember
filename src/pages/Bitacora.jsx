import { useState, useEffect } from 'react'

const FONT = 'Montserrat, sans-serif'
const BG = '#19101b'

const AVATAR_COLORS = ['#3ae2d1', '#e88ff4', '#7c6eff', '#ff9f6b', '#ffd166']
function avatarColor(alias) {
  return AVATAR_COLORS[alias.charCodeAt(0) % AVATAR_COLORS.length]
}

const FRIENDS = [
  { alias: 'Esteban03', days: '35 días', pending: false },
  { alias: 'Marceel',   days: '10 días', pending: false },
  { alias: 'AniK',      days: '7 días',  pending: false },
  { alias: 'Gern',      days: '2 días',  pending: false },
  { alias: 'Sabri.C',   days: null,      pending: true  },
]

const WEEK_LABELS = ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom']
const MONTH_NAMES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

const TODAY_YEAR  = 2026
const TODAY_MONTH = 5   // June (0-indexed)
const TODAY_DAY   = 21

const MIN_VIEW = new Date(2026, 0, 1)
const MAX_VIEW = new Date(TODAY_YEAR, TODAY_MONTH, 1)

const JUNE_STATES = {
  1: 'completed', 2: 'completed', 3: 'partial',   4: 'completed', 5: 'completed',
  6: 'empty',     7: 'completed', 8: 'completed',  9: 'empty',    10: 'partial',
 11: 'completed',12: 'partial',  13: 'completed', 14: 'completed',15: 'empty',
 16: 'completed',17: 'completed',18: 'empty',     19: 'partial',  20: 'completed',
 21: 'today',
}

function getDayType(year, month, day) {
  const isCurrent = year === TODAY_YEAR && month === TODAY_MONTH
  const isPast    = year < TODAY_YEAR || (year === TODAY_YEAR && month < TODAY_MONTH)

  if (isCurrent) {
    if (day > TODAY_DAY) return 'plain'
    if (day === TODAY_DAY) return 'today'
    return JUNE_STATES[day] || 'empty'
  }
  if (isPast) {
    if (day % 7 === 0) return 'empty'
    if (day % 4 === 0) return 'partial'
    return 'completed'
  }
  return 'plain'
}

function buildCalendarForMonth(year, month) {
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayJS  = new Date(year, month, 1).getDay()
  const startOffset = firstDayJS === 0 ? 6 : firstDayJS - 1
  const prevDays    = new Date(year, month, 0).getDate()

  const cells = []
  for (let i = startOffset; i > 0; i--) cells.push({ day: prevDays - i + 1, type: 'prev' })
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, type: getDayType(year, month, d) })
  const tail = cells.length % 7 === 0 ? 0 : 7 - (cells.length % 7)
  for (let i = 1; i <= tail; i++) cells.push({ day: i, type: 'next' })
  return cells
}

/* ── Animated half-arc: fills from left to right on mount ── */
function ProgressArc({ pct, mounted }) {
  const R = 95, CX = 112.5, CY = 160
  const halfCircum = Math.PI * R
  const progressLen = (pct / 100) * halfCircum
  const pathD = `M ${CX - R} ${CY} A ${R} ${R} 0 0 1 ${CX + R} ${CY}`
  return (
    <svg width="225" height="225" viewBox="0 0 225 225"
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', transform: 'translateY(-10px)' }}>
      <path d={pathD} stroke="rgba(58,226,209,0.2)" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d={pathD} stroke="#3ae2d1" strokeWidth="18" fill="none" strokeLinecap="round"
        strokeDasharray={`${progressLen.toFixed(1)} ${(halfCircum * 2).toFixed(1)}`}
        strokeDashoffset={mounted ? '0' : progressLen.toFixed(1)}
        style={{ transition: 'stroke-dashoffset 0.9s ease-out 0.1s' }}
      />
    </svg>
  )
}

/* ── Calendar day cell with SVG progress ring (stroke-based) ── */
function DayCell({ cell }) {
  const SIZE = 30, R = 12, CX = 15, CY = 15
  const circ = 2 * Math.PI * R

  let textColor, textWeight, progressFill, showRing

  switch (cell.type) {
    case 'completed':
      textColor = '#fff';              textWeight = 600; progressFill = 1.0;  showRing = true;  break
    case 'partial':
      textColor = '#fff';              textWeight = 500; progressFill = 0.6;  showRing = true;  break
    case 'today':
      textColor = '#51fbea';           textWeight = 700; progressFill = 0.43; showRing = true;  break
    case 'empty':
      textColor = 'rgba(255,255,255,0.4)'; textWeight = 400; progressFill = 0; showRing = true; break
    case 'plain':
      textColor = 'rgba(255,255,255,0.3)'; textWeight = 400; progressFill = 0; showRing = false; break
    default: // prev / next month
      textColor = 'rgba(255,255,255,0.18)'; textWeight = 400; progressFill = 0; showRing = false
  }

  const strokeColor = cell.type === 'today' ? '#51fbea' : '#3ae2d1'
  const dashOffset  = circ * (1 - progressFill)

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', aspectRatio: '1' }}>
      <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
        <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ position: 'absolute', inset: 0 }}>
          {showRing && (
            <>
              {/* Faint track ring + dark fill */}
              <circle cx={CX} cy={CY} r={R} fill="rgba(255,255,255,0.04)"
                stroke="rgba(58,226,209,0.12)" strokeWidth="1.5" />
              {/* Progress stroke */}
              {progressFill > 0 && (
                <circle cx={CX} cy={CY} r={R} fill="none"
                  stroke={strokeColor} strokeWidth="2" strokeLinecap="round"
                  strokeDasharray={circ.toFixed(2)}
                  strokeDashoffset={dashOffset.toFixed(2)}
                  transform={`rotate(-90 ${CX} ${CY})`}
                />
              )}
            </>
          )}
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: textWeight, color: textColor, lineHeight: 1 }}>
            {cell.day}
          </span>
        </div>
      </div>
    </div>
  )
}

function PersonalVariant() {
  const [viewDate, setViewDate] = useState(MAX_VIEW)
  const [mounted, setMounted]   = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  const year       = viewDate.getFullYear()
  const month      = viewDate.getMonth()
  const canBack    = viewDate > MIN_VIEW
  const canForward = viewDate < MAX_VIEW
  const goBack     = () => canBack    && setViewDate(new Date(year, month - 1, 1))
  const goForward  = () => canForward && setViewDate(new Date(year, month + 1, 1))
  const calendar   = buildCalendarForMonth(year, month)

  return (
    <div>
      {/* Arc progress — negative margin eats into SVG's ~65px blank top space */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: -40 }}>
        <div style={{ position: 'relative', width: 225, height: 225 }}>
          <ProgressArc pct={43} mounted={mounted} />
          <div style={{ position: 'absolute', left: 0, right: 0, top: 92, textAlign: 'center' }}>
            <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 40, color: '#fff', lineHeight: 1 }}>43%</div>
            <div style={{ fontFamily: FONT, fontWeight: 700, fontSize: 13, color: '#fff', marginTop: 6 }}>Avance diario</div>
            <div style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, color: '#fff', marginTop: 2 }}>¡Sigue así!</div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div style={{ display: 'flex', gap: 10, padding: '0 14px', marginTop: -50, position: 'relative', zIndex: 1, top: 14 }}>
        <div style={{
          flex: 1, border: '1px solid #51fbea', borderRadius: 20, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff' }}>47</span>
          <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, color: '#fff' }}>Días de Racha</span>
        </div>
        <div style={{
          flex: 1, border: '1px solid #51fbea', borderRadius: 20, height: 48,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        }}>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff' }}>2500</span>
          <span style={{ fontFamily: FONT, fontWeight: 400, fontSize: 13, color: '#fff' }}>XP acumulada</span>
        </div>
      </div>

      {/* Calendar */}
      <div style={{ margin: '20px 14px 0' }}>
        {/* Month navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          <button onClick={goBack} disabled={!canBack}
            style={{ background: 'none', border: 'none', cursor: canBack ? 'pointer' : 'default', padding: 4, opacity: canBack ? 0.9 : 0.25 }}>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M9 1L1 9L9 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 28, color: '#fff', letterSpacing: -0.5 }}>
            {MONTH_NAMES[month]} <span style={{ fontWeight: 400 }}>{year}</span>
          </span>
          <button onClick={goForward} disabled={!canForward}
            style={{ background: 'none', border: 'none', cursor: canForward ? 'pointer' : 'default', padding: 4, opacity: canForward ? 0.9 : 0.25 }}>
            <svg width="10" height="18" viewBox="0 0 10 18" fill="none">
              <path d="M1 1L9 9L1 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* Week headers */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: 6 }}>
          {WEEK_LABELS.map(l => (
            <div key={l} style={{ textAlign: 'center', fontFamily: FONT, fontSize: 13, fontWeight: 500, color: '#fff', paddingBottom: 4 }}>{l}</div>
          ))}
        </div>

        {/* Day cells with stroke rings */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', rowGap: 4 }}>
          {calendar.map((cell, idx) => (
            <DayCell key={idx} cell={cell} />
          ))}
        </div>
      </div>
    </div>
  )
}

function FriendPhoto({ alias }) {
  return (
    <div style={{
      width: 51, height: 51, borderRadius: '50%', flexShrink: 0,
      backgroundColor: avatarColor(alias),
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{ fontSize: 20, fontWeight: 700, color: '#19101b' }}>{alias[0].toUpperCase()}</span>
    </div>
  )
}

function InviteRow() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0' }}>
      <div style={{
        width: 51, height: 51, borderRadius: '50%',
        border: '1.5px dashed rgba(255,255,255,0.3)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <line x1="10" y1="4" x2="10" y2="16" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
          <line x1="4"  y1="10" x2="16" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <span style={{ fontFamily: FONT, fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)' }}>¡Invita a un amigo!</span>
    </div>
  )
}

function AmigosVariant() {
  return (
    <div style={{ padding: '20px 14px' }}>
      <div style={{ border: '1px solid rgba(81,251,234,0.4)', borderRadius: 20, padding: '16px 20px', background: 'rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 15, color: '#fff' }}>Rachas entre amigos</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
            <circle cx="5"  cy="12" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="19" cy="12" r="2" />
          </svg>
        </div>
        {FRIENDS.map((f, i) => (
          <div key={f.alias}>
            {i > 0 && <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />}
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 0' }}>
              <FriendPhoto alias={f.alias} />
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: '#fff', marginBottom: 2 }}>{f.alias}</div>
                {f.pending ? (
                  <span style={{ fontFamily: FONT, fontSize: 12, fontWeight: 500, color: 'rgba(232,143,244,0.7)' }}>Solicitud pendiente</span>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <img src="/assets/icon-fire.svg" alt="" style={{ width: 16, height: 16, objectFit: 'contain' }} />
                    <span style={{ fontFamily: FONT, fontSize: 13, fontWeight: 500, color: '#e88ff4' }}>{f.days}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
        <InviteRow />
        <div style={{ height: 1, background: 'rgba(255,255,255,0.08)' }} />
        <InviteRow />
      </div>
    </div>
  )
}

export default function Bitacora() {
  const [tab, setTab] = useState('personal')

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', fontFamily: FONT, paddingBottom: '60px' }}>

        {/* Top teal gradient */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 260,
          background: 'radial-gradient(ellipse 120% 220px at 50% 0%, rgba(58,226,209,0.18) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        {/* Header */}
        <div style={{ padding: '52px 20px 0', position: 'relative', zIndex: 1 }}>
          <span style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff' }}>Bitácora</span>
        </div>

        {/* Toggle */}
        <div style={{ display: 'flex', padding: '16px 20px 0', gap: 0, position: 'relative', zIndex: 1 }}>
          {['personal', 'amigos'].map(t => {
            const active = tab === t
            return (
              <button key={t} onClick={() => setTab(t)} style={{
                flex: 1, background: 'none', border: 'none',
                borderBottom: active ? '2px solid #3ae2d1' : '2px solid rgba(58,226,209,0.15)',
                paddingBottom: 10, cursor: 'pointer',
                fontFamily: FONT, fontWeight: active ? 600 : 500, fontSize: 14,
                color: active ? '#3ae2d1' : 'rgba(58,226,209,0.3)',
                textAlign: 'center', letterSpacing: 0.1,
              }}>
                {t === 'personal' ? 'Personal' : 'Amigos'}
              </button>
            )
          })}
        </div>

        <div style={{ position: 'relative', zIndex: 1 }}>
          {tab === 'personal' ? <PersonalVariant /> : <AmigosVariant />}
        </div>
      </div>

    </div>
  )
}
