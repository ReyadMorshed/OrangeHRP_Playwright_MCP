
import { test as base, Page, BrowserContext } from '@playwright/test';
import { loginToOrangeHRM } from '../utilities/loginUtils';
import { environments, EnvKey } from '../config/env.config';
import fs from 'fs';


/**
 * Logs in using session storage and saves/reuses auth.json for fast login.
 * @param page - The Playwright Page instance.
 * @param env - The environment key ('production' or 'staging').
 * @returns The logged-in page with session storage loaded.
 */

/**
 * Always performs a fresh login for each test run (browser-independent).
 * @param page - The Playwright Page instance.
 * @param env - The environment key ('production' or 'staging').
 */
export async function loginWithSession(page: Page, env: EnvKey = 'production'): Promise<void> {
  const { baseURL, credentials } = environments[env];
  await loginToOrangeHRM(page, baseURL, credentials.admin.username, credentials.admin.password);
}


type SessionFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<SessionFixtures>({
  /**
   * Provides a logged-in Playwright Page using session storage.
   * @param page - The Playwright Page instance.
   * @param use - The use callback for the fixture.
   */
  loggedInPage: async ({ page }, use) => {
    await loginWithSession(page);
    await use(page);
  },
});
