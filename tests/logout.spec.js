const { test, expect } = require('@playwright/test');
const { login } = require('../utils');

test.beforeEach(async ({ page }) => {
  await login(page);
});

test('Logout after successful login', async ({ page }) => {
  await page.click('text=Log out');
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});