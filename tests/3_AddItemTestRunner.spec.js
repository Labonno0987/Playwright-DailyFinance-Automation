import { test, expect } from '@playwright/test';
import AddItemPage from '../Pages/AddItem';
import jsonData from '../Resources/userData.json';


  test.beforeEach(async ({ page }) => {
    await page.goto("/");

    const lastUser = jsonData[jsonData.length - 1];
    await page.fill('#email', lastUser.email);
    await page.fill('#password', lastUser.password);
    await page.click('button[type=submit]');
    await page.waitForTimeout(3000);
  });

  test("Add first item with all fields", async ({ page }) => {
    const itemPage = new AddItemPage(page);
    await itemPage.addingItem("Apple", "5", "2025-05-07", "May", "Fresh");
  });

  test('Add second item with only mandatory fields', async ({ page }) => {
    const itemPage = new AddItemPage(page);
    await itemPage.addingItem("Banana", "48", "2025-05-07", "", "");
  });

  test('Check both items in list', async ({ page }) => {
    const firstItem = await page.locator('tbody tr:nth-child(1) td').first().textContent();
    console.log("First item:", firstItem);
    expect(firstItem).toContain("Apple");

    const secondItem = await page.locator('tbody tr:nth-child(2) td').first().textContent();
    console.log("Second item:", secondItem);
    expect(secondItem).toContain("Banana");
  });


