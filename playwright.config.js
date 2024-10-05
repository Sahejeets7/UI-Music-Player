// playwright.config.js
// import { devices } from '@playwright/test';

module.exports = {
  testDir: './src/tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: true,

    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
    // Base URL to use in actions like `await page.goto('/')`.
    baseURL: 'http://127.0.0.1:3000',

    // Collect trace when retrying the failed test.await page.goto('http://localhost:3000/');
    trace: 'on-first-retry',

    // Configure projects for major browsers.
    // projects: [
    //   {
    //     name: 'chromium',
    //     use: { ...devices['Desktop Chrome'] },
    //   },
    // ],
  },
};
