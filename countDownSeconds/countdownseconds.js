let activated = 0
let currentColor = 0
let counter = 0
input.onButtonPressed(Button.A, () => {
    counter = 15 * 60
    activated = 1
})
input.onButtonPressed(Button.B, () => {
    // basic.showString(control.deviceName()) cycle colors
    //increase and cap to 0..3

    //currentColor = (currentColor + 1) % 8;
    //basic.setLedColor(translateColor(currentColor))
    cycleColorsForever();
})
basic.forever(() => {
    if (activated > 0) {
        basic.setLedColor(Colors.Green)
        while (counter >= 0) {
            // basic.showNumber(counter)
            basic.pause(999)
            counter += -1
        }
        activated = 0
        music.playTone(262, music.beat(BeatFraction.Whole))
        // was Colors.red before
        basic.setLedColor(Colors.Red)
    }
})

function cycleColorsForever(): void {
    currentColor = 0
    while (true) {
        currentColor = (currentColor + 1) % 8;
        basic.setLedColor(translateColor(currentColor))
        basic.pause(500)
    }
}
function translateColor(inputNumber: number): number {
    let returnValue = Colors.Red;

    switch (inputNumber) {
        case 0: returnValue = Colors.Red; break;
        case 1: returnValue = Colors.Blue; break;
        case 2: returnValue = Colors.Green; break;
        case 3: returnValue = Colors.Yellow; break;
        case 4: returnValue = Colors.Indigo; break;
        case 5: returnValue = Colors.Orange; break;
        case 6: returnValue = Colors.Purple; break;
        case 7: returnValue = Colors.Violet; break;
        default:; //do nothing
    }

    return returnValue;
}
