import { useNavigate } from 'react-router-dom'
import StarBackground from '../components/StarBackground'

const STARS_SM = [
  { left: '83px', top: '407px' },
  { left: 'calc(50% + 47.5px)', top: '366px' },
]

const STARS_MD = [
  { left: 'calc(25% + 16.25px)', top: '380px' },
  { left: 'calc(25% + 24.25px)', top: '432px' },
  { left: 'calc(75% - 6.25px)', top: '380px' },
  { left: 'calc(50% + 70.5px)', top: '430px' },
]

export default function ChequeoSaludo1() {
  const navigate = useNavigate()

  return (
    <StarBackground glowSrc="/assets/glow-ellipse-magenta.svg">
      {/* Tooltip speech bubble */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: '220px', width: '227px' }}
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
            ¡Hola denuevo, soy tu llama ember!
          </p>
          {/* Triangle tail pointing down toward the drop */}
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

      {/* Shadow above drop (small ellipse) */}
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

      {/* Waterdrop glow halo */}
      <div
        className="absolute"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: '374px',
          width: '132.996px',
          height: '80.031px',
        }}
      >
        <div className="absolute" style={{ inset: '-123.43% -79.49%' }}>
          <img
            alt=""
            src="/assets/waterdrop-glow-magenta.svg"
            className="block size-full"
            style={{ maxWidth: 'none' }}
          />
        </div>
      </div>

      {/* Waterdrop logo — floating */}
      <img
        alt="Ember"
        src="/assets/waterdrop-magenta.svg"
        className="absolute"
        style={{
          left: '50%',
          top: '333px',
          width: '83.987px',
          height: '109.148px',
          animation: 'float 3s ease-in-out infinite',
        }}
      />

      {/* Shadow below drop (ellipse) */}
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

      {/* Decorative stars around drop */}
      {STARS_SM.map((pos, i) => (
        <img
          key={i}
          alt=""
          src="/assets/star-sm.svg"
          className="absolute"
          style={{ width: '6px', height: '7px', left: pos.left, top: pos.top }}
        />
      ))}
      {STARS_MD.map((pos, i) => (
        <img
          key={i}
          alt=""
          src="/assets/star-md.svg"
          className="absolute"
          style={{ width: '4px', height: '5px', left: pos.left, top: pos.top }}
        />
      ))}

      {/* Continuar button — white pill */}
      <button
        onClick={() => navigate('/chequeo/saludo-2')}
        className="absolute flex items-center justify-center rounded-full font-bold"
        style={{
          left: '24px',
          right: '24px',
          bottom: '60px',
          height: '47px',
          fontFamily: 'Montserrat, sans-serif',
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
