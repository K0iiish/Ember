import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Me cuesta desconectarme' },
  { title: 'Estoy durmiendo peor' },
  { title: 'Me siento mentalmente agotado/a' },
  { title: 'Me cuesta mantener la motivación' },
  { title: 'Ninguna de las anteriores' },
]

export default function TestPerfil4() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={4}
      totalSteps={10}
      question="¿Has notado alguna de estas señales últimamente?"
      subtitle="Selecciona las que más se acerquen a cómo te has sentido."
      options={OPTIONS}
      buttonLabel="Confirmar selección"
      buttonTop="730px"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/5')}
    />
  )
}
