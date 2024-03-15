$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/forgotPassword.feature");
formatter.feature({
  "name": "Forgot Password",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot Password with valid email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.step({
  "name": "user clicks on Forgot Password link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.userClicksOnForgotPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system opens Forgot Password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.systemOpensForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page user enters \"abdabr301@gmail.com\" into username field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageUserEntersIntoUsernameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on Forgot Password page user clicks on verify button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.onForgotPasswordPageUserClicksOnVerifyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page displays \"A Code is sent to your Email / Phone\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageDisplaysConfirmationMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot Password with an invalid email username value",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.step({
  "name": "user clicks on Forgot Password link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.userClicksOnForgotPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system opens Forgot Password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.systemOpensForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page user enters \"1abdabr301@gmail.com\" into username field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageUserEntersIntoUsernameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on Forgot Password page user clicks on verify button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.onForgotPasswordPageUserClicksOnVerifyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page displays \"Sorry! Username does not exist. Please try again\" message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageDisplaysConfirmationMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Sorry! Username does not exist. Please try again expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat stepDef.LoginStepDef.forgotPasswordPageDisplaysConfirmationMessage(LoginStepDef.java:98)\r\n\tat ✽.Forgot Password page displays \"Sorry! Username does not exist. Please try again\" message(file:src/test/resources/forgotPassword.feature:29)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot Password with an invalid email format",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.step({
  "name": "user clicks on Forgot Password link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.userClicksOnForgotPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system opens Forgot Password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.systemOpensForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page user enters \"abdabr301@gmail\" into username field",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageUserEntersIntoUsernameField(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on Forgot Password page user clicks on verify button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.onForgotPasswordPageUserClicksOnVerifyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page displays \"Invalid Email address\" validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageDisplaysValidationMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Invalid Email address expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat stepDef.LoginStepDef.forgotPasswordPageDisplaysValidationMessage(LoginStepDef.java:103)\r\n\tat ✽.Forgot Password page displays \"Invalid Email address\" validation message(file:src/test/resources/forgotPassword.feature:36)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Forgot Password with an empty email",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@ForgotPassword"
    }
  ]
});
formatter.step({
  "name": "user clicks on Forgot Password link",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.userClicksOnForgotPasswordLink()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system opens Forgot Password page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.systemOpensForgotPasswordPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "on Forgot Password page user clicks on verify button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.onForgotPasswordPageUserClicksOnVerifyButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Forgot Password page displays \"Email address is required\" validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.forgotPasswordPageDisplaysValidationMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "User Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login using valid username and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username \"abdabr301@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"A_12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login page displays message \"successfully login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.loginPageDisplaysMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "system displays landing page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.system_displays_dashboard_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on logout button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is logged out of the system",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.user_is_logged_out_of_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login using valid username but invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username \"abdabr301@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"1A_123456781\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login page displays message \"Login failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.loginPageDisplaysMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login using invalid username but valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username \"1abdabr301@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"A_12345678\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login page displays message \"Login failed\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.loginPageDisplaysMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login using empty username but password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters password \"1A_123456781\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_enters_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login page displays \"Email address is required\" username validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.loginPageDisplaysUsernameValidationMessage(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user opened web browser and maximizes it",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user has entered Mobile Financial Platform system URL",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_has_entered_Mobile_Financial_Platform_system_URL()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login using valid username but empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Login"
    }
  ]
});
formatter.step({
  "name": "user enters username \"abdabr301@gmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDef.user_clicks_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login page displays \"Password is required\" password validation message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDef.loginPageDisplaysPasswordValidationMessage(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: Password is required expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertTrue(Assert.java:44)\r\n\tat stepDef.LoginStepDef.loginPageDisplaysPasswordValidationMessage(LoginStepDef.java:58)\r\n\tat ✽.Login page displays \"Password is required\" password validation message(file:src/test/resources/login.feature:46)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
});