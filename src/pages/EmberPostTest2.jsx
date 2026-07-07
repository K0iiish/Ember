import { useNavigate } from 'react-router-dom'
import EmberHablaLayout from '../components/EmberHablaLayout'

export default function EmberPostTest2() {
  const navigate = useNavigate()

  return (
    <EmberHablaLayout
      bubbles={['Ahora que nos conocemos mejor, dejame crearte algunos desafios semanales.']}
      onContinue={() => navigate('/onboarding/saludo-1')}
    />
  )
}
