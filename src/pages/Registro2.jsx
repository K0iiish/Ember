import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import RegistroLayout from '../components/RegistroLayout'

const FONT = 'Montserrat, sans-serif'

function formatServicio(meses) {
  if (meses === 0) return { value: '0', unit: 'meses' }
  if (meses < 12) return { value: String(meses), unit: meses === 1 ? 'mes' : 'meses' }
  const años = Math.floor(meses / 12)
  return { value: String(años), unit: años === 1 ? 'año' : 'años' }
}

export default function Registro2() {
  const navigate = useNavigate()
  const [compania, setCompania]   = useState('')
  const [servicio, setServicio]   = useState(6)   // months

  const canContinue = compania.trim().length > 0
  const { value, unit } = formatServicio(servicio)

  return (
    <RegistroLayout
      step={2}
      title="Cuéntanos de tu compañía"
      subtitle="Esto nos ayuda a adaptar tus desafios a tu contexto operativo."
      layout="custom"
      canContinue={canContinue}
      onContinue={() => navigate('/registro/3')}
      titleTop={205}
      subtitleTop={255}
      contentTop={314}
      showEditNote
      centerTitle
    >
      <style>{`
        .reg2-input::placeholder { color: #675973; opacity: 1; }
        .reg2-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 4px; border-radius: 2px; outline: none; cursor: pointer; }
        .reg2-slider::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 22px; height: 22px; border-radius: 50%; background: #fff; box-shadow: 0 0 4px rgba(0,0,0,0.4); cursor: pointer; }
        .reg2-slider::-moz-range-thumb { width: 22px; height: 22px; border-radius: 50%; background: #fff; border: none; cursor: pointer; }
      `}</style>

      {/* Label: compañía */}
      <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: 0, paddingLeft: '15px', paddingRight: '19px' }}>
        Nombre tu compañía o unidad
      </p>

      {/* Text field */}
      <div style={{
        margin: '10px 15px 0', height: '65px',
        backgroundColor: '#22192d', borderRadius: '8px', overflow: 'hidden',
        display: 'flex', alignItems: 'center',
      }}>
        <input
          type="text"
          value={compania}
          onChange={e => setCompania(e.target.value)}
          placeholder="Ej: 18ª Compañía de Vitacura"
          className="reg2-input"
          style={{
            fontFamily: FONT, fontSize: '14px', color: 'white',
            background: 'transparent', border: 'none', outline: 'none',
            width: '100%', height: '100%', padding: '0 19px',
            letterSpacing: '0.4667px',
          }}
        />
      </div>

      {/* Tiempo de servicio header */}
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '24px 16px 0', boxSizing: 'border-box' }}>
        <p style={{ fontFamily: FONT, fontWeight: 500, fontSize: '15px', color: 'rgba(255,255,255,0.8)', margin: 0 }}>
          Tiempo de servicio
        </p>
        <p style={{ fontFamily: FONT, margin: 0, lineHeight: 1 }}>
          <span style={{ fontWeight: 600, fontSize: '32px', color: '#51fbea' }}>{value}</span>
          {' '}
          <span style={{ fontWeight: 500, fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>{unit}</span>
        </p>
      </div>

      {/* Slider */}
      <div style={{ padding: '12px 16px 0', boxSizing: 'border-box' }}>
        <input
          type="range"
          min={0}
          max={120}
          value={servicio}
          onChange={e => setServicio(Number(e.target.value))}
          className="reg2-slider"
          style={{
            background: `linear-gradient(to right, #51fbea ${servicio / 120 * 100}%, rgba(120,120,128,0.2) ${servicio / 120 * 100}%)`,
          }}
        />
      </div>

      {/* Min/max labels */}
      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 16px 0', boxSizing: 'border-box' }}>
        <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>0 Meses</span>
        <span style={{ fontFamily: FONT, fontWeight: 500, fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>10 + años</span>
      </div>
    </RegistroLayout>
  )
}
