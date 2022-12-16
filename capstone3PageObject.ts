import { Actions,Builder,By,Capabilities, WebDriver, until, WebElement,Origin, Button} from "selenium-webdriver";
import {BasePage} from './capstoneBasePage'

export class armondQA3 extends BasePage {

    url: string = "https://demoqa.com/radio-button";

    elementsPanel: By = By.xpath ('//h5[text() = "Elements"]')
    textBox: By = By.id("item-0")
    fullName: By = By.id("userName")
    email: By = By.id("userEmail")
    address: By = By.id("currentAddress")
    permAddress: By = By.id("permanentAddress")
    submitBtn: By = By.id("submit")
    radioBtn: By = By.xpath('//span[text() ="Radio Button"]')
    yesBtn: By = By.xpath('//label[text()= "Yes"]')
    impressive: By = By.xpath('//label[text() ="Impressive"]')
    noBtn: By = By.css("noRadio")
    webTable: By = By.xpath('//span[text() ="Web Tables"]')
    addBtn: By = By.id("addNewRecordButton")
    firstName: By = By.id("firstName")
    lastName: By = By.id("lastName")
    age: By = By.id("age")
    salary: By = By.id("salary")
    department: By = By.id("department")
    buttons:  By = By.xpath('//span[text() ="Buttons"]')
    dblClick: By = By.id("doubleClickBtn")
    rightClick:By = By.id("rightClickBtn")
    clickMe: By = By.id("J6U8m")
    AFW: By = By.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[3]/span/div/div[2]/div[2]/svg/g/path[2]')
    alerts: By = By.id("item-1")
    alertBtn: By = By.id("alertButton")
    timeBtn: By = By.id("timerAlertButton")
    confirmBtn: By = By.id("confirmButton")
    promptBtn: By = By.id("promtButton")
    elementsTab: By = By.xpath('//span[text() = "Elements"]')
    widgetsTab: By = By.xpath('//span[text() = "Widgets"]')
    autoComplete: By = By.xpath('//span[text() ="Auto Complete"]')
    multiColor: By = By.id('autoCompleteMultipleInput')
    oneColor: By = By.id('autoCompleteSingleInput')
    accordion: By = By.xpath('//span[text() ="Accordian"]')
    sect1: By = By.id("section1Heading")
    sect2: By = By.id("section2Heading")
    sect3: By = By.id("section3Heading")
    interactions: By = By.xpath('//span[text() = "Interactions"]')
    dragMe: By = By.id("draggable")
    dropMe: By = By.id("droppable")
    revert: By = By.id("revertable")
    noRevert: By = By.id("notRevertable")
    revertTab: By = By.id("droppableExample-tab-revertable")

    async urlSwitch() { let myUrl = await this.driver.getCurrentUrl();
      expect(await this.driver.getCurrentUrl()).toBe("https://demoqa.com/text-box")
      await this.click(this.buttons)
      expect(await this.driver.getCurrentUrl()).toBe("https://demoqa.com/buttons")

  }

  }
