import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Ligera',   description: 'Me siento claro/a y con energía.' },
  { title: 'Moderada', description: 'He tenido carga, pero la manejo.' },
  { title: 'Alta',     description: 'Siento cansancio o presión acumulada.' },
  { title: 'Muy alta', description: 'Me está costando sostener el ritmo.' },
]

export default function TestPerfil8() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={8}
      totalSteps={10}
      question="¿Qué nivel de carga sientes últimamente?"
      subtitle="Esto nos ayuda a ajustar la intensidad de tus desafíos."
      options={OPTIONS}
      buttonLabel="Continuar"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/9')}
    />
  )
}
