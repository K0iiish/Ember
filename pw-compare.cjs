const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewportSize({ width: 390, height: 844 })

  const routes = [
    { path: '/home',     name: 'home' },
    { path: '/bitacora', name: 'bitacora' },
    { path: '/ranking',  name: 'ranking' },
    { path: '/novedad',  name: 'novedad' },
    { path: '/perfil',   name: 'perfil' },
  ]

  for (const r of routes) {
    await page.goto(`http://localhost:5173${r.path}`)
    await page.waitForTimeout(1000)
    await page.screenshot({ path: `/tmp/screen-${r.name}.png` })

    // Find TabBar bottom edge — look for the fixed div at bottom
    const tabY = await page.evaluate(() => {
      const all = document.querySelectorAll('*')
      for (const el of all) {
        const s = window.getComputedStyle(el)
        if (s.position === 'fixed' && s.bottom === '0px' && s.height !== 'auto') {
          const rect = el.getBoundingClientRect()
          return { top: rect.top, bottom: rect.bottom, height: rect.height }
        }
      }
      return null
    })
    console.log(`${r.name}: TabBar rect =`, JSON.stringify(tabY))
  }

  await browser.close()
})()
