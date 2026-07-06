import { useNavigate } from 'react-router-dom'
import EmberHablaLayout from '../components/EmberHablaLayout'

export default function EmberHabla2() {
  const navigate = useNavigate()

  return (
    <EmberHablaLayout
      bubbles={['Tu progreso hará crecer esta llama semana a semana.']}
      onContinue={() => navigate('/ember/habla-3')}
    />
  )
}
