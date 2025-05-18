import {test , expect} from "@playwright/test";
import jsonData from "../Resources/userData.json";
import Login from "../Pages/Login";

test("User Login"   , async ({page})=> {

    await page.goto("/");
    const latestUser =  jsonData[jsonData.length -1];
    const login = new Login(page);
    await login.doLogin( latestUser.email , latestUser.password  );
    await expect( page.getByText("Dashboard")  ).toBeVisible( { timeout : 20000 } );
}  )

test("Negative Test: Login with Invalid Email", async ({ page }) => {
  await page.goto("/");

  const latestUser = jsonData[jsonData.length - 1];
  const login = new Login(page);
  const invalidEmail = latestUser.email+"invalid";
  await login.doLogin(invalidEmail, latestUser.password);
  const errorMsg = page.locator("p.MuiTypography-root.MuiTypography-body1.css-xv13ao");
  await expect(errorMsg).toContainText("Invalid email or password", { timeout: 10000 });
})