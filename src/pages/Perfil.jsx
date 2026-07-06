
const FONT = 'Montserrat, sans-serif'
const BG   = '#19101b'

const INSTITUTION_BADGE = '/assets/institution-badge.png'
const LOGROS_SPRITE     = '/assets/logros-sprite.png'

const MEDALS = [
  { src: '/assets/medal-moon.png',       name: 'Luna',       unlocked: true },
  { src: '/assets/medal-fire.png',       name: 'Fuego',      unlocked: true },
  { src: '/assets/medal-meditation.png', name: 'Meditación', unlocked: true },
  { src: '/assets/medal-walking.png',    name: 'Caminata',   unlocked: true },
]

// Crop positions derived from Figma node 768-29314 (percentages × 68px container,
// sprite displayed at 306px = 449.46% × 68px)
const LOGROS = [
  { cropX: -11,  cropY: -76,  name: 'Montaña',   unlocked: true },
  { cropX: -226, cropY: -76,  name: 'Nutrición',  unlocked: true },
  { cropX: -226, cropY: -158, name: 'Trofeo',     unlocked: true },
  { cropX: -155, cropY: -158, name: 'Meta',       unlocked: true },
]

const Y_LABELS = ['80 XP', '60  XP', '40 XP', '20 XP', '0 XP']
const X_LABELS = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab']

const BADGE_SIZE = 68

function Medal({ src, name, unlocked }) {
  return (
    <div style={{
      width: BADGE_SIZE, height: BADGE_SIZE,
      borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
      filter: unlocked ? 'none' : 'grayscale(1) brightness(0.35)',
    }}>
      <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
    </div>
  )
}

function Logro({ cropX, cropY, name, unlocked }) {
  return (
    <div style={{
      width: BADGE_SIZE, height: BADGE_SIZE,
      borderRadius: '50%', overflow: 'hidden', flexShrink: 0, position: 'relative',
      filter: unlocked ? 'none' : 'grayscale(1) brightness(0.35)',
    }} aria-label={name}>
      <img src={LOGROS_SPRITE} alt="" style={{
        position: 'absolute',
        width: 306, height: 306,
        left: cropX, top: cropY,
        maxWidth: 'none', display: 'block',
      }} />
    </div>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EllipsisH() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
      <circle cx="5"  cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  )
}


