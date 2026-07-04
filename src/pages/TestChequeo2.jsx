import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Alta', description: 'Me sentí preparado/a.' },
  { title: 'Estable', description: 'Me sentí operativo/a.' },
  { title: 'Baja', description: 'Me sentí con fatiga acumulada.' },
  { title: 'Muy baja', description: 'Necesito recuperar energía.' },
]

export default function TestChequeo2() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={2}
      question="¿Cómo sentiste tu energía para responder?"
      subtitle="Esto nos ayuda a ajustar la intensidad de tus desafíos."
      options={OPTIONS}
      buttonLabel="Continuar"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/onboarding/test/3')}
    />
  )
}
