import { test, expect } from "@playwright/test";
const extendTimeout = { timeout: 60000 };

async function login({ page }) {
  await page.goto("https://narender2845.buildiumstaging.com/manager");
  await page.locator("#emailAddressInput").type("admin:narenderreddy.patlolla@buildium.com");
  await page.locator("#passwordInput").type("Narender@2845");
  await page.locator("[bd-i18n='Public.Login.Login.SignInButton']").click();
  await page.locator("[bd-i18n='Public.Login.AdminAccessLevelPrompt.AccessLevel.Edit']", extendTimeout).click();
  await expect(page).toHaveURL(/dashboard/, extendTimeout);
}

module.exports = { login };
