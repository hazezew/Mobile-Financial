package stepDef;

import config.Config;
import config.CucumberExtentReporter;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import pageObj.AbstractPage;

import java.io.File;
import java.util.concurrent.TimeUnit;


public class Hook {
    private String os;
    private WebDriver driver;
    private static CucumberExtentReporter cucumberExtentReporter;
    private static boolean isReporterRunning;

    @Before(order=1)
    public void initializeDriver(){
        os=(System.getProperty("os.name")).toUpperCase();
        if (driver == null) {
            if (os.contains("WIN")) {
                if (Config.browser.equalsIgnoreCase("chrome")) {
                    System.setProperty("webdriver.chrome.driver", ".\\src\\test\\webDrivers\\WIN\\chromedriver.exe");
                    driver = new ChromeDriver();

//                    ChromeOptions options = new ChromeOptions();
//                    options.addArguments("--headless", "--window-size=1920,1200","--ignore-certificate-errors");
//                    options.addArguments("--headless");
//                    options.addArguments("--no-sandbox");
//                    driver = new ChromeDriver(options);

                } else if (Config.browser.equalsIgnoreCase("firefox")) {
                    System.setProperty("webdriver.gecko.driver", ".\\src\\test\\webDrivers\\WIN\\geckodriver.exe");
                    driver = new FirefoxDriver();

//                    FirefoxBinary firefoxBinary = new FirefoxBinary();
//                    firefoxBinary.addCommandLineOptions("--headless");
//                    FirefoxOptions firefoxOptions = new FirefoxOptions();
//                    firefoxOptions.setBinary(firefoxBinary);
//                    driver = new FirefoxDriver(firefoxOptions);
                }
            } else {
                if (Config.browser.equalsIgnoreCase("firefox")) {
                    FirefoxBinary firefoxBinary = new FirefoxBinary();
                    firefoxBinary.addCommandLineOptions("--headless");
                    System.setProperty("webdriver.gecko.driver", "./src/test/webDrivers/Linux/geckodriver");
                    FirefoxOptions firefoxOptions = new FirefoxOptions();
                    firefoxOptions.setBinary(firefoxBinary);
                    driver = new FirefoxDriver(firefoxOptions);
                } else if (Config.browser.equalsIgnoreCase("chrome")) {
                    System.setProperty("webdriver.chrome.driver", "./src/test/webDrivers/Linux/chromedriver");
                    ChromeOptions options = new ChromeOptions();
                    options.addArguments("--headless", "--window-size=1920,1200","--ignore-certificate-errors");
                    options.addArguments("--headless");
                    options.addArguments("--no-sandbox");
                    driver = new ChromeDriver(options);
                }
            }
            driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
            driver.manage().timeouts().setScriptTimeout(60, TimeUnit.SECONDS);
            driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
            driver.manage().window().maximize();
            AbstractPage.setDriver(driver);
        }
        if(!AbstractPage.folderCreated){
            try{
                String currentPath = new File(".").getCanonicalPath();
                File folder=new File(currentPath+"\\target\\Extent");

//                clearing all the files in the folder before creating new test result files
                try {
                    final File[] files = folder.listFiles();
                    for(File f:files)
                        f.delete();
                }
                catch (Exception e){}

//                creating the directory where we store all test result output files
                folder.mkdirs();
                AbstractPage.folderCreated=true;
            }
            catch (Exception e){}
        }
    }
    @Before(order = 2)
    public void beforeScenario(Scenario scenario){
        if(!isReporterRunning){
            cucumberExtentReporter=new CucumberExtentReporter();
            isReporterRunning=true;
        }
        cucumberExtentReporter.startTest(scenario.getName());
        AbstractPage.userLoginStatus=false;
    }
    @After(order = 1)
    public void closeDriver(Scenario scenario){
        cucumberExtentReporter.createTest(scenario,driver);
        cucumberExtentReporter.writeTOReporter();
        driver.close();
    }
}