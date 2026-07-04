import { useNavigate, useLocation } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'
const TEAL = '#1ad6cf'

export default function ConfirmarEvidencia() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const subtitulo = state?.subtitulo ?? 'Captura previa a dormir'

  const handleValidar = () => {
    navigate('/home', {
      state: { showCompletado: true, xp: '+50 XP', titulo: subtitulo },
    })
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      backgroundColor: '#19101b',
      overflow: 'hidden',
      fontFamily: FONT,
      display: 'flex', flexDirection: 'column',
    }}>

      {/* Magenta glow */}
      <div style={{
        position: 'absolute', pointerEvents: 'none',
        width: '515.623px', height: '582.54px',
        left: '-74px', top: '-509px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ transform: 'rotate(5.78deg)' }}>
          <div style={{ width: '463.775px', height: '538.602px', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-18.57% -21.56%' }}>
              <img alt="" src="/assets/glow-ellipse-magenta.svg"
                style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <p style={{
        position: 'absolute', left: '50%', top: '72px',
        transform: 'translateX(-50%)',
        fontWeight: 700, fontSize: '16px',
        color: 'white', textAlign: 'center', lineHeight: 'normal', margin: 0,
        whiteSpace: 'nowrap',
      }}>Validación desafío</p>

      <p style={{
        position: 'absolute', left: '50%', top: '100px',
        transform: 'translateX(-50%)',
        fontWeight: 500, fontSize: '14px',
        color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 'normal', margin: 0,
        whiteSpace: 'nowrap',
      }}>{subtitulo}</p>

      {/* Preview box with teal border */}
      <div style={{
        position: 'absolute',
        left: '20px', right: '20px',
        top: '140px',
        height: '420px',
        border: `2px solid ${TEAL}`,
        borderRadius: '16px',
        backgroundColor: '#0d0d0d',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '12px',
      }}>

        {/* X button — top right of preview box */}
        <button
          onClick={() => navigate(-1)}
          style={{
            position: 'absolute', top: '12px', right: '12px',
            width: '32px', height: '32px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M13 1L1 13"
              stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Placeholder camera icon */}
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.3 }}>
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.5" />
        </svg>

        <p style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.35)',
          textAlign: 'center', lineHeight: '1.5', margin: '0 40px',
        }}>Vista previa de la captura</p>

      </div>

      {/* Validar desafío button */}
      <button
        onClick={handleValidar}
        style={{
          position: 'absolute',
          left: '20px', right: '20px',
          top: '588px',
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
        }}>Validar desafío</p>
      </button>

      {/* Privacy notice */}
      <div style={{
        position: 'absolute',
        left: '20px', right: '20px',
        top: '658px',
        display: 'flex', alignItems: 'flex-start', gap: '10px',
      }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          style={{ flexShrink: 0, marginTop: '1px', opacity: 0.6 }}>
          <rect x="3" y="11" width="18" height="11" rx="2"
            stroke="white" strokeWidth="1.8" />
          <path d="M7 11V7a5 5 0 0110 0v4"
            stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <p style={{
          fontSize: '12px', fontWeight: 400,
          color: 'rgba(255,255,255,0.45)', lineHeight: '1.5', margin: 0,
        }}>
          Tu imagen se procesará de forma privada y no será compartida con terceros.
        </p>
      </div>

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
