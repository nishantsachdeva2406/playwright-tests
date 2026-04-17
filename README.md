# Playwright Cucumber Test Framework

A BDD test automation framework built with Playwright and Cucumber.js for testing the [Sauce Demo Shopify store](https://sauce-demo.myshopify.com).

## Tech Stack

- [Playwright](https://playwright.dev/) - Browser automation
- [Cucumber.js](https://cucumber.io/) - BDD framework
- [TypeScript](https://www.typescriptlang.org/) - Language
- [ts-node](https://typestrong.org/ts-node/) - TypeScript execution

## Project Structure

```
playwright-test/
├── tests/
│   ├── feature/
│   │   └── Login.feature       # BDD feature files
│   ├── hooks/
│   │   └── world.ts            # Cucumber world setup
│   ├── pages/
│   │   └── LoginPage.ts        # Page Object Model
│   └── steps/
│       └── LoginSteps.ts       # Step definitions
├── reports/                    # Generated test reports
├── cucumber.json               # Cucumber configuration
├── playwright.config.ts        # Playwright configuration
├── tsconfig.json
└── .env                        # Environment variables (not committed)
```

## Setup

### Prerequisites

- Node.js >= 16
- npm

### Installation

```bash
git clone <your-repo-url>
cd playwright-test
npm install
npx playwright install chromium
```

### Environment Variables

Create a `.env` file in the project root with the following variables:

```
BASE_URL=https://sauce-demo.myshopify.com/account/login
EMAIL=your-registered-email@example.com
PASSWORD=your-correct-password
WRONG_PASSWORD=any-incorrect-password
```

> ⚠️ Never commit your `.env` file. It is listed in `.gitignore`.

| Variable       | Description                               | Required |
|----------------|-------------------------------------------|----------|
| BASE_URL       | The login page URL of the application     | ✅       |
| EMAIL          | Registered email for valid login test     | ✅       |
| PASSWORD       | Correct password for valid login test     | ✅       |
| WRONG_PASSWORD | Incorrect password for invalid login test | ✅       |

## Running Tests

```bash
# Run all tests
npm run test:cucumber

# Run with Cucumber directly
npx cucumber-js --config cucumber.json
```

## Test Scenarios

### Login Feature

| Scenario                      | Description                                                                 |
|-------------------------------|-----------------------------------------------------------------------------|
| Login with valid credentials  | Enters correct email/password and verifies redirect to account dashboard    |
| Login with invalid credentials| Enters wrong password and verifies error message appears                    |

## Reports

After running tests, an HTML report is generated at:

```
reports/cucumber-report.html
```

Open it in your browser to view detailed results.

## .gitignore

Make sure your `.gitignore` includes the following:

```
.env
node_modules/
reports/
test-results/
playwright-report/
```
