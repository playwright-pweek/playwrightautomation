import { expect, test } from "@playwright/test";
import { ai } from "@zerostep/playwright";
test("test", async ({ page }) => {
    test.setTimeout(60_000); // Set the timeout for the test to 60 seconds
    const aiArgs = { page, test };
    await ai("Navigate to 'https://narender2845.buildiumstaging.com/manager' URL", aiArgs);
    await page.waitForTimeout(3_000);
    await ai("Enter 'admin:narenderreddy.patlolla@buildium.com' as Email address", aiArgs);
    await ai("Enter 'Narender@2845' as Password", aiArgs);
    await ai(`Click on the Sign In button`, aiArgs);
    await page.waitForTimeout(8_000);
    await ai(`Click on the Edit button`, aiArgs);
    await page.waitForTimeout(8_000);
    const result = await ai(`Verify that the text "Good afternoon" is visible on the dashboard page.`, aiArgs);
    console.log("Result: ", result);
    expect(result).toEqual(true);

});