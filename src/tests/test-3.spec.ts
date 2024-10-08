import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.locator('.play-control').click();
  await expect(page.locator('.play-control')).toBeVisible();
  await page.locator('path').nth(2).click();
  await page.locator('svg').nth(1).click();
  await page.locator('svg').nth(2).click();
  await page.locator('path').nth(2).click();
  await page.locator('svg').nth(3).click();
  await page.locator('svg').nth(4).click();
  await page.getByRole('slider').nth(1).fill('1');
  await page.locator('.play-control').click();
  await page.locator('.play-control').click();
  await page.locator('path').nth(4).click();
  await page.locator('path').nth(2).click();
  await page.locator('path').nth(2).click();
  await page.locator('path').nth(2).click();
  await page.locator('svg').nth(2).click();
  await page.locator('path').nth(2).click();
  await page.getByRole('slider').fill('66');
  await page.getByText('DaylightAiguille').first().click();
  await page.locator('h2').filter({ hasText: 'Daylight' }).click();
  await page.locator('h3').filter({ hasText: 'Aiguille' }).click();
  await page.getByText('DaylightAiguille').first().click();
  await page.getByRole('button', { name: 'Library' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^ReflectionSwørn$/ })
    .first()
    .click();
  await page.locator('h2').filter({ hasText: 'Reflection' }).click();
  await page.getByText('ReflectionSwørn').first().click();
  await page
    .locator('div')
    .filter({ hasText: /^NightfallAiguille$/ })
    .first()
    .click();
  await page.locator('div:nth-child(4) > img').click();
  await page.locator('div:nth-child(6) > img').click();
  await page.locator('h2').filter({ hasText: 'Under the City Stars' }).click();
  await page.getByText('Under the City StarsAso,').first().click();
  await page
    .locator('h3')
    .filter({ hasText: 'Aso, Middle School, Aviino' })
    .click();
  await page.getByText('Under the City StarsAso,').first().click();
  await page.getByRole('slider').fill('99');
});
