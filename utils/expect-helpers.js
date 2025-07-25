const { expect } = require('@playwright/test');

async function expectLoginSuccess(page) {
  await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
  await expect(page.locator('h1')).toHaveText('Logged In Successfully');
}

async function expectLoginFailure(page) {
  await expect(page.locator('#error')).toBeVisible();
}

module.exports = {
  expectLoginSuccess,
  expectLoginFailure,
};
