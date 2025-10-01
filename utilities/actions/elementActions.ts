/**
 * Waits for a locator to be visible before interacting.
 * @param locator - The Playwright Locator to wait for.
 * @param description - Description of the element for logging.
 * @param timeout - Optional timeout in ms (default 10s)
 */
export async function waitForVisible(locator: Locator, description: string, timeout = 10000): Promise<void> {
  try {
    await locator.waitFor({ state: 'visible', timeout });
    console.log(`SUCCESS: ${description} is visible`);
  } catch (error) {
    console.error(`FAILURE: ${description} not visible in time.`, error);
    throw error;
  }
}
import { Page, Locator } from '@playwright/test';

/**
 * Clicks on a locator with logging, error handling, and screenshot on failure.
 * @param locator - The Playwright Locator to click.
 * @param description - Description of the action for logging.
 * @param page - The Playwright Page instance for screenshot on error.
 */
export async function performClick(locator: Locator, description: string, page: Page): Promise<void> {
  try {
    await locator.click();
    console.log(`SUCCESS: Clicked on ${description}`);
  } catch (error) {
    console.error(`FAILURE: Could not click on ${description}. Error:`, error);
    await page.screenshot({ path: `error-click-${Date.now()}.png` });
    throw error;
  }
}

/**
 * Fills a locator with the provided value, with logging, error handling, and screenshot on failure.
 * @param locator - The Playwright Locator to fill.
 * @param value - The value to fill in.
 * @param description - Description of the action for logging.
 * @param page - The Playwright Page instance for screenshot on error.
 */
export async function performFill(locator: Locator, value: string, description: string, page: Page): Promise<void> {
  try {
    await locator.fill(value);
    console.log(`SUCCESS: Filled ${description} with value '${value}'`);
  } catch (error) {
    console.error(`FAILURE: Could not fill ${description}. Error:`, error);
    await page.screenshot({ path: `error-fill-${Date.now()}.png` });
    throw error;
  }
}

/**
 * Navigates to a URL using the Playwright Page, with logging, error handling, and screenshot on failure.
 * @param page - The Playwright Page instance.
 * @param url - The URL to navigate to.
 * @param description - Description of the navigation for logging.
 */
export async function performGoto(page: Page, url: string, description: string): Promise<void> {
  try {
    await page.goto(url);
    console.log(`SUCCESS: Navigated to ${description} (${url})`);
  } catch (error) {
    console.error(`FAILURE: Could not navigate to ${description} (${url}). Error:`, error);
    await page.screenshot({ path: `error-goto-${Date.now()}.png` });
    throw error;
  }
}
