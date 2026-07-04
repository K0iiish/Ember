import { useNavigate } from 'react-router-dom'

const STARS_SM = [
  { left: 'calc(50% + 11.5px)', top: '140px' },
  { left: 'calc(25% + 28.25px)', top: '74px' },
  { left: 'calc(25% + 14.25px)', top: '192px' },
  { left: 'calc(50% + 11.5px)', top: '236px' },
  { left: 'calc(75% - 4.25px)', top: '213px' },
  { left: '83px', top: '390px' },
  { left: 'calc(50% + 47.5px)', top: '349px' },
  { left: 'calc(25% + 61.25px)', top: '310px' },
  { left: 'calc(50% + 5.5px)', top: '288px' },
  { left: 'calc(25% + 45.25px)', top: '276px' },
]

const STARS_MD = [
  { left: 'calc(50% + 21.5px)', top: '77px' },
  { left: 'calc(50% + 71.5px)', top: '61px' },
  { left: 'calc(25% + 15.25px)', top: '126px' },
  { left: 'calc(50% + 31.5px)', top: '194px' },
  { left: '86px', top: '338px' },
  { left: 'calc(25% + 16.25px)', top: '363px' },
  { left: 'calc(25% + 24.25px)', top: '415px' },
  { left: 'calc(75% - 6.25px)', top: '363px' },
  { left: 'calc(50% + 70.5px)', top: '413px' },
]

const STARS_LG = [
  { left: 'calc(50% - 6.5px)', top: '95px' },
  { left: 'calc(25% + 61.25px)', top: '182px' },
  { left: 'calc(50% + 42.5px)', top: '182px' },
  { left: 'calc(50% - 4.5px)', top: '342px' },
  { left: 'calc(50% + 52.5px)', top: '278px' },
]

export default function Welcome() {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-screen items-center justify-center bg-black">
      <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">
        {/* Background glow — two overlapping teal ellipses */}
        {['-489px', '-422px'].map((top, i) => (
          <div
            key={i}
            className="absolute flex items-center justify-center"
            style={{ width: '591.646px', height: '590.23px', left: '-108px', top }}
          >
            <div style={{ transform: 'rotate(5.78deg)', flexShrink: 0 }}>
              <div className="relative" style={{ width: '540.186px', height: '538.602px' }}>
                <div className="absolute" style={{ inset: '-18.57% -18.51%' }}>
                  <img
                    alt=""
                    src="/assets/glow-ellipse.svg"
                    className="block size-full"
                    style={{ maxWidth: 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

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

        {STARS_LG.map((pos, i) => (
          <img
            key={i}
            alt=""
            src="/assets/star-lg.svg"
            className="absolute"
            style={{ width: '9px', height: '10px', left: pos.left, top: pos.top }}
          />
        ))}

        {/* Water drop glow halo */}
        <div
          className="absolute"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            top: '359px',
            width: '132.996px',
            height: '80.031px',
          }}
        >
          <div className="absolute" style={{ inset: '-123.43% -79.49%' }}>
            <img
              alt=""
              src="/assets/waterdrop-glow.svg"
              className="block size-full"
              style={{ maxWidth: 'none' }}
            />
          </div>
        </div>

        {/* Shadow below drop */}
        <div
          className="absolute flex items-center justify-center"
          style={{
            left: 'calc(50% + 0.76px)',
            top: '380.34px',
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

        {/* Water drop logo */}
        <img
          alt="Ember logo"
          src="/assets/waterdrop.svg"
          className="absolute"
          style={{
            left: 'calc(25% + 52.25px)',
            top: '317px',
            width: '83.987px',
            height: '109.148px',
          }}
        />

        {/* App name */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-center text-white font-semibold whitespace-nowrap"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '60px',
            top: 'calc(50% + 53px)',
            letterSpacing: '-0.936px',
            lineHeight: 'normal',
          }}
        >
          Ember
        </p>

        {/* Tagline */}
        <p
          className="absolute left-1/2 -translate-x-1/2 text-center text-white font-medium whitespace-nowrap"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '14px',
            top: 'calc(50% + 119px)',
            letterSpacing: '-0.2184px',
            lineHeight: 'normal',
          }}
        >
          Rinde mejor. Responde mejor.
        </p>

        {/* Primary CTA — Crear cuenta */}
        <button
          onClick={() => navigate('/onboarding/saludo-1')}
          className="absolute flex items-center justify-center rounded-full bg-[#1ad6cf] text-[#19101b] font-semibold"
          style={{
            left: '25px',
            top: '626px',
            width: '327px',
            height: '56px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          Crear cuenta
        </button>

        {/* Secondary CTA — Ya tengo una cuenta */}
        <button
          onClick={() => navigate('/login')}
          className="absolute flex items-center justify-center rounded-full border-2 border-[#675973] text-white font-semibold"
          style={{
            left: '25px',
            top: '701px',
            width: '327px',
            height: '56px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '16px',
            lineHeight: '24px',
          }}
        >
          Ya tengo una cuenta
        </button>
      </div>
    </div>
  )
}
