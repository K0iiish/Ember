import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import TabBar from '../components/TabBar'
import DesafioBottomSheet from '../components/DesafioBottomSheet'
import DesafioCompletadoModal from '../components/DesafioCompletadoModal'

const FONT = 'Montserrat, sans-serif'
const USER_PHOTO = '/assets/avatar-javier.png'

/* ── Day selector — only circleL needed; abbr/num center themselves ── */
const DAYS_BEFORE = [
  { abbr: 'Jue', num: 18, circleL: '29px'                },
  { abbr: 'Vie', num: 19, circleL: '76px'                },
  { abbr: 'Sáb', num: 20, circleL: 'calc(25% + 29.25px)' },
]
const DAYS_AFTER = [
  { abbr: 'Lun', num: 23, circleL: 'calc(50% + 29.5px)'  },
  { abbr: 'Mar', num: 24, circleL: 'calc(50% + 76.5px)'  },
  { abbr: 'Mié', num: 25, circleL: 'calc(75% + 29.75px)' },
]

const CHALLENGES = [
  {
    avatar: '/assets/avatar-dormir.svg',
    title: 'Dormir 7 hrs',
    left: 50, top: 406, progress: 0.22,
    subtitulo: 'Captura previa a dormir',
    description: '¡Para cumplir el desafío deberás dormir al menos 7 horas durante 5 noches consecutivas!',
    xp: '+20 XP', progressCurrent: '4', progressTotal: '5 noches', progressPct: 80,
  },
  {
    avatar: '/assets/avatar-comer.svg',
    title: 'Dieta saludable',
    left: 224, top: 406, progress: 0.15,
    subtitulo: 'Captura tu comida saludable',
    description: '¡Para cumplir el desafío deberás seguir tu plan de alimentación saludable durante 4 días seguidos!',
    xp: '+25 XP', progressCurrent: '2', progressTotal: '4 días', progressPct: 50,
  },
  {
    avatar: '/assets/avatar-hidratar.svg',
    title: 'Hidratarse',
    left: 136, top: 513, progress: 0.30,
    subtitulo: 'Captura tu vaso de agua',
    description: '¡Para cumplir el desafío deberás beber al menos 8 vasos de agua al día durante 5 días!',
    xp: '+15 XP', progressCurrent: '3', progressTotal: '5 días', progressPct: 60,
  },
  {
    avatar: '/assets/avatar-pausas.svg',
    title: 'Meditar',
    left: 50, top: 600, progress: 0.12,
    subtitulo: 'Captura tu sesión de meditación',
    description: '¡Para cumplir el desafío deberás completar 5 sesiones de meditación de 10 minutos!',
    xp: '+20 XP', progressCurrent: '1', progressTotal: '5 sesiones', progressPct: 20,
  },
  {
    avatar: '/assets/avatar-mover.svg',
    title: 'Caminata diaria',
    left: 224, top: 600, progress: 0.18,
    subtitulo: 'Captura tu caminata diaria',
    description: '¡Para cumplir el desafío deberás caminar 6.000 pasos diarios durante 4 días!',
    xp: '+30 XP', progressCurrent: '4.500', progressTotal: '6.000 pasos', progressPct: 75,
  },
]

const WEEKLY_FILL_PX = 209.645  // filled width of progress bar

