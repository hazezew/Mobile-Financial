$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/login.feature");
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
  "name": "user enters username \"habitamu\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginStepDef.user_enters_username(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password \"habitamu\"",
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
  "name": "system displays landing page",
  "keyword": "Then "
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
});