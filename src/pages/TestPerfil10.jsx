import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

export default function TestPerfil10() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={10}
      totalSteps={10}
      question="¿Qué es lo más difícil de equilibrar con el servicio?"
      subtitle="Cuéntanos brevemente qué parte de tu rutina o vida personal se ve más afectada."
      layout="text"
      placeholder="Ej: descansar mejor, ordenar mis horarios, pasar más tiempo con mi familia o desconectarme después del servicio."
      maxLength={200}
      buttonLabel="Finalizar perfilamiento"
      buttonColor="#1ad6cf"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/ember/post-test/1')}
    />
  )
}
