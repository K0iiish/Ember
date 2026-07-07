import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Dormir y recuperar descanso' },
  { title: 'Alimentación e hidratación' },
  { title: 'Actividad física' },
  { title: 'Tiempo personal' },
  { title: 'Relaciones personales' },
]

export default function TestPerfil7() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={7}
      totalSteps={10}
      question="¿Qué cosas sueles dejar para después?"
      subtitle="Selecciona las áreas que más te cuesta priorizar en tu semana."
      options={OPTIONS}
      buttonLabel="Confirmar selección"
      buttonTop="730px"
      showRadio={true}
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/8')}
    />
  )
}
