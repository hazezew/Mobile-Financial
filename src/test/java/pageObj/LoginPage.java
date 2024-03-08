package pageObj;

import org.openqa.selenium.Alert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;

public class LoginPage {
    private WebDriver driver;
    private WebDriverWait wait;

    @FindBy(id = "APjFqb")
    private WebElement txtSearch;

    @FindBy(id = "txtUserName")
    private WebElement txtUserName;

    @FindBy(id = "txtPassword")
    private WebElement txtPassword;

    @FindBy(id = "ddlFinancial")
    private WebElement ddlFinancial;

    @FindBy(id = "linkForgetPwd")
    private WebElement linkForgetPwd;

    @FindBy(id = "lnkUnlockUser")
    private WebElement lnkUnlockUser;

    @FindBy(id = "ImgbtnLogin")
    private WebElement btnLogin;

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
    public void setDdlFinancial(String financial){
        wait.until(ExpectedConditions.visibilityOf(ddlFinancial));
        Select finDDL=new Select(ddlFinancial);
        finDDL.selectByVisibleText(financial);
    }
    public void setTxtSearch(String search){
        wait.until(ExpectedConditions.visibilityOf(txtSearch));
        txtSearch.sendKeys(search);
        txtSearch.sendKeys(Keys.ENTER);
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
    public void clickLBtnLogin(){

    }
    public String getURL(){
        return driver.getCurrentUrl();
    }
}