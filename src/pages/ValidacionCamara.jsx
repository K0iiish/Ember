import { useRef, useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'

export default function ValidacionCamara() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const subtitulo = state?.subtitulo ?? 'Captura previa'

  const videoRef = useRef(null)
  const streamRef = useRef(null)
  const [facingMode, setFacingMode] = useState('environment')

  const startCamera = async (mode) => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop())
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: mode } })
      streamRef.current = stream
      if (videoRef.current) videoRef.current.srcObject = stream
    } catch (err) {
      console.error('Camera error:', err)
    }
  }

  useEffect(() => {
    startCamera('environment')
    return () => { if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop()) }
  }, [])

  const toggleCamera = () => {
    const next = facingMode === 'environment' ? 'user' : 'environment'
    setFacingMode(next)
    startCamera(next)
  }

  const capturePhoto = () => {
    const video = videoRef.current
    if (!video) return
    const canvas = document.createElement('canvas')
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight
    canvas.getContext('2d').drawImage(video, 0, 0)
    const foto = canvas.toDataURL('image/jpeg')
    navigate('/confirmar-evidencia', { state: { subtitulo, foto } })
  }

  return (
    <div style={{
      position: 'fixed', inset: 0,
      backgroundColor: '#19101b',
      overflow: 'hidden',
      fontFamily: FONT,
      display: 'flex', flexDirection: 'column',
    }}>

      {/* Magenta background glow */}
      <div style={{
        position: 'absolute', pointerEvents: 'none',
        width: '515.623px', height: '582.54px',
        left: '-74px', top: '-509px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{ transform: 'rotate(5.78deg)' }}>
          <div style={{ width: '463.775px', height: '538.602px', position: 'relative' }}>
            <div style={{ position: 'absolute', inset: '-18.57% -21.56%' }}>
              <img alt="" src="/assets/glow-ellipse-magenta.svg"
                style={{ display: 'block', width: '100%', height: '100%', maxWidth: 'none' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Back arrow */}
      <button onClick={() => navigate(-1)} style={{
        position: 'absolute', left: '20px', top: '56px',
        background: 'none', border: 'none', cursor: 'pointer', padding: '8px',
        display: 'flex', alignItems: 'center',
        zIndex: 10,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 19L8 12L15 5"
            stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Title */}
      <p style={{
        position: 'absolute', left: '50%', top: '90px',
        transform: 'translateX(-50%)', width: '159px',
        fontWeight: 700, fontSize: '16px',
        color: 'white', textAlign: 'center', lineHeight: 'normal', margin: 0,
        zIndex: 10,
      }}>Validación desafío</p>

      {/* Subtitle */}
      <p style={{
        position: 'absolute', left: '50%', top: '120px',
        transform: 'translateX(-50%)', width: '310px',
        fontWeight: 500, fontSize: '14px',
        color: 'rgba(255,255,255,0.8)', textAlign: 'center', lineHeight: 'normal', margin: 0,
        zIndex: 10,
      }}>{subtitulo}</p>

      {/* Description */}
      <p style={{
        position: 'absolute', left: '50%', top: '141px',
        transform: 'translateX(-50%)', width: '310px',
        fontWeight: 400, fontSize: '12px',
        color: 'rgba(255,255,255,0.58)', textAlign: 'center', lineHeight: 'normal', margin: 0,
        zIndex: 10,
      }}>Este desafío se cuantificará con tu app Health.</p>

      {/* Teal border */}
      <div style={{
        position: 'absolute', left: 0, right: 0, top: '174px',
        height: '3px',
        backgroundColor: 'rgba(55,190,176,0.5)',
        zIndex: 10,
      }} />

      {/* Live camera feed */}
      <div style={{
        position: 'absolute', left: 0, right: 0,
        top: '174px', bottom: '165px',
        backgroundColor: '#0d0d0d',
        overflow: 'hidden',
      }}>
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>

      {/* Bottom bar */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0, height: '165px',
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Flip camera button (left side) */}
        <button
          onClick={toggleCamera}
          style={{
            position: 'absolute', left: '52px',
            width: '44px', height: '44px', borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M20 7H4M4 7l4-4M4 7l4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M4 17h16M16 13l4 4M16 21l4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Shutter button */}
        <div
          onClick={capturePhoto}
          style={{
            width: '72px', height: '72px', cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '3px solid white',
          }} />
          <div style={{
            position: 'absolute', inset: '4px', borderRadius: '50%',
            backgroundColor: 'white',
          }} />
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'absolute', bottom: '8px', left: '50%',
          transform: 'translateX(-50%)',
          width: '134px', height: '5px',
          backgroundColor: 'rgba(255,255,255,0.38)',
          borderRadius: '100px',
        }} />
      </div>
    </div>
  )
}
