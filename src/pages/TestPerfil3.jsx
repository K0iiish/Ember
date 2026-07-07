import { useNavigate } from 'react-router-dom'
import TestChequeoLayout from '../components/TestChequeoLayout'

const OPTIONS = [
  { title: 'Descanso y sueño',            iconSrc: '/assets/descanso y sueño.png' },
  { title: 'Concentración',               iconSrc: '/assets/Concentración.png' },
  { title: 'Manejo de presión',           iconSrc: '/assets/Manejo de presión.png' },
  { title: 'Rendimiento físico',          iconSrc: '/assets/rendimiento físico.png' },
  { title: 'Recuperación post-servicio',  iconSrc: '/assets/recuperación post-servicio.png' },
  { title: 'Conexión con otros',          iconSrc: '/assets/conexión con otros.png' },
]

export default function TestPerfil3() {
  const navigate = useNavigate()
  return (
    <TestChequeoLayout
      step={3}
      totalSteps={10}
      question={<>¿Qué áreas te<br />gustaría fortalecer?</>}
      subtitle="Selecciona las que más se acerquen a tus objetivos a mejorar."
      options={OPTIONS}
      layout="grid"
      buttonLabel="Confirmar selección"
      glowSrc="/assets/glow-ellipse.svg"
      haloSrc="/assets/waterdrop-glow.svg"
      flameSrc="/assets/waterdrop-celeste.svg"
      accentColor="#51FBEA"
      accentBg="rgba(81,251,234,0.10)"
      onBack={() => navigate(-1)}
      onContinue={() => navigate('/perfil/test/4')}
    />
  )
}
