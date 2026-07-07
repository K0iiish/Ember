import { useNavigate } from 'react-router-dom'
import EmberHablaLayout from '../components/EmberHablaLayout'

// Habit-category icons ringing the flame (Figma nodes 768:24765–24769)
const ICONS = [
  { src: '/assets/icon-habla-mover.png',    left: '21px',                size: 58, top: '472px' },
  { src: '/assets/icon-habla-comer.png',    left: '69px',                size: 65, top: '537px' },
  { src: '/assets/icon-habla-hidratar.png', left: '50%',                 size: 65, top: '557px', center: true },
  { src: '/assets/icon-habla-dormir.png',   left: 'calc(50% + 53.5px)',  size: 65, top: '537px' },
  { src: '/assets/icon-habla-pausas.png',   left: 'calc(75% + 19.75px)', size: 58, top: '472px' },
]

export default function EmberHabla3() {
  const navigate = useNavigate()

  return (
    <EmberHablaLayout
      bubbles={['Mientras mejores tus hábitos, más creceré y rendiras mejor en tu servicio.']}
      extra={
        <>
          {ICONS.map((ic, i) => (
            <div
              key={i}
              className="absolute rounded-full overflow-hidden"
              style={{
                left: ic.left, top: ic.top, width: `${ic.size}px`, height: `${ic.size}px`,
                transform: ic.center ? 'translateX(-50%)' : 'none',
                border: '1px solid rgba(255,255,255,0.62)',
                boxShadow: '0px 4px 4px rgba(0,0,0,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img alt="" src={ic.src} style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
            </div>
          ))}
        </>
      }
      onContinue={() => navigate('/ember/habla-4')}
    />
  )
}
