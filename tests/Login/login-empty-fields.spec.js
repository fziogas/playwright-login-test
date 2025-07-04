const { test, expect } = require('@playwright/test');
const {
  fillLoginForm,
  submitLoginForm,
  expectLoginFailure,
} = require('../../utils/helpers');

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
});

test('Login fails with empty username', async ({ page }) => {
  await fillLoginForm(page, '', 'Password123');
  await submitLoginForm(page);
  await expectLoginFailure(page);
});

test('Login fails with empty password', async ({ page }) => {
  await fillLoginForm(page, 'student', '');
  await submitLoginForm(page);
  await expectLoginFailure(page);
});
