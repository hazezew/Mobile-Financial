package pageObj;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LandingPage {
    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(xpath = "//*[local-name()='svg' and contains(@class,'logout')]")
    private WebElement linkLogout;

    public LandingPage(WebDriver driver){
        this.driver=driver;
        PageFactory.initElements(driver,this);
        wait = new WebDriverWait(driver, Duration.ofSeconds(15));
    }
    public LoginPage clickLinkLogout(){
        wait.until(ExpectedConditions.visibilityOf(linkLogout));
        linkLogout.click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return new LoginPage(driver);
    }
    public String getURL(){
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        return driver.getCurrentUrl();
    }
}
