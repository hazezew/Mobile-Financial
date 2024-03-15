package pageObj;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LoginPage {
    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(xpath = "//input[@name='principal']")
    private WebElement txtUserName;

    @FindBy(xpath = "//input[@name='password']")
    private WebElement txtPassword;

    @FindBy(linkText = "Forgot Password?")
    private WebElement linkForgotPassword;

    @FindBy(xpath = "//span[text()='Login']")
    private WebElement btnLogin;

    @FindBy(xpath = "//input[@name='principal']/following::p[1]")
    private WebElement usernameValidation;

    @FindBy(xpath = "//input[@name='password']/following::p[1]")
    private WebElement passwordValidation;

    @FindBy(xpath = "//div[contains(@class,\"Notification\") and contains(@class,\"description\")]")
    private WebElement successErrorMessageDisplay;

    public LoginPage(WebDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver,this);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }
    public void setTxtUserName(String userName){
        wait.until(ExpectedConditions.visibilityOf(txtUserName));
        txtUserName.sendKeys(userName);
    }
    public void setTxtPassword(String password){
        wait.until(ExpectedConditions.visibilityOf(txtPassword));
        txtPassword.sendKeys(password);
    }
    public ForgotPasswordPage clickLinkForgotPassword(){
        wait.until(ExpectedConditions.visibilityOf(linkForgotPassword));
        linkForgotPassword.click();
        return new ForgotPasswordPage(driver);
    }
    public LandingPage clickBtnLogin(){
        wait.until(ExpectedConditions.visibilityOf(btnLogin));
        btnLogin.click();
        return new LandingPage(driver);
    }
    public String getErrorMessage(){
        return "123";
    }
    public String getUsernameValidationMessage(){
        wait.until(ExpectedConditions.visibilityOf(usernameValidation));
        return usernameValidation.getText();
    }
    public String getPasswordValidation(){
        wait.until(ExpectedConditions.visibilityOf(passwordValidation));
        return passwordValidation.getText();
    }
    public String getSuccessErrorMessageDisplay(){
        wait.until(ExpectedConditions.visibilityOf(successErrorMessageDisplay));
        return successErrorMessageDisplay.getText();
    }
    public String getURL(){
        return driver.getCurrentUrl();
    }
}