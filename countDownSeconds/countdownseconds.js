let activated = 0
let counter = 0
input.onButtonPressed(Button.A, () => {
    counter = 20 * 60
    activated = 1
})
input.onButtonPressed(Button.B, () => {
    basic.showString(control.deviceName())
})
basic.forever(() => {
    if (activated > 0) {
        basic.setLedColor(Colors.Green)
        while (counter >= 0) {
            basic.showNumber(counter)
            basic.pause(1000)
            counter += -1
        }
        activated = 0
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.setLedColor(Colors.Red)
    }
})
