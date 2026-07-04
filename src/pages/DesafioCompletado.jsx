import { useNavigate, useLocation } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'
const TEAL = '#1ad6cf'

export default function DesafioCompletado() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const subtitulo = state?.subtitulo ?? ''

  return (
    <div style={{
      position: 'fixed', inset: 0,
      backgroundColor: '#19101b',
      overflow: 'hidden',
      fontFamily: FONT,
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
    }}>

      {/* Teal glow circle behind checkmark */}
      <div style={{
        position: 'absolute',
        width: '320px', height: '320px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(26,214,207,0.18) 0%, rgba(26,214,207,0) 70%)',
        pointerEvents: 'none',
      }} />

      {/* Check circle */}
      <div style={{
        width: '96px', height: '96px', borderRadius: '50%',
        backgroundColor: 'rgba(26,214,207,0.15)',
        border: `2px solid ${TEAL}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '28px',
      }}>
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none">
          <path d="M5 13L9 17L19 7"
            stroke={TEAL} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Title */}
      <p style={{
        fontWeight: 800, fontSize: '26px',
        color: 'white', textAlign: 'center',
        lineHeight: '1.2', margin: '0 32px 12px',
      }}>¡Desafío completado!</p>

      {/* Subtitle */}
      {subtitulo ? (
        <p style={{
          fontWeight: 500, fontSize: '14px',
          color: 'rgba(255,255,255,0.6)', textAlign: 'center',
          lineHeight: '1.5', margin: '0 40px 32px',
        }}>{subtitulo}</p>
      ) : <div style={{ marginBottom: '32px' }} />}

      {/* XP badge */}
      <div style={{
        height: '40px', paddingLeft: '20px', paddingRight: '20px',
        backgroundColor: '#26232d',
        borderRadius: '100px',
        display: 'flex', alignItems: 'center', gap: '8px',
        marginBottom: '48px',
      }}>
        <img src="/assets/icon-star-xp.svg" alt="" style={{ width: '18px', height: '18px' }} />
        <p style={{
          fontWeight: 600, fontSize: '15px',
          color: 'white', margin: 0, whiteSpace: 'nowrap',
        }}>+20 XP ganados</p>
      </div>

      {/* Back to home button */}
      <button
        onClick={() => navigate('/home')}
        style={{
          width: 'calc(100% - 40px)',
          height: '52px',
          backgroundColor: TEAL,
          border: 'none', borderRadius: '100px',
          cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <p style={{
          fontWeight: 700, fontSize: '16px',
          color: '#19101b', margin: 0, lineHeight: '24px',
          whiteSpace: 'nowrap',
        }}>Volver al inicio</p>
      </button>

      {/* Home indicator */}
      <div style={{
        position: 'absolute', bottom: '8px', left: '50%',
        transform: 'translateX(-50%)',
        width: '134px', height: '5px',
        backgroundColor: 'rgba(255,255,255,0.38)',
        borderRadius: '100px',
      }} />

    </div>
  )
}
