async function login(page, username = 'student', password = 'Password123') {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.fill('#username', username);
  await page.fill('#password', password);
  await page.click('#submit');
}

module.exports = { login };
