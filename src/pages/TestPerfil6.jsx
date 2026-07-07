import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Mi familia',          iconSrc: '/assets/Mi familia.png' },
  { title: 'Mi equipo',           iconSrc: '/assets/mi equipo.png' },
  { title: 'Mi salud',            iconSrc: '/assets/salud.png' },
  { title: 'Superación personal', iconSrc: '/assets/superación personal.png' },
  { title: 'A quienes ayudo',     iconSrc: '/assets/a quienes ayudo.png' },
  { title: 'Mi vocación',         iconSrc: '/assets/mi vocación.png' },
]

export default function TestPerfil6() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={6}
      totalSteps={10}
      question="¿Qué te impulsa a mantenerte operativo?"
      subtitle="Selecciona lo que más resuene contigo a la hora de seguir respondiendo."
      options={OPTIONS}
      layout="grid"
      buttonLabel="Confirmar selección"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/7')}
    />
  )
}
