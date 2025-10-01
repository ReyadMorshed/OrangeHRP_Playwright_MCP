import { Page, Locator } from '@playwright/test';
import { performClick, performFill, waitForVisible } from '../utilities/actions/elementActions';

/**
 * Page Object Model for Employee (PIM) page actions.
 */
export class EmployeePage {
  readonly page: Page;
  readonly pimMenu: Locator;
  readonly addEmployeeButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly employeeIdInput: Locator;
  readonly saveButton: Locator;
  readonly employeeNameHeader: Locator;

  constructor(page: Page) {
    this.page = page;
  this.pimMenu = page.locator("xpath=//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']");
  this.addEmployeeButton = page.locator("xpath=//a[normalize-space()='Add Employee']");
  this.firstNameInput = page.locator("input[placeholder='First Name']");
  this.lastNameInput = page.locator("input[placeholder='Last Name']");
  this.employeeIdInput = page.locator("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']");
  this.saveButton = page.locator("button[type='submit']");
  this.employeeNameHeader = page.locator('.oxd-text.oxd-text--h6.--strong');
  }

  /**
   * Navigates to the PIM (Employee List) page.
   */
  async gotoPIM() {
    await waitForVisible(this.pimMenu, 'PIM menu');
    await performClick(this.pimMenu, 'PIM menu', this.page);
  }

  /**
   * Clicks the Add Employee button.
   */
  async clickAddEmployee() {
    await waitForVisible(this.addEmployeeButton, 'Add Employee button');
    await performClick(this.addEmployeeButton, 'Add Employee button', this.page);
  }

  /**
   * Fills the Add Employee form and saves.
   * @param firstName - First name
   * @param lastName - Last name
   * @param employeeId - Unique employee ID
   */
  async addEmployee(firstName: string, lastName: string, employeeId: string) {
    await waitForVisible(this.firstNameInput, 'First Name input');
    await performFill(this.firstNameInput, firstName, 'First Name', this.page);
    await waitForVisible(this.lastNameInput, 'Last Name input');
    await performFill(this.lastNameInput, lastName, 'Last Name', this.page);
    await waitForVisible(this.employeeIdInput, 'Employee ID input');
    await performFill(this.employeeIdInput, employeeId, 'Employee ID', this.page);
    await waitForVisible(this.saveButton, 'Save button');
    await performClick(this.saveButton, 'Save button', this.page);
  }

  /**
   * Validates that the employee was created by checking the employee name header.
   * @param fullName - The full name to validate
   */
  async isEmployeeCreated(fullName: string) {
    const header = this.employeeNameHeader.filter({ hasText: fullName });
    await waitForVisible(header, `Employee name header for ${fullName}`);
    return header.isVisible();
  }
}
