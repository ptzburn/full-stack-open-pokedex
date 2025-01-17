const { test, describe, expect, beforeEach } = require('@playwright/test')

describe('Pokedex', () => {
  beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('front page can be opened', async ({ page }) => {
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('user can navigate from the main page to the Ivysaur page', async ({ page }) => {
    const ivysaur = await page.getByText('ivysaur')
    await ivysaur.click()
    const chlorophyll = await page.getByText('chlorophyll')
    await expect(chlorophyll).toBeVisible()
  })
})
