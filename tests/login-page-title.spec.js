const { test, expect } = require('@playwright/test');

test('check login page title', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await expect(page).toHaveTitle('Test Login | Practice Test Automation');
});
