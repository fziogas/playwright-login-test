# Playwright Login Test

This project contains automated tests written with Playwright to verify the login and logout functionality on a demo website. The purpose of this project is to practice Playwright testing skills and improve automation experience.

This project is developed and tested on a Windows PC environment using Node.js and Playwright.

## Tests included

- Login page title verification
- Successful login with valid credentials
- Failed login with invalid credentials
- Logout after successful login
- Logout navigation test with setup and teardown

## How to run the tests

1. Make sure you have Node.js installed on your system.
2. Clone this repository.
3. Run `npm install` to install dependencies.
4. Run `npx playwright install` to install browsers.
5. Execute `npm test` to run all tests.

## Notes

- The tests run using Playwright Test Runner.
- Tests use a utility function for login to avoid repeating code.
- The project ignores `node_modules` and test results folders from GitHub.

---

Created for personal practice and learning purposes.
