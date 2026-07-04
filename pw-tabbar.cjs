const { chromium } = require('playwright')

;(async () => {
  const browser = await chromium.launch({ headless: true })
  const page = await browser.newPage()
  await page.setViewportSize({ width: 390, height: 844 })

  const routes = ['/home', '/bitacora', '/ranking', '/novedad', '/perfil']
  
  for (const r of routes) {
    await page.goto(`http://localhost:5173${r}`)
    await page.waitForTimeout(800)
    
    // Find the TabBar specifically by height=94
    const tabRect = await page.evaluate(() => {
      const all = document.querySelectorAll('*')
      for (const el of all) {
        const rect = el.getBoundingClientRect()
        const s = window.getComputedStyle(el)
        // Look for the TabBar: fixed, bottom 0, height ~94
        if (s.position === 'fixed' && Math.round(rect.height) === 94) {
          return { top: Math.round(rect.top), bottom: Math.round(rect.bottom), name: el.tagName, classes: el.className }
        }
      }
      return null
    })
    console.log(`${r}: TabBar =`, JSON.stringify(tabRect))
  }

  await browser.close()
})()
