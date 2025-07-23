async function fillLoginForm(page, username, password) {
  await page.fill('#username', username);
  await page.fill('#password', password);
}

async function submitLoginForm(page) {
  await page.click('#submit');
}

module.exports = {
  fillLoginForm,
  submitLoginForm,
};
