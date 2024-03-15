package pageObj;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class ForgotPasswordPage {
    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(xpath = "//input[@name='principal']")
    private WebElement txtUserName;

    @FindBy(xpath = "//input[@name='principal']/following::p")
    private WebElement usernameValidation;

    @FindBy(xpath = "//span[text()='verify']")
    private WebElement btnVerify;

    @FindBy(xpath = "/html/body/div[1]/div/div[2]/p")
    private WebElement confirmationMessage;

    public ForgotPasswordPage(WebDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver,this);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }

    public void setTxtUserName(String username){
        wait.until(ExpectedConditions.visibilityOf(txtUserName));
        txtUserName.sendKeys(username);
    }
    public void clickBtnVerify(){
        wait.until(ExpectedConditions.visibilityOf(btnVerify));
        btnVerify.click();
    }
    public String getUsernameValidationMessage(){
        wait.until(ExpectedConditions.visibilityOf(usernameValidation));
        return usernameValidation.getText();
    }
    public String getConfirmationMessage(){
        wait.until(ExpectedConditions.visibilityOf(confirmationMessage));
        return confirmationMessage.getText();
    }
    public String getURL(){
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.getCurrentUrl();
    }
}
