import { useNavigate, useLocation } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'

function IcoHome({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M3 10.5L12 3L21 10.5V20C21 20.55 20.55 21 20 21H15V15H9V21H4C3.45 21 3 20.55 3 20V10.5Z"
        fill={color} />
    </svg>
  )
}

function IcoBitacora({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke={color} strokeWidth="1.8"/>
      <line x1="16" y1="2" x2="16" y2="6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="8" y1="2" x2="8" y2="6" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.8"/>
      <line x1="7" y1="14" x2="10" y2="14" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
      <line x1="7" y1="17" x2="13" y2="17" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  )
}

function IcoNovedad({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill={color}>
      <rect x="2"  y="14" width="4" height="7" rx="1"/>
      <rect x="9"  y="9"  width="4" height="12" rx="1"/>
      <rect x="16" y="4"  width="4" height="17" rx="1"/>
    </svg>
  )
}

function IcoPerfil({ color }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M20 21V19C20 16.79 18.21 15 16 15H8C5.79 15 4 16.79 4 19V21"
        stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="12" cy="7" r="4" stroke={color} strokeWidth="1.8"/>
    </svg>
  )
}

const TABS = [
  { key: 'inicio',   label: 'Inicio',   path: '/home',     Icon: IcoHome },
  { key: 'bitacora', label: 'Bitácora', path: '/bitacora', Icon: IcoBitacora },
  { key: 'ranking',  label: 'Ranking',  path: '/ranking',  Icon: null }, // center button
  { key: 'novedad',  label: 'Novedad',  path: '/novedad',  Icon: IcoNovedad },
  { key: 'perfil',   label: 'Perfil',   path: '/perfil',   Icon: IcoPerfil },
]

export default function TabBar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      backgroundColor: '#18181f',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: '10px',
      paddingBottom: 'env(safe-area-inset-bottom, 0px)',
    }}>
      {TABS.map((tab) => {
        if (tab.key === 'ranking') {
          return (
            <div key="ranking" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* Raised center button with circular glow */}
              <div style={{ position: 'relative', marginTop: '-38px', width: '44px', height: '57px' }}>
                <div style={{
                  position: 'absolute',
                  left: '50%', top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '44px', height: '44px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(192,64,232,0.45) 0%, rgba(192,64,232,0) 75%)',
                  boxShadow: '0 0 18px 6px rgba(192,64,232,0.35)',
                }} />
                <img
                  src="/assets/waterdrop-magenta.svg"
                  alt=""
                  onClick={() => navigate('/ranking')}
                  style={{ width: '44px', height: '57px', position: 'relative', cursor: 'pointer' }}
                />
              </div>
              <p style={{
                fontFamily: FONT, fontWeight: 500, fontSize: '12px',
                letterSpacing: '0.03px', color: '#dfdfe0',
                marginTop: '4px', lineHeight: 'normal',
              }}>
                {tab.label}
              </p>
            </div>
          )
        }

        const isActive = pathname === tab.path
        const color = isActive ? '#51fbea' : '#dfdfe0'
        const weight = isActive ? 600 : 500

        // Perfil tab — foto circular del usuario
        if (tab.key === 'perfil') {
          return (
            <button
              key="perfil"
              onClick={() => navigate('/perfil')}
              style={{
                flex: 1, display: 'flex', flexDirection: 'column',
                alignItems: 'center', gap: '6px',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}
            >
              <div style={{
                width: '26px', height: '26px', borderRadius: '50%',
                border: `1.5px solid ${isActive ? '#51fbea' : 'rgba(255,255,255,0.35)'}`,
                overflow: 'hidden', boxSizing: 'border-box', flexShrink: 0,
              }}>
                <img src="/assets/avatar-javier.png" alt=""
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <p style={{
                fontFamily: FONT, fontWeight: weight, fontSize: '12px',
                letterSpacing: '0.03px', color, margin: 0, lineHeight: 'normal', whiteSpace: 'nowrap',
              }}>Perfil</p>
            </button>
          )
        }

        return (
          <button
            key={tab.key}
            onClick={() => tab.path && navigate(tab.path)}
            style={{
              flex: 1,
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '6px',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: 0,
            }}
          >
            <tab.Icon color={color} />
            <p style={{
              fontFamily: FONT, fontWeight: weight, fontSize: '12px',
              letterSpacing: '0.03px', color, margin: 0, lineHeight: 'normal',
              whiteSpace: 'nowrap',
            }}>
              {tab.label}
            </p>
          </button>
        )
      })}
    </div>
  )
}
