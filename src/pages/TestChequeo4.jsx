import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Dormir mejor',       iconSrc: '/assets/habit-dormir.svg' },
  { title: 'Hidratarme',         iconSrc: '/assets/habit-hidratar.svg' },
  { title: 'Comer mejor',        iconSrc: '/assets/habit-comer.svg' },
  { title: 'Moverme más',        iconSrc: '/assets/habit-mover.svg' },
  { title: 'Tomar pausas',       iconSrc: '/assets/habit-pausas.svg' },
  { title: 'Conectar con otros', iconSrc: '/assets/habit-conectar.svg' },
]

export default function TestChequeo4() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={4}
      question="¿Qué hábito te gustaría reforzar esta semana?"
      subtitle="Selecciona una prioridad para tus próximos desafíos."
      options={OPTIONS}
      layout="grid"
      buttonLabel="Confirmar selección"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/onboarding/test/5')}
    />
  )
}
