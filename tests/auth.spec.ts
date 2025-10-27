import { test, expect } from '@playwright/test';
import { setUncaughtExceptionCaptureCallback } from 'node:process';

test('login', async ({ page }) => {
  await page.goto('http://localhost:5174/');

  const login = page.getByText("Log in")
  await login.click()
  //redirect to kinde login
  await expect(page).toHaveTitle("Sign in | Altacios");
  //email
  const email = page.getByRole("textbox")
  await email.fill("kottitanoubi-2619@yopmail.com")
  const continueBtn = page.getByRole('button', { name: 'Continue' })
  await continueBtn.click()
  //redirect to password page
  await expect(page).toHaveTitle("Verify password | Altacios");

  //password
  const password = page.getByRole("textbox")
  await password.fill("helloandgoodbye43")
  await continueBtn.click()
  //tasks page
  const title = page.getByRole("heading", {name: "Tasks"})
  await expect(title).toBeVisible({timeout: 15000})

});

// test('logout', async ({ page }) => {
//   await page.goto('http://localhost:5174/');

//   const login = page.getByText("Log in")
//   await login.click()
//   //redirect to kinde login
//   await expect(page).toHaveTitle("Sign in | Altacios");
//   //email
//   const email = page.getByRole("textbox")
//   await email.fill("breifripremula-7967@yopmail.com")
//   const continueBtn = page.getByRole('button', { name: 'Continue' })
//   await continueBtn.click()
//   //redirect to password page
//   await expect(page).toHaveTitle("Verify password | Altacios");

//   //password
//   const password = page.getByRole("textbox")
//   await password.fill("amaterasu!1")
//   await continueBtn.click()
//   //tasks page
//   const title = page.getByRole("heading", {name: "Tasks"})
//   await expect(title).toBeVisible({timeout: 15000})

//   //logout
//   const logoutBtn = page.getByRole('button', { name: 'Log out' })
  
//   const noLoginTitle = page.getByRole("paragraph", {name: "You will be redirected to a third-party service to authenticate"})
//   await expect(noLoginTitle).toBeVisible({timeout: 15000})

// });

