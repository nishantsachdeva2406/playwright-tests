import { Given, When, Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { CustomWorld } from '../hooks/world'
import { LoginPage } from '../pages/LoginPage'

let loginPage: LoginPage

Given('the user is on homepage', async function (this: CustomWorld) {
  await this.page.goto(`${process.env.BASE_URL}`)
  loginPage = new LoginPage(this.page)
})

When('the user enter valid credentials', async function (this: CustomWorld) {
  await loginPage.login(
    process.env.EMAIL || '',
    process.env.PASSWORD || ''
  )
})

When('the user click on signin button', async function (this: CustomWorld) {
  await loginPage.clickSignIn()
})

Then('the user should see Homepage', async function (this: CustomWorld) {
  const currentURL = this.page.url()
  expect(currentURL).toMatch(/\/account(?!\/login)/)
})

When('the user enter invalid credentials', async function (this: CustomWorld) {
  await loginPage.login(
    process.env.EMAIL || '',
    process.env.WRONG_PASSWORD || ''
  )
})

Then('the user should see error message', async function (this: CustomWorld) {
  const errorMessage = await loginPage.getErrorMessage()
  expect(errorMessage).toContain('Incorrect email or password')
})