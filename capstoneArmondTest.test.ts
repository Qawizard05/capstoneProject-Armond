import {armondQA} from'./capstonePageObject';
const chromedriver = require("chromedriver");
import {Actions ,Builder, By, Capabilities, until, WebDriver, WebElement,Origin,Button } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const page  = new armondQA()




  test('Textbox Functionality', async () => {
    await page.navigate();
   // await page.getElement(page.elementsPanel);
    //await page.click(page.elementsPanel);
  //  await page.getElement(page.elementsTab);
   // await page.click(page.elementsTab);
  //  await page.getElement(page.textBox);
   // await page.click(page.textBox, );
   await page.driver.sleep(2000)
    await page.getElement(page.fullName);
    await page.setInput(page.fullName, "John Smith");
    await page.getElement(page.email);
    await page.setInput(page.email, "John@fakeemail.com");
    await page.getElement(page.address)
    await page.setInput(page.address, " 123 Blue St AnyTown, USA")
    await page.getElement(page.permAddress);
    await page.setInput(page.permAddress,"512 Green Rd. Townsville, CA");
    await page.getElement(page.submitBtn);
    await page.click(page.submitBtn)

  })


  test('Add New User', async () => {
    await page.navigate();
    await driver.sleep(2000);
    await page.getElement(page.webTable);
    await driver.sleep(2000);
    await page.click(page.webTable);
    await page.getElement(page.addBtn);
    await page.click(page.addBtn);
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




  })








    afterAll(async ()=>{
      await driver.quit()
    })
