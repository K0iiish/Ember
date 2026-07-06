import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import TabBar from './components/TabBar'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import OnboardingSaludo1 from './pages/OnboardingSaludo1'
import OnboardingSaludo2 from './pages/OnboardingSaludo2'
import ChequeoSaludo1 from './pages/ChequeoSaludo1'
import ChequeoSaludo2 from './pages/ChequeoSaludo2'
import TestChequeo1 from './pages/TestChequeo1'
import TestChequeo2 from './pages/TestChequeo2'
import TestChequeo3 from './pages/TestChequeo3'
import TestChequeo4 from './pages/TestChequeo4'
import TestChequeo5 from './pages/TestChequeo5'
import Sincronizar from './pages/Sincronizar'
import Resultado from './pages/Resultado'
import Home from './pages/Home'
import ValidacionCamara from './pages/ValidacionCamara'
import ConfirmarEvidencia from './pages/ConfirmarEvidencia'
import Ranking from './pages/Ranking'
import Bitacora from './pages/Bitacora'
import Novedad from './pages/Novedad'
import Perfil from './pages/Perfil'

const TAB_ROUTES = ['/home', '/bitacora', '/ranking', '/novedad', '/perfil']

function AppTabBar() {
  const { pathname } = useLocation()
  if (!TAB_ROUTES.includes(pathname)) return null
  return <TabBar />
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding/saludo-1" element={<OnboardingSaludo1 />} />
        <Route path="/onboarding/saludo-2" element={<OnboardingSaludo2 />} />
        <Route path="/chequeo/saludo-1" element={<ChequeoSaludo1 />} />
        <Route path="/chequeo/saludo-2" element={<ChequeoSaludo2 />} />
        <Route path="/onboarding/test/1" element={<TestChequeo1 />} />
        <Route path="/onboarding/test/2" element={<TestChequeo2 />} />
        <Route path="/onboarding/test/3" element={<TestChequeo3 />} />
        <Route path="/onboarding/test/4" element={<TestChequeo4 />} />
        <Route path="/onboarding/test/5" element={<TestChequeo5 />} />
        <Route path="/onboarding/sincronizar" element={<Sincronizar />} />
        <Route path="/onboarding/resultado" element={<Resultado />} />
        <Route path="/home" element={<Home />} />
        <Route path="/validacion-camara" element={<ValidacionCamara />} />
        <Route path="/confirmar-evidencia" element={<ConfirmarEvidencia />} />
        <Route path="/ranking" element={<Ranking />} />
        <Route path="/bitacora" element={<Bitacora />} />
        <Route path="/novedad" element={<Novedad />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
      <AppTabBar />
    </BrowserRouter>
  )
}

export default App
