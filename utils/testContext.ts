
import { test as base } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRMLoginPage';
import { EmployeePage } from '../pages/EmployeePage';
import { loginWithSession } from '../fixtures/sessionLogin';

type Fixtures = {
	orangeHRMLoginPage: OrangeHRMLoginPage;
	employeePage: EmployeePage;
	loggedInPage: import('@playwright/test').Page;
};

export const test = base.extend<Fixtures>({
	loggedInPage: async ({ page }, use) => {
		await loginWithSession(page);
		await use(page);
	},
	orangeHRMLoginPage: async ({ loggedInPage }, use) => {
		const loginPage = new OrangeHRMLoginPage(loggedInPage);
		await use(loginPage);
	},
	employeePage: async ({ loggedInPage }, use) => {
		const employeePage = new EmployeePage(loggedInPage);
		await use(employeePage);
	},
});
export { expect } from '@playwright/test';
