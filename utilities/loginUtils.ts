import { Page } from '@playwright/test';
import { performFill, performClick, performGoto } from './actions/elementActions';

/**
 * Logs into the OrangeHRM application using provided credentials and URL.
 * @param page - The Playwright Page instance.
 * @param url - The login page URL.
 * @param username - The username to use for login.
 * @param password - The password to use for login.
 */
export async function loginToOrangeHRM(page: Page, url: string, username: string, password: string): Promise<void> {
  await performGoto(page, url, 'OrangeHRM Login Page');
  await page.waitForTimeout(2000); // Wait for 2 seconds to ensure page is fully loaded
  await performFill(page.locator('input[name="username"]'), username, 'Username field', page);
  await performFill(page.locator('input[name="password"]'), password, 'Password field', page);
  await performClick(page.locator('button[type="submit"]'), 'Login button', page);
}
