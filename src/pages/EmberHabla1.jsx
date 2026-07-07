import { useNavigate } from 'react-router-dom'
import EmberHablaLayout from '../components/EmberHablaLayout'

export default function EmberHabla1() {
  const navigate = useNavigate()

  return (
    <EmberHablaLayout
      bubbles={['Hola, soy Ember']}
      onContinue={() => navigate('/ember/habla-2')}
    />
  )
}
