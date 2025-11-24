import { test, expect } from '@playwright/test';

test('Ensure the cart functionality operates correctly example the quantity & price are updated', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  //view product details 
  await page.locator('[data-test="product-01KAV2MFRT1MZGK1T099Z2BSM2"]').click();
  //add the product to cart
  await page.locator('[data-test="add-to-cart"]').click();
  //wait for the alert to appear
  await page.waitForTimeout(2000);
  //verify product added to cart message
  await expect(page.getByRole('alert', { name: 'Product added to shopping cart' })).toBeVisible();
  //navigate to cart 
  await page.locator('[data-test="nav-cart"]').click();
  //verify the correct product is in the cart
  await expect(page.getByRole('cell', { name: 'Pliers', exact: true })).toBeVisible();
  //verify the total price is correct for quantity 1
  await expect(page.locator('[data-test="cart-total"]')).toHaveText('$12.01');
  //update the quantity to 3
  await page.locator('[data-test="product-quantity"]').click();
  await page.locator('[data-test="product-quantity"]').fill('3');
  //wait for the alert to appear
  await page.waitForTimeout(2000);
  await page.getByRole('cell', { name: 'Total' }).click();
  //verify product quantity updated message
  await expect(page.getByRole('alert', { name: 'Product quantity updated.' })).toBeVisible();
  //verify the total price is updated correctly for quantity 3
  await expect(page.locator('[data-test="cart-total"]')).toHaveText('$36.03');
});