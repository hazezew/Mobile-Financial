package stepDef;

import config.Config;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import pageObj.AbstractPage;
import pageObj.LoginPage;

public class LoginStepDef extends AbstractPage {
    private WebDriver driver;
    private LoginPage loginPage;

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
        loginPage.setTxtSearch(username);
    }

    @When("user enters password {string}")
    public void user_enters_password(String password) {
    }

    @When("user clicks on Login button")
    public void user_clicks_on_Login_button() {
//        landingPage=loginPage.clickLBtnLogin();
    }

    @Then("system displays landing page")
    public void system_displays_dashboard_page() {
    }

    @Then("user clicks on logout button")
    public void user_clicks_on_logout_button() {


    }

    @Then("user is logged out of the system")
    public void user_is_logged_out_of_the_system() {

    }
}
