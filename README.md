Here’s a **clean structured prompt** you can feed into your Playwright MCP server (with Copilot or similar assistant) so that it generates your framework exactly as you want:

---

# Prompt for Playwright MCP Server with Copilot

You are an expert Playwright E2E test automation assistant.
Generate a **Playwright end-to-end testing framework** with **Page Object Model (POM)** following the specifications below.

---

## 🎯 General Guidelines

1. **Environment Handling**

   * Manage production and staging environment in **`env.config.ts`**.
   * `baseUrl` must be picked from **`playwright.config.ts`**, which switches based on the environment.

2. **Test Data Management**

   * Store all test data in variables inside **`testData.ts`**.

3. **Page Objects**

   * Create a separate class for each web page under **`pages/`** folder.
   * Example: `OrangeHRMLoginPage.ts` for login page.

4. **Utilities**

   * Create a **`utils/`** folder for reusable context and utilities.
   * Inside `utils/`, create a dedicated subfolder for **Playwright Action Wrappers** (custom wrappers for click, fill, goto, etc.).
   * Each wrapper must:

     * Use `try/catch`
     * Log success/failure
     * Take screenshot on error

5. **Fixtures**

   * Create `testContext.ts` for reusable test fixtures.
   * Do not directly instantiate pages inside spec files—use fixtures.
   * Add **beforeEach() hooks** in each spec file to run Login action automatically.

6. **Documentation**

   * Every function (wrappers, utilities, page methods) must include **JS Docstring** explaining:

     * What it does
     * Parameters
     * Return type

7. **Login Approaches**

   * **Normal Login Utility**

     * Standalone utility function for explicit login scenarios (e.g., invalid login).
     * Accepts `username`, `password`, and `url`.

   * **Reusable Login Fixture**

     * Stored under `fixtures/` folder.
     * Uses `auth.json` (stored under `data/`) for session storage. Always perform a fresh login for each test run (browser-independent and robust)
     * Fixture returns a logged-in page object (e.g., `getLoggedInPage` or similar).

8. **Do Not Use**

   * Hardcoded `.waitForTimeout()` or manual delays.
   * Instead, configure **global timeout in playwright.config.ts**.

---

## 📝 Test Scenario 1 (Login Test)

**Feature:** Login to OrangeHRM
**Steps:**

1. Navigate to login page → `https://opensource-demo.orangehrmlive.com/web/index.php/auth/login`
2. Enter Username → `Admin`
3. Enter Password → `admin123`
4. Click on Login button
5. Validate login success by checking presence of text `"Dashboard"`

---

## 🔄 Required Modifications

1. In **`OrangeHRMLoginPage.ts`**:

   * Do not hardcode the URL.
   * Use `baseUrl` from **`env.config.ts`**, controlled via **`playwright.config.ts`**.

2. In **`orangehrm-login.spec.ts`**:

   * Do not create page directly.
   * Use fixture from **`testContext.ts`**.

3. Implement both login approaches:

   * **Normal Login Utility** for explicit login testing.
   * **Reusable Login Fixture** for session-based login.

---

## ⚙️ Deliverables

* `env.config.ts` (environment configs)
* `playwright.config.ts` (with environment + global timeout)
* `testData.ts` (credentials, static values)
* `pages/OrangeHRMLoginPage.ts` (POM for login page)
* `utils/`

  * `actionWrappers/` → custom wrapped functions (e.g., click, fill, goto) with logging, error handling, screenshots
  * `loginUtils.ts` → normal login function
* `fixtures/testContext.ts` → reusable fixtures including login fixture
* `data/auth.json` → session storage for logged-in state
* `tests/orangehrm-login.spec.ts` → actual login test

---

👉 Output should be **TypeScript Playwright code** following the above structure.
👉 Ensure **modularity, readability, and maintainability**.
👉 Avoid shortcuts—everything should be cleanly separated into utilities, fixtures, pages, and configs.

---

Would you like me to **expand this prompt into a ready-to-use project skeleton with actual TypeScript files** (each file fully coded), or keep it as a single meta-instruction prompt for MCP?
