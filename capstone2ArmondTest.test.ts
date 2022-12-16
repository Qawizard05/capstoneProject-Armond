import { BasePage } from "./capstoneBasePage";
import {armondQA2} from'./capstone2PageObject';
const chromedriver = require("chromedriver");
import { Actions ,Builder, By, Capabilities, until, WebDriver, WebElement,Origin,Button  } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new armondQA2()

test('Auto Complete Widget', async () => {
    await page.navigate();
    await driver.sleep(2000);
    await page.getElement(page.multiColor);
    await page.sendKeys(page.multiColor,"re\n" );
    await driver.sleep(1000);
    await page.getElement(page.multiColor);
    await page.sendKeys(page.multiColor,"bl\n" );
    await driver.sleep(1000);
    await page.getElement(page.multiColor);
    await driver.sleep(1000)
    await page.sendKeys(page.multiColor, "gr\n");
    await page.getElement(page.oneColor);
    await page.sendKeys(page.oneColor, "re\n");
    await driver.sleep(2000)

    }
    )


    test('Accordion Widget', async () => {
        await page.navigate();
         await driver.sleep(2000);
        await page.getElement(page.accordion);
         await driver.sleep(2000);
         await page.click(page.accordion);
         await page.getElement(page.sect1);
         await page.click(page.sect1 );
         await driver.sleep(1000)
         await page.getElement(page.sect2);
         await page.click(page.sect2);
         await driver.sleep(1000)
         await page.getElement(page.sect3);
         await driver.sleep(1000)
         await page.click(page.sect3);
    }
    )

afterAll(async ()=>{
  await driver.quit()
})
