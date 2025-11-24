import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://practicesoftwaretesting.com/');
  //click on contact link
  await page.locator('[data-test="nav-contact"]').click();
  //fill the form with valid data
  await page.locator('[data-test="first-name"]').click();
  await page.locator('[data-test="first-name"]').fill('Etu Mahmuda');
  //fill last name
  await page.locator('[data-test="last-name"]').click();
  await page.locator('[data-test="last-name"]').fill('Era');
  //fill email
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('etumahmuda@gmail.com');
  //fill subject 
  await page.locator('[data-test="subject"]').selectOption('webmaster');
  //fill message
  await page.locator('[data-test="message"]').click();
  await page.locator('[data-test="message"]').fill('It is a nice experience for me to give an automation coding exam for a well known company.');
 //upload a file
  await page.locator('[data-test="attachment"]').click();
  await page.locator('[data-test="attachment"]').setInputFiles('Files/tulip tech.txt');
  //submit the form
  await page.locator('[data-test="contact-submit"]').click();
  //verify successful submission message
  await expect(page.getByText('Thanks for your message! We will contact you shortly.')).toBeVisible();
});