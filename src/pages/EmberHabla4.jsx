import { useNavigate } from 'react-router-dom'
import EmberHablaLayout from '../components/EmberHablaLayout'

const FONT = 'Montserrat, sans-serif'

export default function EmberHabla4() {
  const navigate = useNavigate()

  return (
    <EmberHablaLayout
      bubbles={['Antes de comenzar, te haré 10 preguntas rápidas para conocerte mejor :)']}
      extra={
        <p
          className="absolute text-center"
          style={{
            fontFamily: FONT,
            fontWeight: 500,
            fontSize: '14px',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: 'normal',
            left: '50%',
            top: '548px',
            transform: 'translateX(-50%)',
            width: '308px',
            margin: 0,
          }}
        >
          Tomará menos de 3 minutos y nos ayudará a personalizar tus desafiós para ti.
        </p>
      }
      onContinue={() => navigate('/onboarding/saludo-1')}
    />
  )
}