/* ── Progress ring — strokeDashoffset for animation ── */
function ProgressCircle({ progress, mounted, animDelay }) {
  const SIZE = 96, R = 42
  const circ = 2 * Math.PI * R
  const targetOffset = circ * (1 - progress)
  return (
    <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`}
      style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
      <circle cx="48" cy="48" r="47" fill="rgba(0,0,0,0.28)" />
      <circle cx="48" cy="48" r={R} fill="none"
        stroke="#51fbea" strokeWidth="5" strokeLinecap="round"
        strokeDasharray={circ}
        strokeDashoffset={mounted ? targetOffset : circ}
        style={{ transition: `stroke-dashoffset 0.8s ease-out ${animDelay}s` }}
        transform="rotate(-90 48 48)"
      />
    </svg>
  )
}

/* ── Day circle — fully self-centering ── */
function DayCircle({ circleL, abbr, num }) {
  return (
    <>
      <p style={{
        position: 'absolute', left: circleL, top: '194px',
        width: '35px', textAlign: 'center',
        fontFamily: FONT, fontWeight: 500, fontSize: '13px',
        letterSpacing: '-0.2028px', color: 'white', lineHeight: 'normal',
        margin: 0, whiteSpace: 'nowrap',
      }}>{abbr}</p>
      <div style={{
        position: 'absolute', left: circleL, top: '213px',
        width: '35px', height: '35px', borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.07)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <p style={{
          fontFamily: FONT, fontWeight: 500, fontSize: '13px',
          letterSpacing: '-0.2028px', color: '#b1b0b4',
          textAlign: 'center', lineHeight: 'normal', margin: 0,
        }}>{num}</p>
      </div>
    </>
  )
}

export default function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  const [selectedDesafio, setSelectedDesafio] = useState(null)
  const [showInfo, setShowInfo] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [completadoModal, setCompletadoModal] = useState(() => {
    const s = location.state
    if (!s?.showCompletado) return null
    return { xp: s.xp ?? '+20 XP', titulo: s.titulo ?? '' }
  })

  useEffect(() => {
    if (location.state?.showCompletado) {
      navigate('/home', { replace: true, state: {} })
    }
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{
      position: 'relative',
      width: '100%', height: '844px',
      backgroundColor: '#19101b',
      overflow: 'hidden',
    }}>
      <style>{`
        @keyframes infoFadeIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* ── Background glow ── */}
      <div style={{
        position: 'absolute',
        width: '515.623px', height: '582.54px',
        left: '-74px', top: '-509px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ transform: 'rotate(5.78deg)', flexShrink: 0 }}>
          <div style={{ width: '463.775px', height: '538.602px', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-18.57% -21.56%' }}>
              <img alt="" src="/assets/glow-ellipse-magenta.svg"
                style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}

      <p style={{
        position: 'absolute', left: '24px', top: '60px',
        fontFamily: FONT, fontWeight: 700, fontSize: '25px',
        letterSpacing: '-0.39px', lineHeight: 'normal',
        color: 'white', whiteSpace: 'nowrap',
      }}>Hola javier12</p>

      {/* Stats pill */}
      <div style={{
        position: 'absolute',
        left: 'calc(50% + 20.5px)', top: '49px',
        width: '146px', height: '52px',
        backgroundColor: '#27272e',
        border: '1px solid #3c3c3c',
        borderRadius: '100px',
      }} />
      <img alt="" src="/assets/icon-fire.svg" style={{
        position: 'absolute',
        left: 'calc(50% + 35.5px)', top: '56px',
        width: '17px', height: '17px',
      }} />
      <p style={{
        position: 'absolute',
        left: 'calc(50% + 82.5px)', top: '57px',
        transform: 'translateX(-50%)',
        fontFamily: FONT, fontWeight: 500, fontSize: '12px',
        letterSpacing: '-0.1872px',
        color: 'white', textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal',
      }}>47 días</p>
      <img alt="" src="/assets/icon-star-xp.svg" style={{
        position: 'absolute',
        left: 'calc(50% + 36.5px)', top: '78px',
        width: '14px', height: '14px',
      }} />
      <p style={{
        position: 'absolute',
        left: 'calc(50% + 82px)', top: '77px',
        transform: 'translateX(-50%)',
        fontFamily: FONT, fontWeight: 500, fontSize: '12px',
        letterSpacing: '-0.1872px',
        color: 'white', textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal',
      }}>2500 XP</p>

      {/* User avatar — real photo, taps to profile */}
      <div
        onClick={() => navigate('/perfil')}
        style={{
          position: 'absolute',
          left: 'calc(75% + 20.75px)', top: '49px',
          width: '52px', height: '52px', borderRadius: '50%',
          border: '2px solid rgba(255,255,255,0.3)',
          overflow: 'hidden',
          boxSizing: 'border-box',
          cursor: 'pointer',
        }}
      >
        <img src={USER_PHOTO} alt="javier12"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* ── INSIGHT BANNER ── */}
      <div style={{
        position: 'absolute',
        left: '16px', top: '110px',
        width: '342px', height: '55px',
        backgroundColor: '#232429',
        border: '1px solid #434246',
        borderRadius: '10px',
        display: 'flex', alignItems: 'center',
        paddingLeft: '23px', paddingRight: '16px', gap: '14px',
        boxSizing: 'border-box',
      }}>
        <img alt="" src="/assets/icon-spark.svg" style={{ width: '30px', height: '31px', flexShrink: 0 }} />
        <p style={{
          fontFamily: FONT, fontWeight: 500, fontSize: '13px',
          color: 'white', lineHeight: '1.35', margin: 0,
        }}>
          {'Tu perfil indica que esta semana tu prioridad es la '}
          <span style={{ fontWeight: 600, color: '#3de5d3' }}>recuperación.</span>
        </p>
      </div>

      {/* ── DAY SELECTOR ── */}

      {DAYS_BEFORE.map((d) => <DayCircle key={d.abbr} {...d} />)}

      {/* Selected day: Dom 21 — white pill, flex-centered */}
      <div style={{
        position: 'absolute',
        left: 'calc(25% + 73.25px)', top: '171px',
        width: '41px', height: '68px',
        backgroundColor: 'white',
        borderRadius: '100px',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        gap: '4px',
      }}>
        <p style={{
          fontFamily: FONT, fontWeight: 500, fontSize: '13px',
          letterSpacing: '-0.2028px', color: 'black', lineHeight: 'normal', margin: 0,
        }}>Dom</p>
        <div style={{
          width: '35px', height: '35px', borderRadius: '50%',
          backgroundColor: '#1ad6cf',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: FONT, fontWeight: 500, fontSize: '13px',
            letterSpacing: '-0.2028px', color: 'white', lineHeight: 'normal', margin: 0,
          }}>21</p>
        </div>
      </div>

      {DAYS_AFTER.map((d) => <DayCircle key={d.abbr} {...d} />)}

      {/* Teal dot indicator — centered under the Dom 21 pill */}
      <div style={{
        position: 'absolute',
        left: 'calc(25% + 90.25px)', top: '242px',
        width: '7px', height: '7px', borderRadius: '50%',
        backgroundColor: '#51fbea',
      }} />

      {/* ── PROGRESS CARD ── */}
      <div style={{
        position: 'absolute',
        left: '17px', top: '265px',
        width: '342px', height: '61px',
        backgroundColor: '#22192d',
        borderRadius: '10px',
      }}>
        <div style={{
          position: 'absolute', left: '8px', top: '13px',
          width: '35px', height: '35px', borderRadius: '50%',
          backgroundColor: 'rgba(81,251,234,0.15)',
          border: '1.5px solid rgba(81,251,234,0.4)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <polyline points="2,14 7,8 11,12 18,4" stroke="#51fbea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <polyline points="13,4 18,4 18,9" stroke="#51fbea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p style={{
          position: 'absolute', left: '52px', top: '7px',
          fontFamily: FONT, fontWeight: 600, fontSize: '13px',
          color: 'white', lineHeight: 'normal', whiteSpace: 'nowrap',
        }}>Progreso semanal</p>
        <p style={{
          position: 'absolute', left: '53px', top: '43px',
          fontFamily: FONT, fontWeight: 400, fontSize: '11px',
          color: 'rgba(255,255,255,0.5)', lineHeight: 'normal', whiteSpace: 'nowrap',
        }}>2 de 5 desafíos completados</p>
        <img alt="" src="/assets/icon-star-xp.svg" style={{
          position: 'absolute', left: '263px', top: '6px',
          width: '17.94px', height: '17.94px',
        }} />
        <p style={{
          position: 'absolute', left: '280px', top: '7px',
          fontFamily: FONT, fontWeight: 500, fontSize: '13px',
          letterSpacing: '-0.2028px', color: 'white',
          whiteSpace: 'nowrap', lineHeight: 'normal',
        }}>+60 XP</p>
        {/* Animated progress bar */}
        <div style={{
          position: 'absolute', left: '53px', top: '29px',
          width: '276px', height: '7.55px', borderRadius: '100px',
          backgroundColor: '#2d6263', overflow: 'hidden',
        }}>
          <div style={{
            width: mounted ? `${WEEKLY_FILL_PX}px` : '0px',
            height: '100%', borderRadius: '100px', backgroundColor: '#51fbea',
            transition: 'width 0.9s ease-out 0.1s',
          }} />
        </div>
      </div>

      {/* ── CHALLENGES CARD ── */}
      <div style={{
        position: 'absolute',
        left: '17px', top: '343px',
        width: '342px', height: '444px',
        borderRadius: '10px',
        background: 'linear-gradient(to bottom, rgba(19,185,169,0.88) 15.865%, rgba(25,16,27,0.88) 85.577%)',
        overflow: 'hidden',
      }}>
        <p style={{
          position: 'absolute', left: '50%', top: '14px',
          transform: 'translateX(-50%)',
          fontFamily: FONT, fontWeight: 700, fontSize: '16px',
          color: 'white', textAlign: 'center', whiteSpace: 'nowrap', lineHeight: 'normal',
        }}>Desafíos de hoy</p>
        <p style={{
          position: 'absolute', left: 0, right: 0, top: '38px',
          fontFamily: FONT, fontWeight: 500, fontSize: '12px',
          color: 'white', textAlign: 'center', lineHeight: 'normal',
        }}>Avanza en tus metas de hoy</p>
        <button
          onClick={() => setShowInfo(v => !v)}
          style={{
            position: 'absolute', right: '14px', top: '12px',
            width: '24px', height: '24px', borderRadius: '50%',
            border: `1.5px solid ${showInfo ? '#51fbea' : 'rgba(255,255,255,0.6)'}`,
            background: showInfo ? 'rgba(81,251,234,0.15)' : 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', padding: 0,
            transition: 'border-color 0.2s, background 0.2s',
          }}
        >
          <p style={{ fontFamily: FONT, fontWeight: 700, fontSize: '13px', color: showInfo ? '#51fbea' : 'rgba(255,255,255,0.8)', lineHeight: 1, margin: 0, transition: 'color 0.2s' }}>i</p>
        </button>

        {/* Challenge items */}
        {CHALLENGES.map(({ avatar, title, left, top, progress, subtitulo, description, xp, progressCurrent, progressTotal, progressPct }, idx) => {
          const cardRelTop = top - 343
          const cardRelLeft = left - 17
          const detail = { title, subtitulo, description, xp, progressCurrent, progressTotal, progressPct }
          const animDelay = 0.2 + idx * 0.15
          return (
            <div key={title}>
              <div
                onClick={() => setSelectedDesafio(detail)}
                style={{
                  position: 'absolute',
                  left: `${cardRelLeft}px`, top: `${cardRelTop}px`,
                  width: '96px', height: '96px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
              >
                <ProgressCircle progress={progress} mounted={mounted} animDelay={animDelay} />
                {/* Dark bg circle — fills ring interior leaving ~3.5px gap from ring inner edge */}
                <div style={{
                  position: 'absolute',
                  left: '12px', top: '12px',
                  width: '72px', height: '72px',
                  borderRadius: '50%',
                  backgroundColor: '#19101b',
                  overflow: 'hidden',
                }}>
                  <img alt="" src={avatar} style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }} />
                </div>
              </div>
              <p
                onClick={() => setSelectedDesafio(detail)}
                style={{
                  position: 'absolute',
                  left: `${cardRelLeft - 2}px`, top: `${cardRelTop + 100}px`,
                  width: '100px',
                  fontFamily: FONT, fontWeight: 600, fontSize: '12px',
                  letterSpacing: '-0.1872px', color: 'white',
                  textAlign: 'center', lineHeight: 'normal',
                  cursor: 'pointer',
                }}
              >{title}</p>
            </div>
          )
        })}
      </div>

      {/* ── INFO TOOLTIP ── */}
      {showInfo && (
        <>
          {/* Backdrop — cierra el tooltip al tocar fuera */}
          <div
            onClick={() => setShowInfo(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 99 }}
          />
          {/* Tooltip — alineado a la derecha, cerca del botón "i" */}
          <div style={{
            position: 'absolute',
            right: '19px',
            top: '410px',
            width: '276px',
            backgroundColor: 'rgba(18, 9, 24, 0.97)',
            border: '1px solid rgba(81,251,234,0.25)',
            borderRadius: '12px',
            padding: '14px 16px',
            zIndex: 100,
            animation: 'infoFadeIn 0.2s ease-out',
            boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
          }}>
            {/* Arrow apuntando al botón "i" (alineada a la derecha del tooltip) */}
            <div style={{
              position: 'absolute', right: '20px', top: '-7px',
              width: 0, height: 0,
              borderLeft: '7px solid transparent',
              borderRight: '7px solid transparent',
              borderBottom: '7px solid rgba(81,251,234,0.25)',
            }} />
            <div style={{
              position: 'absolute', right: '21px', top: '-5.5px',
              width: 0, height: 0,
              borderLeft: '6px solid transparent',
              borderRight: '6px solid transparent',
              borderBottom: '6px solid rgba(18,9,24,0.97)',
            }} />
            <p style={{
              fontFamily: FONT, fontWeight: 500, fontSize: '13px',
              color: 'rgba(255,255,255,0.8)', lineHeight: '1.55', margin: 0,
            }}>
              Cada semana recibirás{' '}
              <span style={{ fontWeight: 700, color: '#51fbea' }}>5 desafíos distintos</span>
              {' '}personalizados según tus hábitos y objetivos.
              {' '}¡Complétalos todos para maximizar tu XP!
            </p>
          </div>
        </>
      )}

      {/* ── TAB BAR ── */}
      <TabBar />

      {/* ── DESAFÍO BOTTOM SHEET ── */}
      <DesafioBottomSheet
        desafio={selectedDesafio}
        onClose={() => setSelectedDesafio(null)}
      />

      {/* ── DESAFÍO COMPLETADO MODAL ── */}
      <DesafioCompletadoModal
        open={!!completadoModal}
        onClose={() => setCompletadoModal(null)}
        xp={completadoModal?.xp}
        titulo={completadoModal?.titulo}
      />
    </div>
  )
}
