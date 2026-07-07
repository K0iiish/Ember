import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Recuperador',  description: 'Sueño profundo y reparador.' },
  { title: 'Aceptable',    description: 'Descanso suficiente.' },
  { title: 'Irregular',    description: 'Varias interrupciones.' },
  { title: 'Insuficiente', description: 'Cansancio acumulado.' },
]

export default function TestPerfil1() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={1}
      totalSteps={10}
      question="Durante esta semana, ¿Cómo ha sido tu descanso?"
      subtitle="Esto nos ayuda a entender tu nivel de recuperación antes de generar tus desafíos."
      options={OPTIONS}
      buttonLabel="Continuar"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/2')}
    />
  )
}
