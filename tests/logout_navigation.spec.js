const { test, expect } = require('@playwright/test');
const { login } = require('../utils');

test.beforeEach(async ({ page }) => {
  await login(page);
});

test('Logout test', async ({ page }) => {
  await page.click('text=Log out');
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
  await expect(page.locator('button#submit')).toBeVisible();
});
