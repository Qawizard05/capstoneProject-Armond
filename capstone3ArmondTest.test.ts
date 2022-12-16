import { BasePage } from "./capstoneBasePage";
import {armondQA3} from'./capstone3PageObject';
const chromedriver = require("chromedriver");
import { Actions ,Builder, By, Capabilities, until, WebDriver, WebElement,Origin,Button  } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new armondQA3()






test('Radio Button Functionality', async () => {
    await page.navigate()
    await driver.sleep(2000)
    await page.getElement(page.yesBtn);
    await page.click(page.yesBtn );
    await page.getElement(page.impressive);
    await page.click(page.impressive);


 })

 afterAll(async ()=>{
    await driver.quit()
  })
