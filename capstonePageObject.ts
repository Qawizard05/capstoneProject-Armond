import { Builder,By,Capabilities, WebDriver, until, WebElement,Origin, Button} from "selenium-webdriver";
import {BasePage} from './capstoneBasePage'

export class armondQA extends BasePage {

    elementsPanel: By = By.id ("")
    textBox: By = By.id("item-0")
    fullName: By = By.id("userName")
    email: By = By.id("userEmail")
    address: By = By.id("currentAddress")
    permAddress: By = By.id("permanentAddress")
    submitBtn: By = By.id("submit")
    radioBtn: By = By.id("item-2")
    yesBtn: By = By.id("yesRadio")
    impressive: By = By.id("impressiveRadio")
    noBtn: By = By.id("noRadio")
    webTable: By = By.id("item-3")
    addBtn: By = By.id("addNewRecordButton")
    firstName: By = By.id("firstName")
    lastName: By = By.id("lastName")
    age: By = By.id("age")
    salary: By = By.id("salary")
    department: By = By.id("department")
    buttons:  By = By.id("item-4")
    dblClick: By = By.id("doubleClickBtn")
    rightClick:By = By.id("rightClickBtn")
    clickMe: By = By.id("J6U8m")
    AFW: By = By.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[3]/span/div/div[2]/div[2]/svg/g/path[2]')
    alerts: By = By.id("item-1")
    alertBtn: By = By.id("alertButton")
    timeBtn: By = By.id("timerAlertButton")
    confirmBtn: By = By.id("confirmButton")
    promptBtn: By = By.id("promtButton")
    elementsTab: By = By.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[1]/span/div/div[2]/div[2]/svg')
    widgetsTab: By = By.xpath('//*[@id="app"]/div/div/div[2]/div[1]/div/div/div[4]/span/div/div[2]/div[2]/svg/g/path[2]')
    autoComplete: By = By.id("item-2")
    multiColor: By = By.xpath('//*[@id="autoCompleteMultipleContainer"]/div/div[1]')
    oneColor: By = By.xpath('//*[@id="autoCompleteSingleContainer"]/div/div[1]')
    accordion: By = By.id("item-1")
    sect1: By = By.id("section1Heading")
    sect2: By = By.id("section2Heading")
    sect3: By = By.id("section3Heading")
    dragMe: By = By.id("draggable")
    dropMe: By = By.id("droppable")
    revert: By = By.id("revertable")
    noRevert: By = By.id("notRevertable")
    revertTab: By = By.id("droppableExample-tab-revertable")












    Constructor() {
     ({url: "https://demoqa.com"})

}


}
