const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');
});

test('Logout test', async ({ page }) => {
  await page.click('text=Log out');
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
  await expect(page.locator('button#submit')).toBeVisible();
});
