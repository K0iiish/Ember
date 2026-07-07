import { useNavigate } from 'react-router-dom'
import EmberHablaLayout from '../components/EmberHablaLayout'

export default function EmberPostTest1() {
  const navigate = useNavigate()

  return (
    <EmberHablaLayout
      bubbles={['Wow sin duda debe ser complicado ser un heroe como tú']}
      onContinue={() => navigate('/ember/post-test/2')}
    />
  )
}
