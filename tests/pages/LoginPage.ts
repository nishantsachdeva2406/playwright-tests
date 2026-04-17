import { Page, Locator } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private emailInput: Locator;
  private passwordInput: Locator;
  private signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('#customer_email');
    this.passwordInput = page.locator('#customer_password');
    this.signInButton = page.locator('form#customer_login input[value="Sign In"]');
  }

  async navigate() {
    await this.page.goto(process.env.BASE_URL || '');
  }

  async login(email: string, password: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }

  async clickSignIn() {
  await this.page.waitForTimeout(1000);
  await this.signInButton.hover();
  await this.page.waitForTimeout(500);
  await this.signInButton.click();
  await this.page.waitForLoadState('networkidle');
}

  async getErrorMessage(): Promise<string> {
  await this.page.waitForURL('**/account/login**');
  const errorLocator = this.page.locator('.errors li');
  await errorLocator.waitFor({ state: 'visible', timeout: 15000 });
  return await errorLocator.innerText();
}
}