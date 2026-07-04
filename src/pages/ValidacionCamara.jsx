import { useNavigate, useLocation } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'

export default function ValidacionCamara() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const subtitulo = state?.subtitulo ?? 'Captura previa'

  return (
    <div style={{
      position: 'fixed', inset: 0,
      backgroundColor: '#19101b',
      overflow: 'hidden',
      fontFamily: FONT,
      display: 'flex', flexDirection: 'column',
    }}>

      {/* Magenta background glow */}
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

      {/* Back arrow */}
      <button onClick={() => navigate(-1)} style={{
        position: 'absolute', left: '20px', top: '56px',
        background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
        display: 'flex', alignItems: 'center',
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 19L8 12L15 5"
            stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Title */}
      <p style={{
        position: 'absolute', left: '50%', top: '90px',
        transform: 'translateX(-50%)', width: '159px',
        fontWeight: 700, fontSize: '16px',
        color: 'white', textAlign: 'center', lineHeight: 'normal', margin: 0,
      }}>Validación desafío</p>

      {/* Subtitle */}
      <p style={{
        position: 'absolute', left: '50%', top: '120px',
        transform: 'translateX(-50%)', width: '310px',
        fontWeight: 500, fontSize: '14px',
        color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 'normal', margin: 0,
      }}>{subtitulo}</p>

      {/* Description */}
      <p style={{
        position: 'absolute', left: '50%', top: '141px',
        transform: 'translateX(-50%)', width: '310px',
        fontWeight: 400, fontSize: '12px',
        color: 'rgba(255,255,255,0.58)', textAlign: 'center', lineHeight: 'normal', margin: 0,
      }}>Este desafío se cuantificará con tu app Health.</p>

      {/* Teal border */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '174px',
        height: '3px',
        backgroundColor: 'rgba(55,190,176,0.5)',
      }} />

      {/* Camera placeholder area */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        top: '174px', bottom: '165px',
        backgroundColor: '#0d0d0d',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: '16px',
      }}>
        <svg width="52" height="52" viewBox="0 0 24 24" fill="none" style={{ opacity: 0.38 }}>
          <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
            stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="1.5"/>
        </svg>
        <p style={{
          fontSize: '13px', color: 'rgba(255,255,255,0.5)',
          textAlign: 'center', lineHeight: '1.5', margin: '0 40px',
        }}>Aquí se mostrará la cámara</p>
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: '165px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Shutter button */}
        <div
          onClick={() => navigate('/confirmar-evidencia', { state: { subtitulo } })}
          style={{
            width: '72px', height: '72px', cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '3px solid white',
          }} />
          <div style={{
            position: 'absolute', inset: '4px', borderRadius: '50%',
            backgroundColor: 'white',
          }} />
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
    </div>
  )
}
