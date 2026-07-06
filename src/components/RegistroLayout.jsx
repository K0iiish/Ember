import { useState } from 'react'

const FONT = 'Montserrat, sans-serif'

export default function RegistroLayout({
  step,             // 1 | 2 | 3 — drives progress bar
  title,
  subtitle,
  options = [],     // [{ title, icon }] for grid/list layouts
  layout = 'list',  // 'grid' | 'list' | 'custom'
  children,         // rendered when layout='custom'
  canContinue,      // required when layout='custom'
  onContinue,
  titleTop = 192,
  subtitleTop = 258,
  contentTop = 321,
  showEditNote = false,
  centerTitle = false,
}) {
  const [selected, setSelected] = useState(null)

  const isReady = layout === 'custom' ? Boolean(canContinue) : selected !== null

  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">

      {/* Teal background glow (top-left) */}
      <div
        className="absolute flex items-center justify-center"
        style={{ width: '591.646px', height: '590.23px', left: '-108.32px', top: '-475px' }}
      >
        <div style={{ transform: 'rotate(5.78deg)', flexShrink: 0 }}>
          <div className="relative" style={{ width: '540.186px', height: '538.602px' }}>
            <div className="absolute" style={{ inset: '-18.57% -18.51%' }}>
              <img alt="" src="/assets/glow-ellipse.svg" className="block size-full" style={{ maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar — 3 segments, 156px, top: 80px */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex"
        style={{ top: '80px', width: '156px', gap: '4px' }}
      >
        {[0, 1, 2].map(i => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              backgroundColor: i < step ? '#51fbea' : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>

      {/* Waterdrop glow halo */}
      <div
        className="absolute"
        style={{ left: 'calc(50% - 0.37px)', transform: 'translateX(-50%)', top: '110.74px', width: '64.629px', height: '66.258px' }}
      >
        <div className="absolute" style={{ inset: '-151.92% -155.8%' }}>
          <img alt="" src="/assets/waterdrop-glow.svg" className="block size-full" style={{ maxWidth: 'none' }} />
        </div>
      </div>

      {/* Drop shadow */}
      <div
        className="absolute flex items-center justify-center"
        style={{ left: 'calc(50% + 0.11px)', transform: 'translateX(-50%)', top: '173px', width: '16.818px', height: '3.558px' }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img alt="" src="/assets/shadow-ellipse.svg" style={{ width: '16.795px', height: '3.445px', display: 'block' }} />
        </div>
      </div>

      {/* Waterdrop */}
      <img
        alt="Ember"
        src="/assets/waterdrop.svg"
        className="absolute"
        style={{ left: 'calc(25% + 76.25px)', top: '127.6px', width: '34.672px', height: '45.06px' }}
      />

      {/* Stars */}
      <img alt="" src="/assets/star-sm.svg" className="absolute"
        style={{ width: '6px', height: '7px', left: 'calc(25% + 72.25px)', top: '121px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute"
        style={{ width: '4px', height: '5px', left: 'calc(50% + 24.5px)', top: '136px' }} />
      <img alt="" src="/assets/star-lg.svg" className="absolute"
        style={{ width: '9px', height: '10px', left: 'calc(50% + 8.5px)', top: '104px' }} />

      {/* Title */}
      <p
        className="absolute text-white"
        style={{
          fontFamily: FONT, fontWeight: 700, fontSize: '24px',
          lineHeight: 'normal', letterSpacing: '-0.3744px',
          left: centerTitle ? '50%' : '16px',
          right: centerTitle ? 'auto' : '16px',
          transform: centerTitle ? 'translateX(-50%)' : 'none',
          top: titleTop,
          textAlign: centerTitle ? 'center' : 'left',
          whiteSpace: centerTitle ? 'nowrap' : 'normal',
        }}
      >
        {title}
      </p>

      {/* Subtitle */}
      <p
        className="absolute"
        style={{
          fontFamily: FONT, fontWeight: 500, fontSize: '15px',
          lineHeight: 'normal', color: 'rgba(255,255,255,0.8)',
          left: '16px', right: '20px', top: subtitleTop,
        }}
      >
        {subtitle}
      </p>

      {/* ── Content area ── */}

      {layout === 'grid' && (
        <div
          className="absolute"
          style={{
            left: '17px', top: contentTop,
            width: '342px', height: '296px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {options.map((opt, i) => {
            const sel = selected === i
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  position: 'relative',
                  backgroundColor: sel ? 'rgba(81,251,234,0.10)' : '#22192d',
                  border: `1px solid ${sel ? '#51fbea' : '#675973'}`,
                  borderRadius: '10px',
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  gap: '8px', padding: '8px',
                  cursor: 'pointer',
                }}
              >
                <div style={{ width: '36px', height: '36px', color: sel ? '#51fbea' : '#a8a8ab', opacity: sel ? 1 : 0.7, flexShrink: 0 }}>
                  {opt.icon}
                </div>
                <p style={{
                  fontFamily: FONT, fontWeight: 600, fontSize: '13px',
                  lineHeight: '18px', color: sel ? '#fff' : '#a8a8ab',
                  textAlign: 'center', whiteSpace: 'nowrap', margin: 0,
                }}>
                  {opt.title}
                </p>
              </button>
            )
          })}
        </div>
      )}

      {layout === 'list' && (
        <div className="absolute" style={{ left: '16px', right: '16px', top: contentTop }}>
          {options.map((opt, i) => {
            const sel = selected === i
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  width: '100%', height: '66px', marginBottom: '12px',
                  paddingLeft: '24px', paddingRight: '19px', boxSizing: 'border-box',
                  backgroundColor: sel ? 'rgba(81,251,234,0.10)' : '#22192d',
                  border: `1px solid ${sel ? '#51fbea' : '#675973'}`,
                  borderRadius: '25px', cursor: 'pointer',
                  fontFamily: FONT, fontWeight: 600, fontSize: '14px',
                  lineHeight: '20px', color: sel ? '#fff' : '#a8a8ab',
                  textAlign: 'left',
                }}
              >
                <span style={{ whiteSpace: 'nowrap' }}>{opt.title}</span>
                {/* Radio circle */}
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%', flexShrink: 0,
                  border: `2px solid ${sel ? '#51fbea' : '#675973'}`,
                  backgroundColor: sel ? '#51fbea' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {sel && <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#19101b' }} />}
                </div>
              </button>
            )
          })}
        </div>
      )}

      {layout === 'custom' && (
        <div className="absolute" style={{ left: 0, right: 0, top: contentTop }}>
          {children}
        </div>
      )}

      {/* "Podrás editar" note */}
      {showEditNote && (
        <p
          className="absolute left-1/2 -translate-x-1/2 text-center"
          style={{
            fontFamily: FONT, fontWeight: 400, fontSize: '13px',
            color: 'rgba(255,255,255,0.8)', top: '658px', width: '331px',
          }}
        >
          Podrás editar esta información más adelante
        </p>
      )}

      {/* Continuar button */}
      <button
        onClick={isReady ? onContinue : undefined}
        disabled={!isReady}
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: '42px', top: '696px', width: '292px', height: '47px',
          fontFamily: FONT, fontWeight: 700, fontSize: '16px', lineHeight: '24px',
          backgroundColor: isReady ? '#ffffff' : 'rgba(255,255,255,0.22)',
          color: isReady ? '#19101b' : 'rgba(255,255,255,0.4)',
          cursor: isReady ? 'pointer' : 'default', border: 'none',
        }}
      >
        Continuar
      </button>

      {/* Home indicator */}
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white"
        style={{ bottom: '8px', width: '134px', height: '5px' }}
      />
    </div>
  )
}
