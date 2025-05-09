import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://sabithatesting1.buildiumstaging.com/manager/app/homepage/dashboard');
    await page.locator('#emailAddressInput').fill('admin:sabita.suggala@buildium.com');
    await page.locator('#passwordInput').fill('Buildium@123');

    // await page.getByRole('button', { name: 'Sign in' }).waitFor({ state: 'visible' });
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await page.waitForTimeout(10000);

    await page.getByText('Edit', { exact: true }).click();
    //await page.locator('text=Sign In').click

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle("/homepage/dashboard");
});