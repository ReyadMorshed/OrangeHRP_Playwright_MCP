import { test as base } from '@playwright/test';
import { OrangeHRMLoginPage } from '../pages/OrangeHRMLoginPage';

type Fixtures = {
	orangeHRMLoginPage: OrangeHRMLoginPage;
};

export const test = base.extend<Fixtures>({
	orangeHRMLoginPage: async ({ page }, use) => {
		const loginPage = new OrangeHRMLoginPage(page);
		await use(loginPage);
	},
});
export { expect } from '@playwright/test';
