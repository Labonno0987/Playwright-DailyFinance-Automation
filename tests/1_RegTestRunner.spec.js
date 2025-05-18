import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import jsonData from "../Resources/userData.json";
import fs from 'fs';
import RegistrationPage from "../Pages/Registration";
import {randomNo} from "../Utils/utils.js";
import { getEmailList, getEmailRead } from '../Utils/utils.js';

test("User Registration", async({page,request})=>{
    await page.goto("/");
    
    const reg=new RegistrationPage(page);

    const userModel={
        fName:faker.person.firstName(),
        lName:faker.person.lastName(),
        email:"ayatahmed012345+"+randomNo(10000,99999)+"@gmail.com",
        password:"123g",
        phnNo:"019"+randomNo(10000000,99999999),
        address:faker.location.city(),
    }

    await reg.registration(userModel);
    
    const toastlocator =page.locator(".Toastify__toast");
    toastlocator.waitFor({timeout:20000});
    const toastMsg=await toastlocator.textContent();
    expect(toastMsg).toContain("successfully");

   jsonData.push(userModel);
   fs.writeFileSync("./Utils/userData.json",JSON.stringify(jsonData,null,2));

   await new Promise(r => setTimeout(r, 40000));
   await getEmailList({ request: page.request });
   const mailBody = await getEmailRead({ request: page.request });
   expect(mailBody).toContain("Welcome to our platform!");
   console.log("Email body fetched from Gmail API:", mailBody)

})

test("Negative Test: User Registration with Invalid Email ", async ({ page}) => {
  
    await page.goto("/");

  const reg = new RegistrationPage(page);

  const invalidUserModel = {
        fName:faker.person.firstName(),
        lName:faker.person.lastName(),
        email:"hgdhasg@mnjg",
        password:"123g",
        phnNo:"019"+randomNo(10000000,99999999),
        address:faker.location.city(),       
  };

  await reg.registrationInvalidMail(invalidUserModel);

    const toastlocator =page.locator(".Toastify__toast");
    toastlocator.waitFor({timeout:20000});
    const toastMsg=await toastlocator.textContent();
    expect(toastMsg).toContain("Only Gmail addresses are accepted.");
});

