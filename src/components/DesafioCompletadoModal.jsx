import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

const FONT = 'Montserrat, sans-serif'
const TEAL = '#1ad6cf'

/* Inline drop shape — same paths as waterdrop.svg but without the white circle */
function DropIcon() {
  return (
    <div style={{ position: 'relative', width: '84px', height: '109px' }}>
      <svg
        viewBox="0 0 83.9866 109.148"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <path
          d="M82.6421 76.8197C90.7183 47.2737 60.5205 16.8586 42.4369 1.79261e-05C26.0504 13.904 -6.07275 44.6667 1.00262 76.8197C7.18303 104.906 32.2953 109.148 42.4369 109.148C52.5784 109.148 75.4108 103.275 82.6421 76.8197Z"
          fill="#3CE4D2"
        />
        <path
          d="M63.4922 71.8979C67.7639 55.4573 51.7915 38.5332 42.2266 29.1525C33.5594 36.8892 16.5686 54.0067 20.3109 71.8979C23.5799 87.526 36.8625 89.8866 42.2266 89.8866C47.5907 89.8866 59.6673 86.6185 63.4922 71.8979Z"
          fill="#51FBEA"
        />
      </svg>
      {/* Checkmark centered inside the drop */}
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        paddingTop: '18px',
      }}>
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12.5L10 17.5L19 8"
            stroke="white" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

export default function DesafioCompletadoModal({ open, onClose, xp = '+50 XP' }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (open) {
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    } else {
      setVisible(false)
    }
  }, [open])

  if (!open) return null

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 280)
  }

  return createPortal(
    <div
      onClick={handleClose}
      style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(0,0,0,0.72)',
        zIndex: 400,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity: visible ? 1 : 0,
        transition: 'opacity 280ms ease',
      }}
    >
      {/* Card */}
      <div
        onClick={e => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '335px',
          background: 'rgba(26, 16, 38, 0.72)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '28px',
          border: '1px solid rgba(255,255,255,0.10)',
          zIndex: 401,
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.96)',
          transition: 'transform 280ms cubic-bezier(0.34,1.56,0.64,1)',
          paddingBottom: '32px',
          overflow: 'hidden',
        }}
      >

        {/* Confetti — inside card, behind the drop (rendered first) */}
        <img
          src="/assets/confetti.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '16px', left: '50%',
            transform: 'translateX(-50%)',
            width: '200px',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* X close button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute', top: '14px', right: '14px',
            width: '32px', height: '32px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.12)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M1 1L11 11M11 1L1 11"
              stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>

        {/* Drop icon — zIndex above confetti */}
        <div style={{
          position: 'relative', zIndex: 1,
          marginTop: '44px',
          display: 'flex', justifyContent: 'center',
        }}>
          <DropIcon />
        </div>

        {/* ¡Buen Trabajo! */}
        <p style={{
          fontFamily: FONT, fontWeight: 800, fontSize: '26px',
          color: 'white', textAlign: 'center',
          margin: '20px 28px 0', lineHeight: '1.2',
        }}>¡Buen Trabajo!</p>

        {/* Fixed description */}
        <p style={{
          fontFamily: FONT, fontWeight: 500, fontSize: '14px',
          color: 'rgba(255,255,255,0.65)', textAlign: 'center',
          margin: '10px 32px 0', lineHeight: '1.5',
        }}>
          Has fortalecido tu rutina de recuperación.
        </p>

        {/* XP — plain text, no pill */}
        <p style={{
          fontFamily: FONT, fontWeight: 700, fontSize: '20px',
          color: TEAL, textAlign: 'center',
          margin: '16px 0 0',
        }}>{xp}</p>

        {/* Llama — simple text line */}
        <p style={{
          fontFamily: FONT, fontWeight: 500, fontSize: '13px',
          color: 'rgba(255,255,255,0.55)', textAlign: 'center',
          margin: '8px 0 0',
        }}>+ 1 avance de llama</p>

      </div>
    </div>,
    document.body
  )
}
