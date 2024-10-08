//@ts-nocheck
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByText('VibesLibrary').click();
  await page.getByText('Beaver CreekAso, Middle').first().click();
});
await page.getByRole('button', { name: 'Lirary' }).click();
await page
  .locator('div')
  .filter({ hasText: /^DaylightAiguille$/ })
  .first()
  .click();
await page.getByRole('slider').fill('31');
await expect(page.getByText('VibesLibrary')).toBeVisible();
await expect(page.getByRole('navigation')).toContainText('Vibes');
await page.locator('img').first().click();
await expect(page.getByText('DaylightAiguille').first()).toBeVisible();
await expect(page.getByText('0:312:')).toBeVisible();
await expect(page.getByText('DaylightAiguille').first()).toBeVisible();
await expect(page.locator('img').first()).toBeVisible();
await expect(page.getByRole('button', { name: 'Library' })).toBeVisible();
await expect(page.getByRole('button')).toContainText('Library');
await page
  .locator('div')
  .filter({ hasText: /^Beaver CreekAso, Middle School, Aviino$/ })
  .first()
  .click();
await expect(
  page
    .locator('div')
    .filter({ hasText: /^Beaver CreekAso, Middle School, Aviino$/ })
    .nth(1),
).toBeVisible();
await expect(
  page
    .locator('div')
    .filter({ hasText: /^DaylightAiguille$/ })
    .first(),
).toBeVisible();
await expect(
  page
    .locator('div')
    .filter({ hasText: /^Keep GoingSwørn$/ })
    .first(),
).toBeVisible();
await expect(
  page
    .locator('div')
    .filter({ hasText: /^NightfallAiguille$/ })
    .first(),
).toBeVisible();
await expect(
  page
    .locator('div')
    .filter({ hasText: /^ReflectionSwørn$/ })
    .first(),
).toBeVisible();
await expect(
  page
    .locator('div')
    .filter({ hasText: /^Under the City StarsAso, Middle School, Aviino$/ })
    .first(),
).toBeVisible();
await expect(
  page.locator('h3').filter({ hasText: 'Aso, Middle School, Aviino' }),
).toBeVisible();
await expect(
  page.locator('h2').filter({ hasText: 'Beaver Creek' }),
).toBeVisible();
await expect(page.getByRole('heading', { name: 'Library' })).toBeVisible();
await page.getByRole('heading', { name: 'Library' }).click();
await page.getByRole('heading', { name: 'Library' }).click();
await expect(page.getByRole('heading', { name: 'Library' })).toBeVisible();
await expect(page.getByText(':00')).toBeVisible();
await page.getByText(':17').click();
await expect(page.getByText(':17')).toBeVisible();
await expect(page.getByText('0:002:')).toBeVisible();
await expect(page.locator('#root')).toBeVisible();
await expect(
  page.locator('div').filter({ hasText: '0:002:' }).nth(2),
).toBeVisible();
await expect(
  page.locator('h3').filter({ hasText: 'Beaver Creek' }),
).toBeVisible();
await expect(
  page.getByRole('heading', { name: 'Aso, Middle School, Aviino' }).nth(1),
).toBeVisible();
await expect(page.getByRole('heading', { name: 'Daylight' })).toBeVisible();
await expect(
  page.getByRole('heading', { name: 'Aiguille' }).first(),
).toBeVisible();
await expect(page.getByRole('heading', { name: 'Nightfall' })).toBeVisible();
await expect(page.getByRole('heading', { name: 'Reflection' })).toBeVisible();
await expect(
  page.getByRole('heading', { name: 'Under the City Stars' }),
).toBeVisible();

await expect(page.locator('.play-control')).toBeVisible();
await page.locator('path').nth(2).click();
