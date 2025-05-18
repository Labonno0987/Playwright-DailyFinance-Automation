import { test, expect } from '@playwright/test';
import jsonData from '../Resources/userData.json';
import fs from 'fs'; 
import ResetPassword from '../Pages/ResetPassword.js';
import {getEmailRead} from '../Utils/utils.js';

test("Negative Case: Reset Password with Empty Field", async ({ page }) => {
  await page.goto("/");
  await page.click('text=Reset it here');

  const resetPage = new ResetPassword(page);
  await resetPage.doResetPass("");
  const emailInput = page.locator('input');;
  await expect(emailInput).toBeVisible();
  await emailInput.focus();
  await page.keyboard.press('Tab');

  const validationMessage = await emailInput.evaluate(el => el.validationMessage);
  console.log("Validation Message:", validationMessage);
  expect(validationMessage).toContain("Please fill out this field");
});


test("Negative Testcase: Reset password with invalid email format", async ({ page }) => {
  await page.goto("/");
  await page.click('text=Reset it here');

  const resetPass = new ResetPassword(page);
  await resetPass.doResetPass("invalidemail@gmail.com"); 
  await expect(page.locator('text=Your email is not registered')).toBeVisible();
});


test("Negative Testcase: Set new password with mismatched confirmation", async ({ page }) => {
  await page.goto("https://dailyfinance.roadtocareer.net/reset-password?token=dd7acf536d6ccbbe52174ef2a0eb7b876ebe10ed932f5bc9d202da3246071732"); // or use real resetLink if needed

  const resetPass = new ResetPassword(page);
  await resetPass.doChangeAndConfirmPass("12345", "543");
  await expect(page.locator('text=Passwords do not match')).toBeVisible();
});

test("Click Reset Link with Valid Email",async({page})=>{
    await page.goto("/");
     await page.click('text=Reset it here');
    const resetPass = new ResetPassword(page);

    const latestUser =  jsonData[jsonData.length -1];

    await resetPass.doResetPass(latestUser.email);
    
})
test("Check if password is reset successfully",async({request, page })=>{

      await page.waitForTimeout(20000);
      const mailBody = await getEmailRead({ request });

 
      const resetLink = mailBody.split(" ").find(word => word.startsWith("https://"));
      if (!resetLink) {
      throw new Error('Reset link not found in email body.');
  }

      console.log('Reset Link:', resetLink);

      await page.goto(resetLink);
      await page.waitForTimeout(20000);

      const doSetPass = new ResetPassword(page);
      const newPassword = "12345";
      await doSetPass.doChangeAndConfirmPass(newPassword,newPassword);

      const latestUser = jsonData[jsonData.length - 1];
      latestUser.password = newPassword;

      fs.writeFileSync("./Resources/userData.json", JSON.stringify(jsonData, null, 2));

})


