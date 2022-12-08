// Imported from class notes / qaHomeworkWiki / 2.8
// See Mars's example from 11/23 class: https://github.com/MarohnHoward/group-number-projectpt9/blob/main/basePage.ts



import {Builder, By, Capabilities, until, WebDriver, WebElement,Origin,Button} from "selenium-webdriver";
const chromedriver = require("chromedriver")

interface Options {
    driver?: WebDriver;
    url?: string;
}

export class BasePage {
    driver: WebDriver;
    url: string;

    constructor(options?: Options) {
        if (options && options.driver) this.driver = options.driver;
        else
        this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()
        if(options && options.url) this.url = options.url
    }
    async navigate(url?: string): Promise<void> {
        if (url) return await this.driver.get(url);
        else if (this.url) return await this.driver.get(this.url)
        else
        return Promise.reject(
            "BasePage.navigate() needs a url defined on the page objects, or one passed in."
        )
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element))
        return element;
    }
    async click(elementBy: By): Promise<void> {
        return(await this.getElement(elementBy)).click();
    }
    async setInput(elementBy:By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys)
    }
    async getText(elementBy: By): Promise<string> {
        return (await this.getElement(elementBy)).getText()
    }
    async getAttribute(elementBy: By, attribute: string): Promise<string> {
        return (await this.getElement(elementBy)).getAttribute(attribute)
    }
    async doDragAndDrop(fromElement: WebElement, toElement: WebElement): Promise<void> {
        //required importing "Actions"
        // return this.driver.actions().dragAndDrop(fromElement, toElement).perform()
        console.log(`doDragAndDrop: starting`)
        const actionPause = 500
        const actionPromise = this.driver
                .actions()
                .move({origin: fromElement, duration: 500}) //x:20, y:20,
                .pause(actionPause)
                .press(Button.LEFT)
                .move({origin: Origin.POINTER, x:5, y:5}) // test
                .pause(actionPause)
                .move({origin: toElement, duration: 2000})
                .pause(actionPause)
                .move({origin: Origin.POINTER, x:5, y:5}) // test
                .release(Button.LEFT)
                .pause(actionPause)
                .perform();
        console.log(`doDragAndDrop: Action promise constructed`)
        return actionPromise
    }
}
