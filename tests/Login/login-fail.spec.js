const { test, expect } = require('@playwright/test');
const { expectLoginFailure } = require('../../utils/helpers');

test('Login with invalid credentials shows error message', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'wronguser');
  await page.fill('#password', 'wrongpass');
  await page.click('#submit');

await expectLoginFailure(page);


});
