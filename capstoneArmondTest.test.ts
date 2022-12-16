import {armondQA} from'./capstonePageObject';
const chromedriver = require("chromedriver");
import {Actions ,Builder, By, Capabilities, until, WebDriver, WebElement,Origin,Button } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page  = new armondQA()




  test('Textbox Functionality', async () => {
    await page.navigate();

   await page.driver.sleep(2000)
    await page.getElement(page.fullName);
    await page.setInput(page.fullName, "John Smith");
    await driver.sleep(1000)
    await page.getElement(page.email);
    await page.setInput(page.email, "John@fakeemail.com");
    await driver.sleep(1000)
    await page.getElement(page.address)
    await page.setInput(page.address, " 123 Blue St AnyTown, USA")
    await driver.sleep(1000)
    await page.getElement(page.permAddress);
    await page.setInput(page.permAddress,"512 Green Rd. Townsville, CA");
    await driver.sleep(1000)
    await page.getElement(page.submitBtn);
    await driver.sleep(1000)
    await page.click(page.submitBtn)
    await driver.sleep(2000)

  })


  test('Add New User', async () => {
    await page.navigate();
    await driver.sleep(2000);
    await page.getElement(page.webTable);
    await driver.sleep(2000);
    await page.click(page.webTable);
    await page.getElement(page.addBtn);
    await page.click(page.addBtn);
    await driver.sleep(1000)
    await page.getElement(page.firstName);
    await page.setInput(page.firstName,"John" );
    await page.getElement(page.lastName);
    await page.setInput(page.lastName, "Smith");
    await page.getElement(page.age);
    await page.setInput(page.age, "35");
    await page.getElement(page.salary);
    await page.setInput(page.salary, "85000");
    await page.getElement(page.department);
    await page.setInput(page.department, "QA");
    await page.getElement(page.submitBtn);
    await page.click(page.submitBtn);
    await driver.sleep(1000)




  })








    afterAll(async ()=>{
      await driver.quit()
    })
