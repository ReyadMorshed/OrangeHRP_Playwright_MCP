import { test, expect } from '../utils/testContext';

/**
 * E2E Test: Create a new Employee
 */
test.describe('Employee Management', () => {
  let firstName: string;
  let lastName: string;
  let employeeId: string;
  let fullName: string;

  test.beforeEach(async ({ employeePage, loggedInPage }) => {
    // Ensure login is performed using the fixture
    await loggedInPage.goto('/');
    await expect(loggedInPage.locator('h6:has-text("Dashboard")')).toBeVisible();

    // Generate unique employee data
    const timestamp = Date.now();
    firstName = `TestFirst${timestamp}`;
    lastName = `TestLast${timestamp}`;
  employeeId = `${timestamp}`.slice(-9); // Ensure employeeId is less than 10 characters
    fullName = `${firstName} ${lastName}`;
    // Go to PIM page and Add Employee
    await employeePage.gotoPIM();
    await employeePage.clickAddEmployee();
  });

  test('should create a new employee successfully', async ({ employeePage }) => {
    await employeePage.addEmployee(firstName, lastName, employeeId);
    // Validate employee creation
    await expect(
      employeePage.employeeNameHeader.filter({ hasText: fullName })
    ).toBeVisible({ timeout: 30000 });
  });
});
