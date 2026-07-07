import { useState } from 'react'

export default function TestChequeoLayout({
  step,
  totalSteps = 5,
  question,
  subtitle,
  options = [],
  layout = 'list',
  buttonLabel = 'Continuar',
  buttonTop = '696px',
  showRadio = null,
  glowSrc = '/assets/glow-ellipse-magenta.svg',
  haloSrc = '/assets/waterdrop-glow-magenta.svg',
  flameSrc = '/assets/waterdrop-magenta.svg',
  accentColor = '#C040E8',
  accentBg = '#2d1a3d',
  onBack,
  onContinue,
}) {
  const [selected, setSelected] = useState(null)

  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">
      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-6px); }
        }
      `}</style>

      {/* Background glow ellipse (magenta) */}
      <div
        className="absolute flex items-center justify-center"
        style={{ width: '591.646px', height: '590.23px', left: '-108px', top: '-489px' }}
      >
        <div style={{ transform: 'rotate(5.78deg)', flexShrink: 0 }}>
          <div className="relative" style={{ width: '540.186px', height: '538.602px' }}>
            <div className="absolute" style={{ inset: '-18.57% -18.51%' }}>
              <img
                alt=""
                src={glowSrc}
                className="block size-full"
                style={{ maxWidth: 'none' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar — top: 80px, centered, 264px wide, 5 segments */}
      <div
        className="absolute left-1/2 -translate-x-1/2 flex"
        style={{ top: '80px', width: '264px', gap: '4px' }}
      >
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              height: '4px',
              borderRadius: '2px',
              backgroundColor: i < step ? '#1ad6cf' : 'rgba(255,255,255,0.2)',
            }}
          />
        ))}
      </div>

      {/* Back button — left: 14px, top: 104px, 33×33px */}
      <button
        onClick={onBack}
        className="absolute flex items-center justify-center"
        style={{ left: '14px', top: '104px', width: '33px', height: '33px' }}
      >
        <img src="/assets/chevron-left.svg" alt="Volver" style={{ width: '33px', height: '33px' }} />
      </button>

      {/* Waterdrop glow — top: 110.74px, centered */}
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
          <img
            alt=""
            src={haloSrc}
            className="block size-full"
            style={{ maxWidth: 'none' }}
          />
        </div>
      </div>

      {/* Stars (positions exactas de Figma) */}
      <img alt="" src="/assets/star-sm.svg" className="absolute"
        style={{ width: '6px', height: '7px', left: 'calc(25% + 72.25px)', top: '121px' }} />
      <img alt="" src="/assets/star-md.svg" className="absolute"
        style={{ width: '4px', height: '5px', left: 'calc(50% + 24.5px)', top: '136px' }} />
      <img alt="" src="/assets/star-lg.svg" className="absolute"
        style={{ width: '9px', height: '10px', left: 'calc(50% + 8.5px)', top: '104px' }} />

      {/* Small waterdrop — left: calc(25%+76.25px), top: 127.6px */}
      <img
        alt="Ember"
        src={flameSrc}
        className="absolute"
        style={{
          left: 'calc(25% + 76.25px)',
          top: '127.6px',
          width: '34.672px',
          height: '45.06px',
          animation: 'floatY 3s ease-in-out infinite',
        }}
      />

      {/* Shadow below small drop */}
      <div
        className="absolute flex items-center justify-center"
        style={{
          left: 'calc(50% + 0.11px)',
          transform: 'translateX(-50%)',
          top: '173px',
          width: '16.818px',
          height: '3.558px',
        }}
      >
        <div style={{ transform: 'rotate(-179.61deg)', flexShrink: 0 }}>
          <img
            alt=""
            src="/assets/shadow-ellipse.svg"
            style={{ width: '16.795px', height: '3.445px', display: 'block' }}
          />
        </div>
      </div>

      {/* Question — top: 192px */}
      <p
        className="absolute text-white text-left"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: 'normal',
          letterSpacing: '-0.3744px',
          left: '16px',
          right: '16px',
          top: '192px',
        }}
      >
        {question}
      </p>

      {/* Subtitle — top: 258px */}
      <p
        className="absolute text-left"
        style={{
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 500,
          fontSize: '15px',
          lineHeight: 'normal',
          color: 'rgba(255,255,255,0.8)',
          left: '15px',
          right: '27px',
          top: '258px',
        }}
      >
        {subtitle}
      </p>

      {/* Options */}
      {layout === 'list' ? (
        <div className="absolute" style={{ left: '16px', right: '16px', top: '323px' }}>
          {options.map((opt, i) => {
            const isSelected = selected === i
            const hasDesc = Boolean(opt.description)
            const displayRadio = showRadio === null ? hasDesc : showRadio
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                className="w-full text-left"
                style={{
                  display: 'block',
                  position: 'relative',
                  height: '66px',
                  marginBottom: '12px',
                  backgroundColor: isSelected ? accentBg : '#22192d',
                  border: `1px solid ${isSelected ? accentColor : '#675973'}`,
                  borderRadius: '25px',
                }}
              >
                {/* Title */}
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: isSelected ? '#fff' : '#a8a8ab',
                    position: 'absolute',
                    left: '25px',
                    top: hasDesc ? '12px' : 'calc(50% - 10px)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {opt.title}
                </p>

                {/* Description */}
                {hasDesc && (
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: isSelected ? 'rgba(255,255,255,0.7)' : '#a8a8ab',
                      position: 'absolute',
                      left: '25px',
                      top: '32px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {opt.description}
                  </p>
                )}

                {/* Radio circle */}
                {displayRadio && (
                  <div
                    style={{
                      position: 'absolute',
                      right: '20px',
                      top: '21px',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: `2px solid ${isSelected ? accentColor : '#675973'}`,
                      backgroundColor: isSelected ? accentColor : 'transparent',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {isSelected && (
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#fff' }} />
                    )}
                  </div>
                )}
              </button>
            )
          })}
        </div>
      ) : (
        /* Grid layout — Test 4 */
        <div
          className="absolute"
          style={{
            left: '17px',
            top: '321px',
            width: '342px',
            height: '296px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: '16px',
          }}
        >
          {options.map((opt, i) => {
            const isSelected = selected === i
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  position: 'relative',
                  backgroundColor: isSelected ? accentBg : '#22192d',
                  border: `1px solid ${isSelected ? accentColor : '#675973'}`,
                  borderRadius: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '10px 8px',
                }}
              >
                {opt.iconSrc && (
                  <img
                    src={opt.iconSrc}
                    alt=""
                    style={{ width: '36px', height: '36px', objectFit: 'contain', opacity: 0.6 }}
                  />
                )}
                <p
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '13px',
                    lineHeight: '18px',
                    color: isSelected ? '#fff' : '#a8a8ab',
                    textAlign: 'center',
                  }}
                >
                  {opt.title}
                </p>
              </button>
            )
          })}
        </div>
      )}

      {/* Continuar / Confirmar — left: 42px, top: 696px, width: 292px, height: 47px */}
      <button
        onClick={selected !== null ? onContinue : undefined}
        disabled={selected === null}
        className="absolute flex items-center justify-center rounded-full"
        style={{
          left: '42px',
          top: buttonTop,
          width: '292px',
          height: '47px',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          backgroundColor: selected !== null ? '#ffffff' : 'rgba(255,255,255,0.22)',
          color: selected !== null ? '#19101b' : 'rgba(255,255,255,0.4)',
          cursor: selected !== null ? 'pointer' : 'default',
          border: 'none',
        }}
      >
        {buttonLabel}
      </button>
    </div>
  )
}
