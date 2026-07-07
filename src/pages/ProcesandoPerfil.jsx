import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import StarBackground from '../components/StarBackground'

const STARS_SM = [
  { left: 'calc(25% + 28.25px)', top: '74px' },
  { left: 'calc(25% + 14.25px)', top: '192px' },
  { left: '83px',                top: '288px' },
  { left: 'calc(50% + 47.5px)', top: '247px' },
  { left: 'calc(75% - 4.25px)', top: '213px' },
]

const STARS_MD = [
  { left: 'calc(50% + 21.5px)', top: '77px' },
  { left: 'calc(50% + 71.5px)', top: '61px' },
  { left: '86px',               top: '236px' },
  { left: 'calc(25% + 16.25px)', top: '261px' },
  { left: 'calc(25% + 24.25px)', top: '313px' },
  { left: 'calc(75% - 6.25px)', top: '261px' },
  { left: 'calc(50% + 70.5px)', top: '311px' },
]

const STARS_LG = [
  { left: 'calc(25% + 75.25px)', top: '51px' },
  { left: 'calc(50% - 6.5px)',   top: '95px' },
  { left: 'calc(25% + 61.25px)', top: '182px' },
  { left: 'calc(50% - 4.5px)',   top: '240px' },
  { left: 'calc(50% + 42.5px)', top: '182px' },
]

const BARS = [
  { label: 'Procesando preguntas', pct: 100 },
  { label: 'Analizando  hábitos',  pct: 100 },
  { label: 'Generando desafíos',   pct: 90  },
]

export default function ProcesandoPerfil() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/perfil/desafios-iniciales'), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <StarBackground>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
      {/* Overwrite the default stars with exact Figma positions */}

      {/* Stars from Figma */}
      {STARS_SM.map((pos, i) => (
        <img key={`sm-${i}`} alt="" src="/assets/star-sm.svg" className="absolute"
          style={{ width: '6px', height: '7px', left: pos.left, top: pos.top }} />
      ))}
      {STARS_MD.map((pos, i) => (
        <img key={`md-${i}`} alt="" src="/assets/star-md.svg" className="absolute"
          style={{ width: '4px', height: '5px', left: pos.left, top: pos.top }} />
      ))}
      {STARS_LG.map((pos, i) => (
        <img key={`lg-${i}`} alt="" src="/assets/star-lg.svg" className="absolute"
          style={{ width: '9px', height: '10px', left: pos.left, top: pos.top }} />
      ))}

      {/* Title — top: 133px */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
          letterSpacing: '-0.3744px',
          top: '133px',
        }}
      >
        Procesando tu perfil
      </p>

      {/* Shadow above drop — top: 278.34px */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 'calc(50% + 0.76px)',
          top: '278.34px',
          width: '31.527px',
          height: '3.658px',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img alt="" src="/assets/shadow-ellipse.svg"
            style={{ width: '31.504px', height: '3.445px', display: 'block' }} />
        </div>
      </div>

      {/* Waterdrop glow halo — top: 265px */}
      <div
        className="absolute"
        style={{
          left: 'calc(50% + 0.98px)',
          transform: 'translateX(-50%)',
          top: '265px',
          width: '118.967px',
          height: '71.589px',
        }}
      >
        <div className="absolute" style={{ inset: '-138.37% -89.25%' }}>
          <img alt="" src="/assets/waterdrop-glow.svg"
            className="block size-full" style={{ maxWidth: 'none' }} />
        </div>
      </div>

      {/* Waterdrop — top: 215px, left: calc(25%+52.25px) */}
      <img
        alt="Ember"
        src="/assets/waterdrop-emberhabla.svg"
        className="absolute"
        style={{
          left: 'calc(25% + 52.25px)',
          top: '215px',
          width: '83.987px',
          height: '109.148px',
          animation: 'floatY 3s ease-in-out infinite',
        }}
      />

      {/* Clock icon — left: calc(50%+21.5px), top: 275px, size: 47px */}
      <img
        alt=""
        src="/assets/clock-five-celeste.svg"
        className="absolute"
        style={{
          left: 'calc(50% + 21.5px)',
          top: '275px',
          width: '47px',
          height: '47px',
        }}
      />

      {/* Shadow below drop — top: 331px */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 'calc(50% + 0.64px)',
          top: '331px',
          width: '27.763px',
          height: '3.633px',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img alt="" src="/assets/shadow-ellipse.svg"
            style={{ width: '27.74px', height: '3.445px', display: 'block' }} />
        </div>
      </div>

      {/* Description — top: 348px */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: 'normal',
          color: 'rgba(255,255,255,0.8)',
          top: '348px',
          width: '331px',
        }}
      >
        Estamos analizando tus respuestas para personalizar tus desafíos.
      </p>

      {/* Progress bars — top: 432px, 489px, 546px */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: '432px', width: '328px', display: 'flex', flexDirection: 'column', gap: '30px' }}
      >
        {BARS.map(({ label, pct }) => (
          <div key={label} style={{ width: '328px' }}>
            {/* Label row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '4px',
            }}>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.1',
                color: '#949596',
                whiteSpace: 'nowrap',
              }}>
                {label}
              </span>
              <span style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.1',
                color: '#949596',
                whiteSpace: 'nowrap',
              }}>
                {pct}%
              </span>
            </div>
            {/* Track */}
            <div style={{
              position: 'relative',
              height: '8px',
              borderRadius: '40px',
              backgroundColor: '#2d6263',
              overflow: 'hidden',
            }}>
              {/* Fill */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, bottom: 0,
                width: `${pct}%`,
                borderRadius: '40px',
                backgroundColor: '#51fbea',
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* "Esto puede tardar..." — top: 658px */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: 'normal',
          color: 'rgba(255,255,255,0.8)',
          top: '658px',
          width: '331px',
        }}
      >
        Esto puede tardar unos segundos
      </p>

      {/* Spinner + "Cargando..." text — centered */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ top: '696px', gap: '10px' }}
      >
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          border: '3px solid rgba(255,255,255,0.18)',
          borderTopColor: '#51FBEA',
          animation: 'spin 0.9s linear infinite',
        }} />
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#ffffff',
          margin: 0,
        }}>
          Cargando...
        </p>
      </div>
    </StarBackground>
  )
}
