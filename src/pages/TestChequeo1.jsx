import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Recuperador', description: 'Dormí bien y desperte con energía.' },
  { title: 'Aceptable', description: 'Descansé lo suficiente.' },
  { title: 'Irregular', description: 'Tuve varias interrupciones y dormí poco.' },
  { title: 'Insuficiente', description: 'Siento cansancio acumulado.' },
]

export default function TestChequeo1() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={1}
      question="Durante esta semana, ¿Cómo ha sido tu descanso?"
      subtitle="Esto nos ayuda a entender tu nivel de recuperación."
      options={OPTIONS}
      buttonLabel="Continuar"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/onboarding/test/2')}
    />
  )
}
