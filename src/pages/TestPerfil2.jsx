import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Bien cubiera', description: 'He comido e hidratado de forma constante.' },
  { title: 'Aceptable',    description: 'Podría mejorar' },
  { title: 'Irregular',    description: 'A veces salto comidas o tomo poca agua.' },
  { title: 'Descuidado',   description: 'Me cuesta sostener este hábito.' },
]

export default function TestPerfil2() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={2}
      totalSteps={10}
      question="¿Cómo has comido e hidratado últimamente?"
      subtitle="Esto nos ayuda a ajustar tus desafíos de energía y recuperación."
      options={OPTIONS}
      buttonLabel="Continuar"
      showRadio={false}
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/3')}
    />
  )
}
