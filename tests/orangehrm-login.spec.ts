import { test } from '../fixtures/sessionLogin';
import { expect } from '@playwright/test';
import { orangeHRMTestData } from '../config/testData';

/**
 * OrangeHRM Login E2E Tests using session-based login fixture.
 */
test.describe('OrangeHRM Login', () => {
  /**
   * Logs in before each test using the session fixture.
   * Ensures all tests start from a logged-in state.
   */
  test.beforeEach(async ({ loggedInPage }) => {
    // Already logged in by fixture, can add navigation or checks if needed
    await loggedInPage.goto('/');
  });

  test('should see Dashboard after login', async ({ loggedInPage }) => {
    await expect(loggedInPage.locator('h6:has-text("Dashboard")')).toBeVisible();
  });
});
