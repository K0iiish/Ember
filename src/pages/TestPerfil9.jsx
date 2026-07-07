import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Alta',     description: 'Me siento preparado/a y con energía.' },
  { title: 'Normal',   description: 'Me siento operativo/a dentro de lo habitual.' },
  { title: 'Baja',     description: 'Siento cansancio o fatiga acumulada.' },
  { title: 'Muy baja', description: 'Necesito recuperar energía.' },
]

export default function TestPerfil9() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={9}
      totalSteps={10}
      question="¿Cómo sientes tu energía para responder hoy?"
      subtitle="Esto nos ayuda a ajustar la intensidad de tus desafíos."
      options={OPTIONS}
      buttonLabel="Continuar"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/10')}
    />
  )
}
