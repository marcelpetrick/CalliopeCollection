let activated = 0
let currentColor = 0
let counter = 0
input.onButtonPressed(Button.A, () => {
    counter = 15 * 60
    activated = 1
})
input.onButtonPressed(Button.B, () => {
    // basic.showString(control.deviceName()) cycle colors
    currentColor += 1
    basic.setLedColor(currentColor)
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
