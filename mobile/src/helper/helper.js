const tag1 = { x: 856, y: 272 }
const tag2 = { x: 342, y: 277 }
const down1 = { x: 512, y: 992 }
const down2 = { x: 88, y: 509 }
const idown1 = { x: 12, y: 539 }
const idown2 = { x: 10, y: 360 }
const up1 = { x: 88, y: 509 }
const up2 = { x: 512, y: 992 }
const iup1 = { x: 539, y: 12 }
const iup2 = { x: 360, y: 10 }
const timeout = 5000
export const waitAndClick = async (data, time) => {
    if (time == undefined) {
        time = timeout
    }
    const l1 = await browser.$(data);
    await l1.waitForDisplayed({ wait: time });
    await l1.click();
}

export const waitAndClick2 = async (time) => {
    if (time == undefined) {
        time = timeout
    }
    for (let index = 0; index < 2; index++) {
        const l1 = await browser.$(`-android uiautomator:new UiSelector().text(\"Add\").instance(${index})`);
        await l1.waitForDisplayed({ wait: time });
        l1.click();
        await browser.pause(1000);
    }
}
export const forExisting = async (data) => {
    const l1 = await browser.$(data);
    await expect(l1.isExisting());
    return
}
export const waitForDisplay = async (data, time) => {
    if (time == undefined) {
        time = timeout
    }
    const l1 = await browser.$(data);
    await expect(l1).toBeDisplayed({ wait: time });
}
export const waitForNoDisplay = async (data, time) => {
    if (time == undefined) {
        time = timeout
    }
    const l1 = await browser.$(data);
    await expect(l1).not.toBeDisplayed({ wait: time });
}

export const waitAndSetValue = async (data, data1) => {
    const l1 = await browser.$(data);
    await l1.waitForDisplayed({ wait: timeout });
    await l1.setValue(data1);
    // If the keyboard is open, simulate pressing the Escape key to close it

}

export const elementToDisplayed = async (data, time) => {
    if (time == undefined) {
        time = timeout
    }
    const l1 = await browser.$(data);
    const isDisplayed = await l1.isDisplayed({ wait: time });
    return isDisplayed
}

export const elemnetToHaveText = async (data, data1, time) => {
    if (time == undefined) {
        time = timeout
    }
    const l1 = await browser.$(data);
    await l1.waitForDisplayed({ wait: time });
    await expect(l1).not.toHaveText(data1)
}


export const waitAndGetText = async (data, time) => {
    if (time == undefined) {
        time = timeout
    }
    const l1 = await browser.$(data);
    await l1.waitForDisplayed({ wait: time });
    const data1 = await l1.getText()
    return data1
}

export const blackClick = async () => {

    await browser.action('pointer')
        .move({ x: 255, y: 514 })
        .down({ button: 0 }) // left button
        .pause(10)
        .up({ button: 0 })
        .perform()
}

export const orgClick = async () => {

    await browser.action('pointer')
        .move({ x: 100, y: 760 })
        .down({ button: 0 }) // left button
        .pause(10)
        .up({ button: 0 })
        .perform()
}

export const agentClick = async () => {

    await browser.action('pointer')
        .move({ x: 80, y: 829 })
        .down({ button: 0 }) // left button
        .pause(10)
        .up({ button: 0 })
        .perform()
}

const performSwipe = async (start, end) => {

    await browser.action('pointer')
        .move(start)
        .down({ button: 0 }) // left button
        .pause(10)
        .move(end)
        .up({ button: 0 })
        .perform()

};

export const swipe = async (key, data) => {
    let timeout = 20;
    while (timeout > 0) {
        const isDisplayed = await elementToDisplayed(data);
        if (isDisplayed) break;

        switch (key) {
            case 'tag':
                await performSwipe(tag1, tag2);
                break
            case 'down':
                if (browser.isIOS) {
                    await performSwipe(idown1, idown2);
                }
                await performSwipe(down1, down2);
                break
            case 'up':
                if (browser.isIOS) {
                    await performSwipe(iup1, iup2);
                }
                await performSwipe(up1, up2);
                break
        }
        timeout--;
    }
};

