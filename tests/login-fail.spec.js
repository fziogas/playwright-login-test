const { test, expect } = require('@playwright/test');

test('Login with invalid credentials shows error message', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#submit');

    await expect(page.locator('#error')).toHaveText('Your username is invalid!');


});
