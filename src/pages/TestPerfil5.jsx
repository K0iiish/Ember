import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Menos de 10 min al día' },
  { title: '10 - 20 min al día' },
  { title: '30 min o más al día' },
  { title: 'Algunas horas por semana.' },
]

export default function TestPerfil5() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={5}
      totalSteps={10}
      question="¿Cuánto tiempo real puedes dedicarte a ti mismo?"
      subtitle="Selecciona la opción que más se acerque a tu rutina."
      options={OPTIONS}
      buttonLabel="Continuar"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/6')}
    />
  )
}
