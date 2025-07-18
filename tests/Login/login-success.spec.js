const { test, expect } = require('@playwright/test');
const { login } = require('../../utils/login');

test('Successfull login with valid credentials', async ({ page }) => {
  await login(page);

  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');

});
