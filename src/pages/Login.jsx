import { useState } from 'react'
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

function IconEmail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 7l-10 7L2 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EyeOpen() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function EyeOff() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const isActive = email.trim().length > 0 && password.length > 0

  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-8px); }
        }
      `}</style>

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

      {/* Stars — small */}
      {STARS_SM.map((pos, i) => (
        <img key={i} alt="" src="/assets/star-sm.svg" className="absolute"
          style={{ width: '6px', height: '7px', left: pos.left, top: pos.top }} />
      ))}

      {/* Stars — medium */}
      {STARS_MD.map((pos, i) => (
        <img key={i} alt="" src="/assets/star-md.svg" className="absolute"
          style={{ width: '4px', height: '5px', left: pos.left, top: pos.top }} />
      ))}

      {/* Stars — large */}
      {STARS_LG.map((pos, i) => (
        <img key={i} alt="" src="/assets/star-lg.svg" className="absolute"
          style={{ width: '9px', height: '10px', left: pos.left, top: pos.top }} />
      ))}

      {/* Back arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute flex items-center justify-center text-white"
        style={{ top: '56px', left: '24px', width: '40px', height: '40px' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Waterdrop glow halo */}
      <div
        className="absolute"
        style={{
          left: '50%',
          transform: 'translateX(-50%)',
          top: '124px',
          width: '99.747px',
          height: '60.023px',
        }}
      >
        <div className="absolute" style={{ inset: '-123.43% -79.49%' }}>
          <img alt="" src="/assets/waterdrop-glow.svg" className="block size-full" style={{ maxWidth: 'none' }} />
        </div>
      </div>

      {/* Shadow below drop */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 'calc(50% + 0.76px)',
          top: '141.26px',
          width: '23.645px',
          height: '2.744px',
          transform: 'translateX(-50%)',
        }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img alt="" src="/assets/shadow-ellipse.svg"
            style={{ width: '23.628px', height: '2.584px', display: 'block' }} />
        </div>
      </div>

      {/* Waterdrop logo — floating animation */}
      <img
        alt="Ember logo"
        src="/assets/waterdrop.svg"
        className="absolute"
        style={{
          left: '50%',
          top: '96px',
          width: '62.99px',
          height: '81.861px',
          animation: 'float 3s ease-in-out infinite',
        }}
      />

      {/* Screen title */}
      <p
        className="absolute font-bold text-white"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '28px',
          letterSpacing: '-0.5px',
          lineHeight: '1.2',
          top: '210px',
          left: '24px',
        }}
      >
        Iniciar sesión
      </p>

      {/* Subtitle */}
      <p
        className="absolute"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          color: '#675973',
          top: '252px',
          left: '24px',
        }}
      >
        Ingresa tus datos para continuar
      </p>

      {/* Email label */}
      <p
        className="absolute text-white font-semibold"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          top: '314px',
          left: '24px',
        }}
      >
        Correo electrónico
      </p>

      {/* Email input */}
      <div
        className="absolute flex items-center rounded-2xl transition-colors"
        style={{
          top: '340px',
          left: '24px',
          width: '327px',
          height: '56px',
          border: `1.5px solid ${email.length > 0 ? '#1ad6cf' : '#675973'}`,
          backgroundColor: 'rgba(45, 30, 53, 0.4)',
        }}
      >
        <span className="absolute left-4" style={{ color: email.length > 0 ? '#1ad6cf' : '#675973' }}>
          <IconEmail />
        </span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
          autoComplete="email"
          className="w-full h-full bg-transparent text-white focus:outline-none"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            paddingLeft: '44px',
            paddingRight: '16px',
            color: 'white',
          }}
        />
      </div>

      {/* Password label */}
      <p
        className="absolute text-white font-semibold"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px',
          top: '420px',
          left: '24px',
        }}
      >
        Contraseña
      </p>

      {/* Password input */}
      <div
        className="absolute flex items-center rounded-2xl transition-colors"
        style={{
          top: '446px',
          left: '24px',
          width: '327px',
          height: '56px',
          border: `1.5px solid ${password.length > 0 ? '#1ad6cf' : '#675973'}`,
          backgroundColor: 'rgba(45, 30, 53, 0.4)',
        }}
      >
        <span className="absolute left-4" style={{ color: password.length > 0 ? '#1ad6cf' : '#675973' }}>
          <IconLock />
        </span>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contraseña"
          autoComplete="current-password"
          className="w-full h-full bg-transparent text-white focus:outline-none"
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '15px',
            paddingLeft: '44px',
            paddingRight: '48px',
            color: 'white',
          }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(v => !v)}
          className="absolute right-4"
          style={{ color: '#675973' }}
        >
          {showPassword ? <EyeOff /> : <EyeOpen />}
        </button>
      </div>

      {/* Iniciar sesión button */}
      <button
        onClick={() => { if (isActive) navigate('/onboarding/saludo-1') }}
        className="absolute flex items-center justify-center rounded-full font-semibold transition-colors"
        style={{
          left: '24px',
          top: '626px',
          width: '327px',
          height: '56px',
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          lineHeight: '24px',
          backgroundColor: isActive ? '#1ad6cf' : '#2d1e35',
          color: isActive ? '#19101b' : '#675973',
        }}
      >
        Iniciar sesión
      </button>
    </div>
  )
}
