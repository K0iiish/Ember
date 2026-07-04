import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'

const FONT = 'Montserrat, sans-serif'

export default function DesafioBottomSheet({ desafio, onClose }) {
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const sheetRef = useRef(null)
  const touchStartY = useRef(0)

  useEffect(() => {
    if (desafio) {
      const id = requestAnimationFrame(() => setVisible(true))
      return () => cancelAnimationFrame(id)
    }
  }, [desafio])

  if (!desafio) return null

  const { title, subtitulo, description, xp, progressCurrent, progressTotal, progressPct } = desafio
  const fillW = Math.round((progressPct / 100) * 287)

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  /* Navigate to camera screen, closing the sheet first */
  const handleRegistrar = () => {
    setVisible(false)
    setTimeout(() => {
      onClose()
      navigate('/validacion-camara', { state: { subtitulo: subtitulo ?? `Captura de ${title}` } })
    }, 300)
  }

  const onTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }
  const onTouchMove = (e) => {
    const delta = e.touches[0].clientY - touchStartY.current
    if (delta > 0 && sheetRef.current) {
      sheetRef.current.style.transition = 'none'
      sheetRef.current.style.transform = `translateY(${delta}px)`
    }
  }
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientY - touchStartY.current
    if (!sheetRef.current) return
    sheetRef.current.style.transition = 'transform 300ms ease'
    if (delta > 80) {
      handleClose()
    } else {
      sheetRef.current.style.transform = 'translateY(0)'
    }
  }

  return createPortal(
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        style={{
          position: 'fixed', inset: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          zIndex: 200,
          opacity: visible ? 1 : 0,
          transition: 'opacity 300ms ease',
        }}
      />

      {/* Sheet */}
      <div
        ref={sheetRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          position: 'fixed',
          left: 0, right: 0, bottom: 0,
          backgroundColor: '#19101b',
          border: '1px solid #352e37',
          borderRadius: '30px 30px 0 0',
          zIndex: 201,
          transform: visible ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 300ms ease',
        }}
      >
        {/* Handle indicator */}
        <div style={{
          position: 'absolute',
          left: '50%', top: '11px',
          transform: 'translateX(-50%)',
          width: '95px', height: '5px',
          backgroundColor: '#514e58',
          borderRadius: '100px',
        }} />

        {/* Content — flex column so description length doesn't cause overlap */}
        <div style={{ paddingBottom: '24px' }}>

          {/* Spacer for handle */}
          <div style={{ height: '32px' }} />

          {/* Header row: title (176px) + XP badge (90px) — exact Figma widths */}
          <div style={{
            display: 'flex', alignItems: 'center',
            paddingLeft: '40px', paddingRight: '42px',
          }}>
            <p style={{
              width: '176px', flexShrink: 0,
              fontFamily: FONT, fontWeight: 700, fontSize: '20px',
              letterSpacing: '-0.312px', color: 'white',
              lineHeight: 'normal', margin: 0,
            }}>{title}</p>
            {/* 27px gap matches Figma: badge left(243) - title right(40+176=216) = 27 */}
            <div style={{ marginLeft: '27px', flexShrink: 0 }}>
              <div style={{
                width: '90px', height: '30px',
                backgroundColor: '#26232d',
                borderRadius: '100px',
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: '5px',
              }}>
                <img src="/assets/icon-star-xp.svg" alt="" style={{ width: '14px', height: '14px' }} />
                <p style={{
                  fontFamily: FONT, fontWeight: 500, fontSize: '13px',
                  letterSpacing: '-0.2028px', color: 'white',
                  margin: 0, lineHeight: 'normal', whiteSpace: 'nowrap',
                }}>{xp}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <p style={{
            marginTop: '10px', marginLeft: '40px', marginRight: '40px', marginBottom: 0,
            fontFamily: FONT, fontWeight: 500, fontSize: '14px',
            letterSpacing: '-0.2184px', color: 'white',
            lineHeight: '1.5', wordBreak: 'break-word',
          }}>{description}</p>

          {/* Progress labels + bar */}
          <div style={{
            marginTop: '14px', marginLeft: '43px',
            width: '287px',
            display: 'flex', flexDirection: 'column', gap: '6px',
          }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontFamily: FONT, fontWeight: 500, fontSize: '13px',
            }}>
              <p style={{ margin: 0, color: 'white', whiteSpace: 'nowrap' }}>
                {progressCurrent}
                <span style={{ color: 'rgba(255,255,255,0.5)' }}>{' / '}{progressTotal}</span>
              </p>
              <p style={{ margin: 0, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>{progressPct}%</p>
            </div>
            <div style={{ position: 'relative', height: '6px' }}>
              <div style={{
                position: 'absolute', inset: 0,
                backgroundColor: 'rgba(26,214,207,0.28)',
                borderRadius: '100px',
              }} />
              <div style={{
                position: 'absolute', left: 0, top: 0, bottom: 0,
                width: `${fillW}px`,
                backgroundColor: '#1ad6cf',
                borderRadius: '100px',
              }} />
            </div>
          </div>

          {/* Button — navigates to camera screen */}
          <div
            onClick={handleRegistrar}
            style={{
              margin: '28px 42px 0',
              height: '47px',
              backgroundColor: '#1ad6cf',
              borderRadius: '100px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <p style={{
              fontFamily: FONT, fontWeight: 700, fontSize: '16px',
              color: '#19101b', margin: 0, lineHeight: '24px',
              whiteSpace: 'nowrap',
            }}>Registrar avance</p>
          </div>

        </div>
      </div>
    </>,
    document.body
  )
}
