import { test, expect } from '@playwright/test';

test('Navigate to the Contact form and Leave all fields blank and try submitting the form then Verify that validation errors are displayed.', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  //click on contact link
  await page.locator('[data-test="nav-contact"]').click();
  //leave all fields blank and submit the form
  await page.locator('[data-test="contact-submit"]').click();
  //verify validation errors are displayed
  const errors = [
  'First name is required',
  'Last name is required',
  'Email is required',
  'Message is required'
];

for (const error of errors) {
  await expect(page.getByText(error)).toBeVisible();
}

});