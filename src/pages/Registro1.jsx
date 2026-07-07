import { useNavigate } from 'react-router-dom'
import RegistroLayout from '../components/RegistroLayout'

function Icon({ src, alt }) {
  return <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
}

const OPTIONS = [
  { title: 'Bombero',    icon: <Icon src="/assets/icon-bombero.png" alt="Bombero" /> },
  { title: 'Rescatista', icon: <Icon src="/assets/icon-rescatista.png" alt="Rescatista" /> },
  { title: 'Residente',  icon: <Icon src="/assets/icon-residente.png" alt="Residente" /> },
  { title: 'Paramédico', icon: <Icon src="/assets/icon-paramedico.png" alt="Paramédico" /> },
  { title: 'SAMU',       icon: <Icon src="/assets/icon-samu.png" alt="SAMU" /> },
  { title: 'Otro',       icon: <Icon src="/assets/icon-otro.png" alt="Otro" /> },
]

export default function Registro1() {
  const navigate = useNavigate()
  return (
    <RegistroLayout
      step={1}
      title="¿A qué tipo de Primera Línea perteneces?"
      subtitle="Esto nos ayuda a adaptar tus desafios a tu contexto operativo."
      options={OPTIONS}
      layout="grid"
      onContinue={() => navigate('/registro/2')}
    />
  )
}
