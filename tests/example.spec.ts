npx playwright testimport { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://twwebsitev2staging.gatsbyjs.io/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/twwebsite/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://twwebsitev2staging.gatsbyjs.io/contact');

  // Click the get started link.
  await page.getByRole('link', { name: 'contact' }).click();

  // Expects the URL to contain contact.
  await expect(page).toHaveURL(/.*contact/);
});
