import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Ligera', description: 'Me sentí claro/a y con energía.' },
  { title: 'Moderada', description: 'Tuve carga, pero la maneje sin problema.' },
  { title: 'Alta', description: 'Siento presión o cansancio acumulado.' },
  { title: 'Muy alta', description: 'Me está costando sostener el ritmo.' },
]

export default function TestChequeo3() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={3}
      question="¿Qué nivel de carga sentíste esta semana?"
      subtitle="Esto nos ayuda a equilibrar tus metas con tu ritmo actual."
      options={OPTIONS}
      buttonLabel="Continuar"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/onboarding/test/4')}
    />
  )
}
