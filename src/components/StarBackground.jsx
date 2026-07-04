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

export default function StarBackground({ children, glowSrc = '/assets/glow-ellipse.svg' }) {
  return (
    <div className="relative overflow-hidden bg-[#19101b] min-h-screen w-full">
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateX(-50%) translateY(0px); }
          50%       { transform: translateX(-50%) translateY(-8px); }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }
      `}</style>

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
                  src={glowSrc}
                  className="block size-full"
                  style={{ maxWidth: 'none' }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}

      {STARS_SM.map((pos, i) => (
        <img key={i} alt="" src="/assets/star-sm.svg" className="absolute"
          style={{ width: '6px', height: '7px', left: pos.left, top: pos.top }} />
      ))}
      {STARS_MD.map((pos, i) => (
        <img key={i} alt="" src="/assets/star-md.svg" className="absolute"
          style={{ width: '4px', height: '5px', left: pos.left, top: pos.top }} />
      ))}
      {STARS_LG.map((pos, i) => (
        <img key={i} alt="" src="/assets/star-lg.svg" className="absolute"
          style={{ width: '9px', height: '10px', left: pos.left, top: pos.top }} />
      ))}

      {children}
    </div>
  )
}
