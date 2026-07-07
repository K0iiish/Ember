import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'

// Stars — top cluster (Figma node 768:24557–24561)
const STARS_TOP_SM = [{ left: 'calc(25% + 28.25px)', top: '74px' }]
const STARS_TOP_LG = [
  { left: 'calc(25% + 75.25px)', top: '51px' },
  { left: 'calc(50% - 6.5px)',   top: '95px' },
]
const STARS_TOP_MD = [
  { left: 'calc(50% + 21.5px)', top: '77px' },
  { left: 'calc(50% + 71.5px)', top: '61px' },
]

// Stars — bottom cluster around health icons (Figma node 768:24571–24577)
const STARS_BOT_SM = [
  { left: 'calc(25% - 3.75px)',  top: '456px' },
  { left: 'calc(50% + 18.5px)',  top: '446px' },
]
const STARS_BOT_LG = [
  { left: 'calc(25% + 43.25px)', top: '433px' },
  { left: 'calc(50% - 4.5px)',   top: '480px' },
  { left: 'calc(50% + 46.5px)',  top: '417px' },
]
const STARS_BOT_MD = [
  { left: 'calc(25% + 83.25px)', top: '459px' },
  { left: 'calc(50% + 55.5px)',  top: '373px' },
]

// Apple Health icon (center, elevated — image 177 in Figma)
function IcoAppleHealth() {
  return (
    <div style={{
      width: 77, height: 77, borderRadius: 20, overflow: 'hidden',
      boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    }}>
      <img alt="Apple Health" src="/assets/icon-apple-health.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

// Google Fit icon (left — image 179 in Figma)
function IcoGoogleFit() {
  return (
    <div style={{
      width: 73, height: 73, borderRadius: 15, overflow: 'hidden',
      boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    }}>
      <img alt="Google Fit" src="/assets/icon-google-fit.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

// Garmin Connect icon (right — image 181 in Figma)
function IcoGarmin() {
  return (
    <div style={{
      width: 72, height: 72, borderRadius: 20, overflow: 'hidden',
      boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
    }}>
      <img alt="Garmin Connect" src="/assets/icon-garmin.png" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

export default function ConectarSalud() {
  const navigate = useNavigate()
  const [syncing, setSyncing] = useState(false)

  const goNext = () => navigate('/ember/habla-1')

  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">

      {/* Teal glow — top left (Figma node 768:24554) */}
      <div className="absolute" style={{ left: '-108.32px', top: '-475px', width: '591.646px', height: '590.23px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(5.78deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '540.186px', height: '538.602px' }}>
            <div style={{ position: 'absolute', inset: '-18.57% -18.51%' }}>
              <img alt="" src="/assets/glow-ellipse.svg" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Teal glow — top center (Figma node 768:24555) */}
      <div className="absolute" style={{ left: 'calc(50% + 0.12px)', top: '-475px', width: '591.646px', height: '590.23px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(5.78deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '540.186px', height: '538.602px' }}>
            <div style={{ position: 'absolute', inset: '-18.57% -18.51%' }}>
              <img alt="" src="/assets/glow-ellipse.svg" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow ellipse (Figma node 768:24556) */}
      <div className="absolute" style={{ left: 'calc(50% + 0.17px)', top: '335px', width: '235.337px', height: '234.698px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(177.77deg)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '226.703px', height: '226.038px' }}>
            <div style={{ position: 'absolute', inset: '-44.24% -44.11%' }}>
              <img alt="" src="/assets/glow-ellipse.svg" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Stars — top cluster */}
      {STARS_TOP_SM.map((p, i) => (
        <img key={`tsm${i}`} alt="" src="/assets/star-sm.svg" className="absolute" style={{ width: '6px', height: '7px', left: p.left, top: p.top }} />
      ))}
      {STARS_TOP_LG.map((p, i) => (
        <img key={`tlg${i}`} alt="" src="/assets/star-lg.svg" className="absolute" style={{ width: '9px', height: '10px', left: p.left, top: p.top }} />
      ))}
      {STARS_TOP_MD.map((p, i) => (
        <img key={`tmd${i}`} alt="" src="/assets/star-md.svg" className="absolute" style={{ width: '4px', height: '5px', left: p.left, top: p.top }} />
      ))}

      {/* Stars — bottom cluster */}
      {STARS_BOT_SM.map((p, i) => (
        <img key={`bsm${i}`} alt="" src="/assets/star-sm.svg" className="absolute" style={{ width: '6px', height: '7px', left: p.left, top: p.top }} />
      ))}
      {STARS_BOT_LG.map((p, i) => (
        <img key={`blg${i}`} alt="" src="/assets/star-lg.svg" className="absolute" style={{ width: '9px', height: '10px', left: p.left, top: p.top }} />
      ))}
      {STARS_BOT_MD.map((p, i) => (
        <img key={`bmd${i}`} alt="" src="/assets/star-md.svg" className="absolute" style={{ width: '4px', height: '5px', left: p.left, top: p.top }} />
      ))}

      {/* Waterdrop glow halo (Figma node 768:24589) */}
      <div className="absolute" style={{ left: 'calc(50% - 0.37px)', top: '110.74px', width: '64.629px', height: '66.258px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(-179.61deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <div style={{ position: 'relative', width: '64.184px', height: '65.824px' }}>
            <div style={{ position: 'absolute', inset: '-151.92% -155.8%' }}>
              <img alt="" src="/assets/waterdrop-glow.svg" style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Waterdrop shadow (Figma node 768:24590) */}
      <div className="absolute" style={{ left: 'calc(50% + 0.11px)', top: '173px', width: '16.818px', height: '3.558px', transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ transform: 'rotate(-179.61deg)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%' }}>
          <div style={{ position: 'relative', width: '16.795px', height: '3.445px' }}>
            <img alt="" src="/assets/shadow-ellipse.svg" style={{ position: 'absolute', display: 'block', inset: 0, width: '100%', height: '100%', maxWidth: 'none' }} />
          </div>
        </div>
      </div>

      {/* Waterdrop (Figma node 768:24591) */}
      <img
        alt=""
        src="/assets/waterdrop.svg"
        className="absolute"
        style={{ left: 'calc(25% + 76.25px)', top: '127.6px', width: '34.672px', height: '45.06px' }}
      />

      {/* Title (Figma node 768:24563) */}
      <p className="absolute text-white text-center whitespace-nowrap" style={{
        fontFamily: FONT,
        fontWeight: 700,
        fontSize: '24px',
        letterSpacing: '-0.3744px',
        lineHeight: 'normal',
        left: 'calc(50% - 6px)',
        top: '205px',
        transform: 'translateX(-50%)',
        margin: 0,
      }}>
        Sincroniza tu salud
      </p>

      {/* Subtitle (Figma node 768:24562) */}
      <p className="absolute text-center" style={{
        fontFamily: FONT,
        fontWeight: 500,
        fontSize: '15px',
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 'normal',
        left: '50%',
        top: '255px',
        transform: 'translateX(-50%)',
        width: '331px',
        margin: 0,
      }}>
        Usaremos métricas como sueño, pasos y meditación para personalizar y validar tus desafíos automáticamente.
      </p>

      {/* Health app icons (Figma node 768:24584) */}
      {/* Center/elevated: Apple Health (image 177) */}
      <div className="absolute" style={{ left: 'calc(50% + 5px)', top: '346px', transform: 'translateX(-50%)' }}>
        <IcoAppleHealth />
      </div>
      {/* Left: Google Fit (image 179) */}
      <div className="absolute" style={{ left: '50px', top: '379px' }}>
        <IcoGoogleFit />
      </div>
      {/* Right: Garmin Connect (image 181) */}
      <div className="absolute" style={{ left: 'calc(50% + 74.5px)', top: '379px' }}>
        <IcoGarmin />
      </div>

      {/* Toggle card (Figma node 768:24567) */}
      <div className="absolute" style={{
        left: '50%',
        transform: 'translateX(-50%)',
        top: '499px',
        width: '333px',
        background: '#22192d',
        border: '1px solid #675973',
        borderRadius: '25px',
        padding: '19px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: FONT,
          fontWeight: 600,
          fontSize: '14px',
          color: 'white',
          margin: 0,
          lineHeight: '20px',
        }}>
          Sincronizar datos de salud
        </p>
        {/* iOS-style toggle */}
        <button
          type="button"
          onClick={() => setSyncing(v => !v)}
          style={{
            width: '51px',
            height: '31px',
            borderRadius: '16px',
            background: syncing ? '#51FBEA' : 'rgba(120,120,128,0.32)',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            flexShrink: 0,
            transition: 'background 0.2s',
            padding: 0,
          }}
        >
          <div style={{
            position: 'absolute',
            top: '2px',
            left: syncing ? '22px' : '2px',
            width: '27px',
            height: '27px',
            borderRadius: '50%',
            background: 'white',
            boxShadow: '0 1px 4px rgba(0,0,0,0.35)',
            transition: 'left 0.2s',
          }} />
        </button>
      </div>

      {/* Privacy note (Figma node 768:24564) */}
      <div className="absolute" style={{ left: '65px', top: '585px', display: 'flex', alignItems: 'flex-start', gap: '0px' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: '5px' }}>
          <path d="M17 9V7C17 4.2 14.8 2 12 2C9.2 2 7 4.2 7 7V9C5.3 9 4 10.3 4 12V19C4 20.7 5.3 22 7 22H17C18.7 22 20 20.7 20 19V12C20 10.3 18.7 9 17 9ZM9 7C9 5.3 10.3 4 12 4C13.7 4 15 5.3 15 7V9H9V7Z" fill="rgba(255,240,240,0.4)"/>
        </svg>
        <p style={{
          fontFamily: FONT,
          fontWeight: 500,
          fontSize: '11px',
          color: 'rgba(255,240,240,0.4)',
          letterSpacing: '-0.1716px',
          lineHeight: 'normal',
          margin: '4px 0 0 0',
          width: '241px',
          paddingLeft: '0px',
        }}>
          Tus datos se usarán solo para personalizar desafíos y validar tu progreso.
        </p>
      </div>

      {/* "Podrás editar..." (Figma node 768:24580) */}
      <p className="absolute text-center" style={{
        fontFamily: FONT,
        fontWeight: 400,
        fontSize: '13px',
        color: 'rgba(255,255,255,0.8)',
        lineHeight: 'normal',
        left: '50%',
        top: '658px',
        transform: 'translateX(-50%)',
        width: '331px',
        margin: 0,
      }}>
        Podrás editar esta información más adelante
      </p>

      {/* Continuar button (Figma node 768:24581–24583) */}
      <button
        type="button"
        onClick={goNext}
        className="absolute"
        style={{
          left: '42px',
          top: '696px',
          width: '292px',
          height: '47px',
          borderRadius: '100px',
          background: 'white',
          border: 'none',
          cursor: 'pointer',
          fontFamily: FONT,
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          color: '#19101b',
          textAlign: 'center',
        }}
      >
        Continuar
      </button>

      {/* "Omitir por ahora" (Figma node 768:24578) */}
      <button
        type="button"
        onClick={goNext}
        className="absolute text-center"
        style={{
          left: '50%',
          top: '752px',
          transform: 'translateX(-50%)',
          width: '331px',
          fontFamily: FONT,
          fontWeight: 600,
          fontSize: '13px',
          color: 'rgba(81,251,234,0.6)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        Omitir por ahora
      </button>

      {/* Home indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white"
        style={{ bottom: '8px', width: '134px', height: '5px' }}
      />
    </div>
  )
}
