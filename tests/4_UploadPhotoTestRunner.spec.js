import { test, expect } from '@playwright/test';
import UploadPhotoPage from '../Pages/UploadUserPhoto';
import userData from '../Resources/userData.json';


  test("Upload profile photo and logout", async ({ page }) => {
    await page.goto("/");

    const lastUser = userData[userData.length - 1];
    await page.fill('#email', lastUser.email);
    await page.fill('#password', lastUser.password);
    await page.click('button[type=submit]');


    const uploadPage = new UploadPhotoPage(page);
    await uploadPage.uploadPhoto("Resources/profile_pic.png");
  
  });
