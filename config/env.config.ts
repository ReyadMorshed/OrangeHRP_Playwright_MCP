export type EnvKey = 'staging' | 'production';

export const environments: Record<EnvKey, {
	baseURL: string;
	credentials: {
		admin: {
			username: string;
			password: string;
		};
	};
}> = {
	production: {
		baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
		credentials: {
			admin: { username: 'Admin', password: 'admin123' },
		},
	},
	staging: {
		baseURL: 'https://staging.orangehrmlive.com/web/index.php/auth/login',
		credentials: {
			admin: { username: 'Admin', password: 'admin123' },
		},
	},
};
