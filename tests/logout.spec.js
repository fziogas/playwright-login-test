const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    });

test('Logout after successful login', async ({ page }) => {
  await page.fill('#username', 'student');
  await page.fill('#password', 'Password123');
  await page.click('#submit');

  await page.click('text=Log out');
  
  await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/');
});
