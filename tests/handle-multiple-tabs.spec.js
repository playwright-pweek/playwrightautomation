import { expect, test } from "@playwright/test";
const { login } = require("../tests/manager-login.spec.js"); // Import the login function from the other file
const extendTimeout = { timeout: 60000 };

test("working with multiple tabs", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  await login({ page }); // Calls the login function

  await page.goto(
    "https://narender2845.buildiumstaging.com/manager/app/reports/Financials/AccountsReceivableSummary?reportId=72"
  );

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator("//a[contains(text(),'Help article')]", extendTimeout).click(),
  ]);
  console.log("Navigated to:", await newPage.url());
  await expect(newPage).toHaveURL("https://help.buildium.com/hc/s/article/Accounts-Receivable-Summary", extendTimeout); // checking the URL of the new page in another tab
});
