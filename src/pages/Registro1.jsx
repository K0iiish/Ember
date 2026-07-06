import { useNavigate } from 'react-router-dom'
import RegistroLayout from '../components/RegistroLayout'

// Inline SVG icons — one per profession
function IcoBombero() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 22c0-6.627 5.373-12 12-12s12 5.373 12 12" />
      <path d="M3 22h30" />
      <path d="M10 22v4a2 2 0 002 2h12a2 2 0 002-2v-4" />
      <path d="M18 10V7" />
      <path d="M14 8.5C14 7 16 5 18 5s4 2 4 3.5" />
      <circle cx="18" cy="19" r="2" />
    </svg>
  )
}

function IcoRescatista() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 20c0-7.18 5.82-13 13-13s13 5.82 13 13" />
      <path d="M2 20h32" />
      <path d="M9 20v5a2 2 0 002 2h14a2 2 0 002-2v-5" />
      <path d="M12 20v-3" />
      <path d="M24 20v-3" />
      <path d="M18 7V4" />
    </svg>
  )
}

function IcoResidente() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8a4 4 0 014-4h0a4 4 0 014 4v8" />
      <path d="M12 16a6 6 0 006 6" />
      <circle cx="24" cy="24" r="4" />
      <path d="M24 20v4l2 2" />
    </svg>
  )
}

function IcoParamedico() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 4l3.5 7 7.5 1-5.5 5.5 1.5 7.5L18 22l-7 3.5 1.5-7.5L7 12.5l7.5-1L18 4z" />
      <line x1="18" y1="14" x2="18" y2="22" />
      <line x1="14" y1="18" x2="22" y2="18" />
    </svg>
  )
}

function IcoSamu() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="14" width="24" height="14" rx="2" />
      <path d="M26 20h4a2 2 0 012 2v4a2 2 0 01-2 2h-4" />
      <path d="M8 28a3 3 0 106 0" />
      <path d="M22 28a3 3 0 106 0" />
      <path d="M2 20h24" />
      <path d="M14 14V8h8l4 6" />
      <line x1="17" y1="10" x2="17" y2="18" />
      <line x1="13" y1="14" x2="21" y2="14" />
    </svg>
  )
}

function IcoOtro() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 8a4 4 0 018 0c0 3-4 5-4 10" />
      <circle cx="18" cy="27" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const OPTIONS = [
  { title: 'Bombero',    icon: <IcoBombero /> },
  { title: 'Rescatista', icon: <IcoRescatista /> },
  { title: 'Residente',  icon: <IcoResidente /> },
  { title: 'Paramédico', icon: <IcoParamedico /> },
  { title: 'SAMU',       icon: <IcoSamu /> },
  { title: 'Otro',       icon: <IcoOtro /> },
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
