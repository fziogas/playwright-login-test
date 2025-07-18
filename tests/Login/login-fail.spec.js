const { test, expect } = require('@playwright/test');
const { fillLoginForm, submitLoginForm, expectLoginFailure } = require('../../utils/helpers');

test('Login with invalid credentials shows error message', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await fillLoginForm(page, 'wronguser', 'wrongpass');
  await submitLoginForm(page);

  await expectLoginFailure(page);
});
