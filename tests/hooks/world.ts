import * as dotenv from 'dotenv';
dotenv.config();
import { Before, After, setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from 'playwright/test';
import { before } from 'node:test';

setDefaultTimeout(60000);

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;   
}

setWorldConstructor(CustomWorld);

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ 
    headless: false,
    args: ['--disable-blink-features=AutomationControlled']
  });
  this.context = await this.browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  });
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld) {
  await this.page.close();
  await this.context.close();
  await this.browser.close();
}); 