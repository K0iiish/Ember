import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Menos de 10 min al día' },
  { title: '10 - 20 min al día' },
  { title: '30 min o más al día' },
  { title: 'Algunas horas por semana.' },
]

export default function TestChequeo5() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={5}
      question="¿Cuánto tiempo puedes dedicar a tus desafíos?"
      subtitle="Así ajustamos tus metas a tu rutina real."
      options={OPTIONS}
      buttonLabel="Continuar"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/onboarding/sincronizar')}
    />
  )
}