export default function Perfil() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', backgroundColor: BG, overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, overflowY: 'auto', fontFamily: FONT, paddingBottom: '78px' }}>

        {/* Top teal gradient */}
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, height: 260, pointerEvents: 'none', zIndex: 0,
          background: 'radial-gradient(ellipse 120% 220px at 50% 0%, rgba(58,226,209,0.15) 0%, transparent 70%)',
        }} />

        {/* ── HEADER ── */}
        <div style={{ position: 'relative', height: 238 }}>
          {/* Header background */}
          <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
            <img src="/assets/perfil-header-bg.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Username */}
          <span style={{
            position: 'absolute', top: 61, left: 0, right: 0,
            textAlign: 'center', fontFamily: FONT,
            fontWeight: 700, fontSize: 20, color: '#fff', letterSpacing: -0.4, lineHeight: 1,
          }}>
            Javier12
          </span>

          {/* Three dots */}
          <div style={{ position: 'absolute', top: 49, right: 16 }}>
            <EllipsisH />
          </div>

          {/* Profile photo */}
          <div style={{
            position: 'absolute', top: 83, left: '50%', transform: 'translateX(-50%)',
            width: 120, height: 120, flexShrink: 0, zIndex: 1,
            borderRadius: '50%', overflow: 'hidden',
            border: '3px solid #3ae2d1',
            boxShadow: '0 0 0 4px #19101b, 0 0 16px rgba(58,226,209,0.35)',
          }}>
            <img src="/assets/avatar-javier12.png" alt="Javier12"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          {/* Drop icon */}
          <div style={{
            position: 'absolute', top: 218, left: '50%', transform: 'translateX(-50%)',
            width: 23, height: 29, zIndex: 2,
          }}>
            <img src="/assets/perfil-drop.svg" alt="" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
        </div>

        {/* ── STATS ROW ── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          padding: '10px 16px', marginTop: 20,
        }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff', margin: 0, letterSpacing: -0.2 }}>2500 XP</p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: -0.14 }}>de rendimiento</p>
          </div>
          <div style={{ width: 1, height: 47, background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff', margin: 0, letterSpacing: -0.2 }}>47 días</p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: -0.14 }}>de racha</p>
          </div>
          <div style={{ width: 1, height: 47, background: 'rgba(255,255,255,0.25)', flexShrink: 0 }} />
          <div style={{ flex: 1, textAlign: 'center' }}>
            <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff', margin: 0, letterSpacing: -0.2 }}>48%</p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: -0.14 }}>de constancia</p>
          </div>
        </div>

        {/* ── INSTITUTION ROW ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 35px' }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
            <img src={INSTITUTION_BADGE} alt="Bombero" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
          <div>
            <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: 20, color: '#fff', margin: 0, letterSpacing: -0.2 }}>Bombero</p>
            <p style={{ fontFamily: FONT, fontWeight: 400, fontSize: 14, color: 'rgba(255,255,255,0.5)', margin: 0, letterSpacing: -0.14 }}>Compañía 18, Vitacura</p>
          </div>
        </div>

        {/* ── CHART CARD ── */}
        <div style={{
          margin: '10px 16px 0',
          background: '#22192d',
          borderRadius: 12.447,
          padding: '18.67px',
          boxShadow: '0px 0px 0.778px 0px rgba(12,26,75,0.24), 0px 2.334px 6.223px 0px rgba(50,50,71,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: '#fff', lineHeight: '19.448px' }}>
              Progreso semanal
            </span>
            <div style={{ border: '0.778px solid rgba(255,255,255,0.4)', borderRadius: 3.112, padding: '6.223px 12.447px' }}>
              <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 11, color: '#fff', whiteSpace: 'nowrap' }}>Ver detalle</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 18.67, alignItems: 'center', marginBottom: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7.779 }}>
              <div style={{ width: 6.223, height: 6.223, borderRadius: '50%', backgroundColor: '#3ae2d1', flexShrink: 0 }} />
              <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 7.78, color: '#fff' }}>Sueño</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 7.779 }}>
              <div style={{ width: 6.223, height: 6.223, borderRadius: '50%', backgroundColor: '#e88ff4', flexShrink: 0 }} />
              <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: 7.78, color: '#fff' }}>Hidratación</span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 26, flexShrink: 0, paddingBottom: 17 }}>
              {Y_LABELS.map(l => (
                <span key={l} style={{ fontFamily: FONT, fontWeight: 600, fontSize: 7.779, color: '#425466', lineHeight: '7.779px' }}>{l}</span>
              ))}
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'relative', flex: 1, minHeight: 65 }}>
                <img src="/assets/chart-teal.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
                <img src="/assets/chart-purple.svg" alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8 }}>
                {X_LABELS.map(l => (
                  <span key={l} style={{ fontFamily: FONT, fontWeight: 600, fontSize: 7.779, color: '#8492a6' }}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MEDALLAS MENSUALES ── */}
        <div style={{ margin: '20px 16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: '#fff', lineHeight: '19.448px' }}>
              Medallas mensuales
            </span>
            <ChevronRight />
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-start' }}>
            {MEDALS.map((m, i) => (
              <Medal key={i} {...m} />
            ))}
          </div>
        </div>

        {/* ── LOGROS ── */}
        <div style={{ margin: '20px 16px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <span style={{ fontFamily: FONT, fontWeight: 600, fontSize: 14, color: '#fff', lineHeight: '19.448px' }}>
              Logros
            </span>
            <ChevronRight />
          </div>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'flex-start' }}>
            {LOGROS.map((l, i) => (
              <Logro key={i} cropX={l.cropX} cropY={l.cropY} name={l.name} unlocked={l.unlocked} />
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}
