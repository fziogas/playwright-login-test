const { test, expect } = require('@playwright/test');

test('check login page title', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  const title = await page.title();
  expect(title).toBe('Test Login | Practice Test Automation');
});
