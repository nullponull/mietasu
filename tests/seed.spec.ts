import { test, expect } from '@playwright/test';

test('seed', async ({ page }) => {
  // Navigate to the home page
  await page.goto('http://localhost:3000/');
  
  // Verify the page title
  await expect(page).toHaveTitle(/みえタス/);
  
  // Verify the "View Demo" button exists
  await expect(page.getByRole('link', { name: 'デモ画面を見る' }).first()).toBeVisible();
});
