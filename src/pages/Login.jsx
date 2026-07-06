import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'

// Same star positions as CrearCuenta (node 955:4601 shares identical star layout)
const STARS_SM = [
  { left: 'calc(25% + 29.25px)', top: '44px' },
  { left: 'calc(50% + 21.5px)',  top: '133px' },
  { left: 'calc(75% + 5.75px)',  top: '110px' },
  { left: 'calc(25% + 26.25px)', top: '84px' },
  { left: 'calc(50% + 15.5px)',  top: '204px' },
  { left: 'calc(75% + 3.75px)',  top: '157px' },
  { left: 'calc(50% + 78.5px)',  top: '136px' },
]
const STARS_LG = [
  { left: 'calc(25% + 72.25px)', top: '74px' },
  { left: 'calc(50% + 52.5px)',  top: '79px' },
]
const STARS_MD = [
  { left: 'calc(50% + 24.5px)',  top: '96px' },
  { left: 'calc(50% + 9.5px)',   top: '164px' },
  { left: 'calc(50% + 33.5px)',  top: '175px' },
  { left: 'calc(75% + 11.75px)', top: '184px' },
]

function IconEmail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4" width="20" height="16" rx="2"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M22 7l-10 7L2 7"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function IconLock() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="11" width="18" height="11" rx="2"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 11V7a5 5 0 0110 0v4"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EyeOff() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function EyeOpen() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [showPass, setShowPass] = useState(false)

  const isActive = email.trim().length > 0 && password.length > 0

  const iconColor = (filled) => filled ? '#1ad6cf' : '#b3b3b3'

  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">
      <style>{`
        .login-input::placeholder { color: #b3b3b3; opacity: 1; }
        .login-input { caret-color: #1ad6cf; }
      `}</style>

      {/* Magenta background glow */}
      <div className="absolute" style={{ left: '-73px', top: '-433px', width: '535.727px', height: '548.103px' }}>
        <div style={{ transform: 'rotate(-2.84deg)' }}>
          <div className="relative" style={{ width: '510.389px', height: '523.428px' }}>
            <div className="absolute" style={{ inset: '-19.1% -19.59%' }}>
              <img alt="" src="/assets/glow-ellipse-magenta.svg" className="block size-full" style={{ maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Stars — small 6×7 */}
      {STARS_SM.map((pos, i) => (
        <img key={`sm${i}`} alt="" src="/assets/star-sm.svg" className="absolute"
          style={{ width: '6px', height: '7px', left: pos.left, top: pos.top }} />
      ))}
      {/* Stars — large 9×10 */}
      {STARS_LG.map((pos, i) => (
        <img key={`lg${i}`} alt="" src="/assets/star-lg.svg" className="absolute"
          style={{ width: '9px', height: '10px', left: pos.left, top: pos.top }} />
      ))}
      {/* Stars — medium 4×5 */}
      {STARS_MD.map((pos, i) => (
        <img key={`md${i}`} alt="" src="/assets/star-md.svg" className="absolute"
          style={{ width: '4px', height: '5px', left: pos.left, top: pos.top }} />
      ))}

      {/* Back arrow */}
      <button
        onClick={() => navigate(-1)}
        className="absolute flex items-center justify-center"
        style={{ top: '56px', left: '22px', width: '40px', height: '40px' }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18l-6-6 6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Teal water drop glow halo */}
      <div className="absolute" style={{ left: 'calc(50% + 0.5px)', top: '121px', width: '142.848px', height: '145.996px' }}>
        <div className="absolute" style={{ inset: '-73.16% -75.03%' }}>
          <img alt="" src="/assets/waterdrop-glow.svg" className="block size-full" style={{ maxWidth: 'none' }} />
        </div>
      </div>

      {/* Teal water drop */}
      <img
        alt=""
        src="/assets/waterdrop.svg"
        className="absolute"
        style={{ left: 'calc(50% + 37.5px)', top: '170px', width: '68.483px', height: '89px' }}
      />

      {/* Title "Iniciar\nsesión" */}
      <p className="absolute text-white" style={{
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: '38px',
        letterSpacing: '-1.52px',
        lineHeight: '1.25',
        top: '169px',
        left: '30px',
      }}>
        Iniciar <br />sesión
      </p>

      {/* ── Campo: Correo ── */}
      <div
        className="absolute flex items-center"
        style={{
          top: '316px', left: '18px', right: '18px', height: '56px',
          backgroundColor: '#251b31', borderRadius: '13px',
          border: `1.5px solid ${email.length > 0 ? '#1ad6cf' : 'transparent'}`,
        }}
      >
        <span className="absolute left-4" style={{ color: iconColor(email.length > 0) }}>
          <IconEmail />
        </span>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Ingresa tu correo"
          autoComplete="email"
          className="login-input w-full h-full bg-transparent focus:outline-none text-white"
          style={{ fontFamily: FONT, fontSize: '14px', paddingLeft: '44px', paddingRight: '16px' }}
        />
      </div>

      {/* ── Campo: Contraseña ── */}
      <div
        className="absolute flex items-center"
        style={{
          top: '401px', left: '18px', right: '18px', height: '56px',
          backgroundColor: '#251b31', borderRadius: '13px',
          border: `1.5px solid ${password.length > 0 ? '#1ad6cf' : 'transparent'}`,
        }}
      >
        <span className="absolute left-4" style={{ color: iconColor(password.length > 0) }}>
          <IconLock />
        </span>
        <input
          type={showPass ? 'text' : 'password'}
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Contraseña"
          autoComplete="current-password"
          className="login-input w-full h-full bg-transparent focus:outline-none text-white"
          style={{ fontFamily: FONT, fontSize: '14px', paddingLeft: '44px', paddingRight: '48px' }}
        />
        <button
          type="button"
          onClick={() => setShowPass(v => !v)}
          className="absolute right-4"
          style={{ color: '#b3b3b3' }}
        >
          {showPass ? <EyeOpen /> : <EyeOff />}
        </button>
      </div>

      {/* ¿Olvidaste tu contraseña? */}
      <p
        className="absolute"
        style={{
          fontFamily: FONT, fontSize: '14px', fontWeight: 500,
          color: 'rgba(255,255,255,0.7)', letterSpacing: '-0.28px',
          top: '475px', right: '18px',
          cursor: 'pointer',
        }}
      >
        ¿Olvidaste tu contraseña?
      </p>

      {/* ── Botón Iniciar sesión ── */}
      <button
        onClick={() => { if (isActive) navigate('/onboarding/saludo-1') }}
        className="absolute flex items-center justify-center rounded-full font-semibold"
        style={{
          left: '18px', right: '18px', top: '579px', height: '56px',
          fontFamily: FONT, fontSize: '16px', letterSpacing: '-0.32px',
          backgroundColor: isActive ? '#1ad6cf' : 'rgba(81,251,234,0.43)',
          color: isActive ? '#19101b' : 'rgba(255,255,255,0.5)',
          cursor: isActive ? 'pointer' : 'default',
        }}
      >
        Iniciar sesión
      </button>

      {/* ── Texto inferior ── */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center whitespace-nowrap"
        style={{ fontFamily: FONT, fontSize: '16px', letterSpacing: '-0.16px', top: '669px' }}
      >
        <span style={{ color: '#acadb9', fontWeight: 500 }}>¿No tienes una cuenta? </span>
        <span
          onClick={() => navigate('/crear-cuenta')}
          style={{ color: 'white', fontWeight: 600, cursor: 'pointer' }}
        >Registrate</span>
      </p>

      {/* Home indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white"
        style={{ bottom: '8px', width: '134px', height: '5px' }}
      />
    </div>
  )
}
