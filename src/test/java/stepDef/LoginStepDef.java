package stepDef;

import config.Config;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.testng.Assert;
import pageObj.AbstractPage;
import pageObj.ForgotPasswordPage;
import pageObj.LandingPage;
import pageObj.LoginPage;

public class LoginStepDef extends AbstractPage {
    private WebDriver driver;
    private LoginPage loginPage;
    private ForgotPasswordPage forgotPasswordPage;
    private LandingPage landingPage;

    public LoginStepDef(){
        this.driver=super.driver;
    }

    @When("user has entered Mobile Financial Platform system URL")
    public void user_has_entered_Mobile_Financial_Platform_system_URL() {
        driver.get(Config.applicationURL);
        loginPage=new LoginPage(driver);
        super.loginPage=loginPage;
    }

    @When("user enters username {string}")
    public void user_enters_username(String username) {
        loginPage.setTxtUserName(username);
    }

    @When("user enters password {string}")
    public void user_enters_password(String password) {
        loginPage.setTxtPassword(password);
    }

    @When("user clicks on Login button")
    public void user_clicks_on_Login_button() {
        landingPage=loginPage.clickBtnLogin();
    }

    @Then("Login page displays message {string}")
    public void loginPageDisplaysMessage(String successErrorMessage) {
        Assert.assertTrue(loginPage.getSuccessErrorMessageDisplay().contains(successErrorMessage),successErrorMessage);
    }

    @Then("Login page displays {string} username validation message")
    public void loginPageDisplaysUsernameValidationMessage(String usernameValidation) {
        Assert.assertTrue(loginPage.getUsernameValidationMessage().contains(usernameValidation),usernameValidation);
    }

    @Then("Login page displays {string} password validation message")
    public void loginPageDisplaysPasswordValidationMessage(String passwordValidation) {
        Assert.assertTrue(loginPage.getPasswordValidation().contains(passwordValidation),passwordValidation);
    }

    @Then("system displays landing page")
    public void system_displays_dashboard_page() {
        Assert.assertEquals(landingPage.getURL(),Config.landingPageURL);
    }

    @Then("user clicks on logout button")
    public void user_clicks_on_logout_button() {
        loginPage=landingPage.clickLinkLogout();
    }

    @Then("user is logged out of the system")
    public void user_is_logged_out_of_the_system() {
        Assert.assertEquals(loginPage.getURL(),Config.applicationURL);
    }

    @When("user clicks on Forgot Password link")
    public void userClicksOnForgotPasswordLink() {
        forgotPasswordPage=loginPage.clickLinkForgotPassword();
    }

    @Then("system opens Forgot Password page")
    public void systemOpensForgotPasswordPage() {
        Assert.assertEquals(forgotPasswordPage.getURL(),Config.forgotPasswordPageURL);
    }

    @And("Forgot Password page user enters {string} into username field")
    public void forgotPasswordPageUserEntersIntoUsernameField(String username) {
        forgotPasswordPage.setTxtUserName(username);
    }

    @And("on Forgot Password page user clicks on verify button")
    public void onForgotPasswordPageUserClicksOnVerifyButton() {
        forgotPasswordPage.clickBtnVerify();
    }

    @Then("Forgot Password page displays {string} message")
    public void forgotPasswordPageDisplaysConfirmationMessage(String confirmationMessage) {
        Assert.assertTrue(forgotPasswordPage.getConfirmationMessage().contains(confirmationMessage),confirmationMessage);
    }

    @Then("Forgot Password page displays {string} validation message")
    public void forgotPasswordPageDisplaysValidationMessage(String usernameValidationMessage) {
        Assert.assertTrue(forgotPasswordPage.getUsernameValidationMessage().contains(usernameValidationMessage),usernameValidationMessage);
    }
}
