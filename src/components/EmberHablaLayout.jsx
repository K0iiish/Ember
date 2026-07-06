import { useEffect, useState } from 'react'

const FONT = 'Montserrat, sans-serif'

// Tail sits ~68px above the flame's tip (flame top: 351px, frame height: 812px)
const BUBBLE_BOTTOM = 529

function SpeechBubble({ text, visible }) {
  return (
    <div
      className="absolute left-1/2"
      style={{
        width: '227px',
        bottom: `${BUBBLE_BOTTOM}px`,
        transform: `translateX(-50%) translateY(${visible ? '0px' : '10px'})`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.5s ease, transform 0.5s ease',
      }}
    >
      <div style={{
        position: 'relative',
        background: '#19101b',
        border: '1px solid rgba(255,255,255,0.17)',
        borderRadius: '16px',
        boxShadow: '0 4px 50px rgba(81,251,234,0.28)',
        padding: '16px 14px',
        boxSizing: 'border-box',
      }}>
        <p style={{
          fontFamily: FONT,
          fontWeight: 600,
          fontSize: '15px',
          letterSpacing: '-0.234px',
          lineHeight: 'normal',
          color: 'white',
          textAlign: 'center',
          margin: 0,
        }}>
          {text}
        </p>
        {/* Tail */}
        <div style={{
          position: 'absolute',
          bottom: '-7px',
          left: '50%',
          width: '14px',
          height: '14px',
          background: '#19101b',
          borderRight: '1px solid rgba(255,255,255,0.17)',
          borderBottom: '1px solid rgba(255,255,255,0.17)',
          transform: 'translateX(-50%) rotate(45deg)',
        }} />
      </div>
    </div>
  )
}

export default function EmberHablaLayout({ bubbles, ignite = false, extra, onContinue }) {
  const [lit, setLit] = useState(!ignite)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!ignite) return
    const t = setTimeout(() => setLit(true), 1000)
    return () => clearTimeout(t)
  }, [ignite])

  useEffect(() => {
    if (visibleCount >= bubbles.length) return
    const delay = visibleCount === 0 ? (ignite ? 1000 : 200) : 500
    const t = setTimeout(() => setVisibleCount(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visibleCount, bubbles.length, ignite])

  const allShown = visibleCount >= bubbles.length

  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">

      {/* Teal glow — top-left (Figma node 768:24685) */}
      <div className="absolute flex items-center justify-center" style={{ left: '-108px', top: '-489px', width: '591.646px', height: '590.23px' }}>
        <div style={{ transform: 'rotate(5.78deg)', flexShrink: 0, opacity: lit ? 1 : 0.25, transition: 'opacity 1.5s ease' }}>
          <div className="relative" style={{ width: '540.186px', height: '538.602px' }}>
            <div className="absolute" style={{ inset: '-18.57% -18.51%' }}>
              <img alt="" src="/assets/glow-ellipse.svg" className="block size-full" style={{ maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Stars around the flame */}
      <img alt="" src="/assets/star-sm.svg" className="absolute" style={{ width: '6px', height: '7px', left: '83px', top: '407px' }} />
      <img alt="" src="/assets/star-sm.svg" className="absolute" style={{ width: '6px', height: '7px', left: 'calc(50% + 47.5px)', top: '366px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute" style={{ width: '4px', height: '5px', left: 'calc(25% + 16.25px)', top: '380px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute" style={{ width: '4px', height: '5px', left: 'calc(25% + 24.25px)', top: '432px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute" style={{ width: '4px', height: '5px', left: 'calc(75% - 6.25px)', top: '380px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute" style={{ width: '4px', height: '5px', left: 'calc(50% + 70.5px)', top: '430px' }} />

      {/* Flame glow halo (Figma node 768:24697) */}
      <div
        className="absolute"
        style={{
          left: 'calc(50% + 0.98px)', transform: 'translateX(-50%)', top: '401px',
          width: '118.967px', height: '71.589px',
          opacity: lit ? 1 : 0.15, filter: lit ? 'brightness(1)' : 'brightness(0.35)',
          transition: 'opacity 1.5s ease, filter 1.5s ease',
        }}
      >
        <div className="absolute" style={{ inset: '-138.37% -89.25%' }}>
          <img alt="" src="/assets/waterdrop-glow.svg" className="block size-full" style={{ maxWidth: 'none' }} />
        </div>
      </div>

      {/* Highlight ellipse behind the flame (Figma node 768:24686) */}
      <div className="absolute flex items-center justify-center" style={{ left: 'calc(50% + 0.76px)', transform: 'translateX(-50%)', top: '397.34px', width: '31.527px', height: '3.658px' }}>
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img alt="" src="/assets/shadow-ellipse.svg" style={{ width: '31.504px', height: '3.445px', display: 'block' }} />
        </div>
      </div>

      {/* Flame drop shadow (Figma node 768:24699) */}
      <div className="absolute flex items-center justify-center" style={{ left: 'calc(50% + 0.64px)', transform: 'translateX(-50%)', top: '467px', width: '27.763px', height: '3.633px' }}>
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img alt="" src="/assets/shadow-ellipse.svg" style={{ width: '27.74px', height: '3.445px', display: 'block' }} />
        </div>
      </div>

      {/* Flame — Ember (Figma node 768:24693) */}
      <img
        alt="Ember"
        src="/assets/waterdrop.svg"
        className="absolute"
        style={{
          left: 'calc(25% + 52.25px)', top: '351px', width: '83.987px', height: '109.148px',
          opacity: lit ? 1 : 0.2, filter: lit ? 'brightness(1)' : 'brightness(0.3)',
          transition: 'opacity 1.5s ease, filter 1.5s ease',
        }}
      />

      {/* Speech bubbles — appear sequentially */}
      {bubbles.map((text, i) => (
        <SpeechBubble key={i} text={text} visible={i < visibleCount} />
      ))}

      {/* Per-screen extra content */}
      {extra}

      {/* Continuar button — appears once every bubble has shown */}
      <button
        type="button"
        onClick={onContinue}
        className="absolute rounded-full"
        style={{
          left: '42px', top: '696px', width: '292px', height: '47px',
          background: 'white', border: 'none',
          fontFamily: FONT, fontWeight: 700, fontSize: '16px', lineHeight: '24px',
          color: '#19101b', textAlign: 'center',
          opacity: allShown ? 1 : 0,
          transform: allShown ? 'translateY(0)' : 'translateY(8px)',
          pointerEvents: allShown ? 'auto' : 'none',
          cursor: allShown ? 'pointer' : 'default',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        Continuar
      </button>

      {/* Home indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white" style={{ bottom: '8px', width: '134px', height: '5px' }} />
    </div>
  )
}
