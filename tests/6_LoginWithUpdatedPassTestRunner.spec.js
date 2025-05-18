import { test, expect } from '@playwright/test';
import jsonData from '../Resources/userData.json';
import Login from "../Pages/Login";

test('Login with latest registered user', async ({ page }) => {
    await page.goto("/");
    const latestUser =  jsonData[jsonData.length -1];
    const login = new Login(page);
    await login.doLogin( latestUser.email , latestUser.password  );
    await expect( page.getByText("Dashboard")  ).toBeVisible( { timeout : 30000 } );
});
