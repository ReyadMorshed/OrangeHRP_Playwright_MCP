import { test, expect } from '../utils/testContext';
import { orangeHRMTestData } from '../config/testData';

// E2E Login Test for OrangeHRM using POM

test.describe('OrangeHRM Login', () => {
  test('should login successfully and see Dashboard', async ({ orangeHRMLoginPage }) => {
    await orangeHRMLoginPage.goto();
    await orangeHRMLoginPage.login(orangeHRMTestData.username, orangeHRMTestData.password);
    await expect(orangeHRMLoginPage.dashboardHeader).toBeVisible();
  });
});
