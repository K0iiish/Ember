import { useNavigate } from 'react-router-dom'
import StarBackground from '../components/StarBackground'

export default function OnboardingSaludo2() {
  const navigate = useNavigate()

  return (
    <StarBackground glowSrc="/assets/glow-ellipse-magenta.svg">

      {/* Tooltip — top: 220px, width: 227px, height: 78px */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: '220px', width: '227px', height: '78px' }}
      >
        <div
          className="relative flex items-center justify-center"
          style={{
            background: 'rgba(44, 28, 50, 0.92)',
            border: '1px solid rgba(168, 85, 247, 0.25)',
            borderRadius: '16px',
            padding: '18px 12px 16px',
          }}
        >
          <p
            className="text-white text-center"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '15px',
              lineHeight: 'normal',
              letterSpacing: '-0.234px',
              width: '203px',
            }}
          >
            Comencemos con 5 preguntas para saber cómo has estado esta semana.
          </p>
          <div
            className="absolute left-1/2 -translate-x-1/2"
            style={{
              bottom: '-10px',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid rgba(44, 28, 50, 0.92)',
            }}
          />
        </div>
      </div>

      {/* Shadow above drop — top: 397.34px */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 'calc(50% + 0.76px)',
          top: '397.34px',
          width: '31.527px',
          height: '3.658px',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img
            alt=""
            src="/assets/shadow-ellipse.svg"
            style={{ width: '31.504px', height: '3.445px', display: 'block' }}
          />
        </div>
      </div>

      {/* Waterdrop glow halo — top: 401px */}
      <div
        className="absolute"
        style={{
          left: 'calc(50% + 0.98px)',
          transform: 'translateX(-50%)',
          top: '401px',
          width: '118.967px',
          height: '71.589px',
        }}
      >
        <div className="absolute" style={{ inset: '-138.37% -89.25%' }}>
          <img
            alt=""
            src="/assets/waterdrop-glow-magenta.svg"
            className="block size-full"
            style={{ maxWidth: 'none' }}
          />
        </div>
      </div>

      {/* Stars — posiciones exactas de Figma */}
      <img alt="" src="/assets/star-sm.svg" className="absolute"
        style={{ width: '6px', height: '7px', left: '83px', top: '407px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute"
        style={{ width: '4px', height: '5px', left: 'calc(25% + 16.25px)', top: '380px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute"
        style={{ width: '4px', height: '5px', left: 'calc(25% + 24.25px)', top: '432px' }} />
      <img alt="" src="/assets/star-sm.svg" className="absolute"
        style={{ width: '6px', height: '7px', left: 'calc(50% + 47.5px)', top: '366px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute"
        style={{ width: '4px', height: '5px', left: 'calc(75% - 6.25px)', top: '380px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute"
        style={{ width: '4px', height: '5px', left: 'calc(50% + 70.5px)', top: '430px' }} />

      {/* Waterdrop — top: 351px, left: calc(25%+52.25px) */}
      <img
        alt="Ember"
        src="/assets/waterdrop-magenta.svg"
        className="absolute"
        style={{
          left: 'calc(25% + 52.25px)',
          top: '351px',
          width: '83.987px',
          height: '109.148px',
          animation: 'floatY 3s ease-in-out infinite',
        }}
      />

      {/* Shadow below drop — top: 467px */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 'calc(50% + 0.64px)',
          top: '467px',
          width: '27.763px',
          height: '3.633px',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img
            alt=""
            src="/assets/shadow-ellipse.svg"
            style={{ width: '27.74px', height: '3.445px', display: 'block' }}
          />
        </div>
      </div>

      {/* Texto secundario — top: 548px, width: 308px */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: 'normal',
          color: 'rgba(255, 255, 255, 0.8)',
          top: '548px',
          width: '308px',
        }}
      >
        Tomará menos de 3 minutos y nos ayudará a personalizar tus desafíos.
      </p>

      {/* Continuar — white pill, left: 42px, top: 696px, width: 292px, height: 47px */}
      <button
        onClick={() => navigate('/onboarding/test/1')}
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: '42px',
          top: '696px',
          width: '292px',
          height: '47px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          backgroundColor: '#ffffff',
          color: '#19101b',
        }}
      >
        Continuar
      </button>
    </StarBackground>
  )
}
