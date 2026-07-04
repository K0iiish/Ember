import { useNavigate } from 'react-router-dom'
import StarBackground from '../components/StarBackground'

const FONT = 'Montserrat, sans-serif'

const STARS_SM = [
  { left: 'calc(25% + 28.25px)', top: '74px' },
]
const STARS_MD = [
  { left: 'calc(50% + 21.5px)', top: '77px' },
  { left: 'calc(50% + 71.5px)', top: '61px' },
]
const STARS_LG = [
  { left: 'calc(25% + 75.25px)', top: '51px' },
  { left: 'calc(50% - 6.5px)',   top: '95px' },
]

const CHALLENGES = [
  { icon: '/assets/challenge-dormir.svg',   title: 'Dormir 7 hrs',    desc: 'Duerme más de 7 horas diarias.',         xp: '+60 XP', top: 282 },
  { icon: '/assets/challenge-dieta.svg',    title: 'Dieta saludable', desc: 'Incluye un platillo saludable diario.',   xp: '+50 XP', top: 358 },
  { icon: '/assets/challenge-hidratar.svg', title: 'Hidratarse',      desc: 'Bebe al menos 2 litros de agua al día.', xp: '+50 XP', top: 434 },
  { icon: '/assets/challenge-caminata.svg', title: 'Caminata diaria', desc: 'Camina 6.000 pasos durante 4 días.',     xp: '+30 XP', top: 510 },
  { icon: '/assets/challenge-meditar.svg',  title: 'Meditar 20 min',  desc: 'Medita 3 veces durante 20 minutos.',     xp: '+30 XP', top: 586 },
]

export default function Resultado() {
  const navigate = useNavigate()

  return (
    <StarBackground glowSrc="/assets/glow-ellipse-magenta.svg">
      <style>{`
        @keyframes cascadeIn {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Stars */}
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

      {/* Waterdrop glow */}
      <div
        className="absolute"
        style={{
          left: 'calc(50% - 0.37px)',
          transform: 'translateX(-50%)',
          top: '110.74px',
          width: '64.629px',
          height: '66.258px',
        }}
      >
        <div className="absolute" style={{ inset: '-151.92% -155.8%' }}>
          <img alt="" src="/assets/waterdrop-glow-magenta.svg"
            className="block size-full" style={{ maxWidth: 'none' }} />
        </div>
      </div>

      {/* Small waterdrop */}
      <img
        alt="Ember"
        src="/assets/waterdrop-magenta.svg"
        className="absolute"
        style={{
          left: 'calc(25% + 76.25px)',
          top: '127.6px',
          width: '34.672px',
          height: '45.06px',
          animation: 'floatY 3s ease-in-out infinite',
        }}
      />

      {/* Title */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center text-white whitespace-nowrap"
        style={{
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
          letterSpacing: '-0.3744px',
          top: '183px',
        }}
      >
        Tu desafío semanal
      </p>

      {/* Subtitle */}
      <p
        className="absolute left-1/2 -translate-x-1/2 text-center"
        style={{
          fontFamily: FONT,
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: 'normal',
          color: 'rgba(255,255,255,0.8)',
          top: '216px',
          width: '331px',
        }}
      >
        Estos desafíos fueron personalizados según tus respuestas actualizadas.
      </p>

      {/* Challenge cards — cascade in */}
      {CHALLENGES.map(({ icon, title, desc, xp, top }, idx) => (
        <div
          key={title}
          style={{
            position: 'absolute',
            left: '16px',
            top: `${top}px`,
            opacity: 0,
            animation: `cascadeIn 0.45s ease-out forwards`,
            animationDelay: `${0.1 + idx * 0.15}s`,
          }}
        >
          {/* Card pill */}
          <div style={{
            position: 'absolute',
            left: '1px',
            top: '0px',
            width: '342px',
            height: '56px',
            backgroundColor: '#22192d',
            borderRadius: '40px',
            display: 'flex',
            alignItems: 'flex-start',
            paddingLeft: '68px',
            paddingRight: '16px',
            paddingTop: '9px',
            boxSizing: 'border-box',
            gap: '6px',
          }}>
            {/* Text block */}
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: FONT, fontWeight: 600, fontSize: '14px',
                lineHeight: 'normal', color: '#fff', margin: 0,
                whiteSpace: 'nowrap',
              }}>
                {title}
              </p>
              <p style={{
                fontFamily: FONT, fontWeight: 400, fontSize: '13px',
                lineHeight: 'normal', color: '#fff', margin: '3px 0 0',
                whiteSpace: 'nowrap',
              }}>
                {desc}
              </p>
            </div>

            {/* XP badge */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              flexShrink: 0,
            }}>
              <img alt="" src="/assets/icon-star-xp.svg"
                style={{ width: '17.94px', height: '17.94px', flexShrink: 0 }} />
              <p style={{
                fontFamily: FONT, fontWeight: 500, fontSize: '13px',
                lineHeight: 'normal', letterSpacing: '-0.2028px',
                color: '#fff', margin: 0, whiteSpace: 'nowrap',
              }}>
                {xp}
              </p>
            </div>
          </div>

          {/* Avatar circle */}
          <div style={{
            position: 'absolute',
            left: '0px',
            top: '1px',
            width: '55px',
            height: '55px',
            borderRadius: '50%',
            border: '2px solid white',
            backgroundColor: '#2d1a3d',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            boxSizing: 'border-box',
          }}>
            <img
              alt=""
              src={icon}
              style={{ width: '44px', height: '44px', objectFit: 'contain' }}
            />
          </div>
        </div>
      ))}

      {/* "Empezemos" button — appears last */}
      <button
        onClick={() => navigate('/home')}
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: '42px',
          top: '696px',
          width: '292px',
          height: '47px',
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          backgroundColor: '#1ad6cf',
          color: '#19101b',
          opacity: 0,
          animation: 'cascadeIn 0.45s ease-out forwards',
          animationDelay: `${0.1 + CHALLENGES.length * 0.15}s`,
        }}
      >
        Empezemos
      </button>
    </StarBackground>
  )
}
