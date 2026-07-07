import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import CrearCuenta from './pages/CrearCuenta'
import Registro1 from './pages/Registro1'
import Registro2 from './pages/Registro2'
import Registro3 from './pages/Registro3'
import ConectarSalud from './pages/ConectarSalud'
import EmberHabla1 from './pages/EmberHabla1'
import EmberHabla2 from './pages/EmberHabla2'
import EmberHabla3 from './pages/EmberHabla3'
import EmberHabla4 from './pages/EmberHabla4'
import OnboardingSaludo1 from './pages/OnboardingSaludo1'
import OnboardingSaludo2 from './pages/OnboardingSaludo2'
import ChequeoSaludo1 from './pages/ChequeoSaludo1'
import ChequeoSaludo2 from './pages/ChequeoSaludo2'
import TestChequeo1 from './pages/TestChequeo1'
import TestChequeo2 from './pages/TestChequeo2'
import TestChequeo3 from './pages/TestChequeo3'
import TestChequeo4 from './pages/TestChequeo4'
import TestChequeo5 from './pages/TestChequeo5'
import TestPerfil1 from './pages/TestPerfil1'
import TestPerfil2 from './pages/TestPerfil2'
import TestPerfil3 from './pages/TestPerfil3'
import TestPerfil4 from './pages/TestPerfil4'
import TestPerfil5 from './pages/TestPerfil5'
import TestPerfil6 from './pages/TestPerfil6'
import TestPerfil7 from './pages/TestPerfil7'
import TestPerfil8 from './pages/TestPerfil8'
import Sincronizar from './pages/Sincronizar'
import Resultado from './pages/Resultado'
import Home from './pages/Home'
import ValidacionCamara from './pages/ValidacionCamara'
import ConfirmarEvidencia from './pages/ConfirmarEvidencia'
import Ranking from './pages/Ranking'
import Bitacora from './pages/Bitacora'
import Novedad from './pages/Novedad'
import Perfil from './pages/Perfil'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/crear-cuenta" element={<CrearCuenta />} />
        <Route path="/registro/1" element={<Registro1 />} />
        <Route path="/registro/2" element={<Registro2 />} />
        <Route path="/registro/3" element={<Registro3 />} />
        <Route path="/registro/salud" element={<ConectarSalud />} />
        <Route path="/ember/habla-1" element={<EmberHabla1 />} />
        <Route path="/ember/habla-2" element={<EmberHabla2 />} />
        <Route path="/ember/habla-3" element={<EmberHabla3 />} />
        <Route path="/ember/habla-4" element={<EmberHabla4 />} />
        <Route path="/onboarding/saludo-1" element={<OnboardingSaludo1 />} />
        <Route path="/onboarding/saludo-2" element={<OnboardingSaludo2 />} />
        <Route path="/chequeo/saludo-1" element={<ChequeoSaludo1 />} />
        <Route path="/chequeo/saludo-2" element={<ChequeoSaludo2 />} />
        <Route path="/onboarding/test/1" element={<TestChequeo1 />} />
        <Route path="/onboarding/test/2" element={<TestChequeo2 />} />
        <Route path="/onboarding/test/3" element={<TestChequeo3 />} />
        <Route path="/onboarding/test/4" element={<TestChequeo4 />} />
        <Route path="/onboarding/test/5" element={<TestChequeo5 />} />
        <Route path="/perfil/test/1" element={<TestPerfil1 />} />
        <Route path="/perfil/test/2" element={<TestPerfil2 />} />
        <Route path="/perfil/test/3" element={<TestPerfil3 />} />
        <Route path="/perfil/test/4" element={<TestPerfil4 />} />
        <Route path="/perfil/test/5" element={<TestPerfil5 />} />
        <Route path="/perfil/test/6" element={<TestPerfil6 />} />
        <Route path="/perfil/test/7" element={<TestPerfil7 />} />
        <Route path="/perfil/test/8" element={<TestPerfil8 />} />
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
    </BrowserRouter>
  )
}

export default App
