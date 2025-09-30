Generate a Playwright end-to-end test using Page Object Model
Suggeestions for mode
1. Manage the production and staging environment on #file:env.config.ts and use the baseUrl from #file:playwright.config.ts 
2. Keep all the testData on variable in #file:testData.ts  
3. Create separate page for each webpage on #file:pages 
4. #file:utils This sets up reusable context for my  tests.

Test Scenarion 1
feature: Login test
Steps 
1. Go to https://opensource-demo.orangehrmlive.com/web/index.php/auth/login
2. Username : Admin , Password : admin123
3. Click on login button
4. Validate the successful login with text "Dashboard"

Modification
1. In #file:OrangeHRMLoginPage.ts  you are directly using the link on the goto function. But I want to save the link on baseURL variable. and baseURL may changed based on environment. So baseURL will be saved on #file:env.config.ts and environment will be handled from #file:playwright.config.ts . The current url and credential is for production environment
2. Don't create the page dicrectly on #file:orangehrm-login.spec.ts . Create fixture on #file:testContext.ts first. Use that fixture on #file:orangehrm-login.spec.ts


Hi Team! I have started learning playwright MCP. Today I have automated my first test case using playwright MCP. Some important things I want to mention:
Using Page Object Model
Configured the production and staging environment on #file:env.config.ts
Managing the environments from #file:playwright.config.ts 
Saving all the variables on #file:testData.ts
Using #file:utils to set up reusable context (fixtures) for my  tests.
