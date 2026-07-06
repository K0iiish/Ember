import { useNavigate } from 'react-router-dom'
import RegistroLayout from '../components/RegistroLayout'

const OPTIONS = [
  { title: 'Alta disponibilidad' },
  { title: '3 - 4 turnos por semana' },
  { title: '1 - 2 turnos por semana' },
  { title: 'Disponibilidad parcial' },
]

export default function Registro3() {
  const navigate = useNavigate()
  return (
    <RegistroLayout
      step={3}
      title="¿Con que frecuencia participas en turnos o servicios?"
      subtitle="Esto nos ayuda a adaptar tus desafios a tu contexto operativo."
      options={OPTIONS}
      layout="list"
      onContinue={() => navigate('/registro/salud')}
      subtitleTop={287}
      contentTop={346}
      showEditNote
    />
  )
}
