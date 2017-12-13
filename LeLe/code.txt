let ledpowerinverted = 0
let pin2 = false
let pin1 = false
basic.forever(() => {
    pin1 = Math.randomBoolean()
    pin2 = Math.randomBoolean()
    for (let ledpower = 0; ledpower <= 1023; ledpower++) {
        if (pin1) {
            pins.analogWritePin(AnalogPin.P1, ledpower)
        }
        if (pin2) {
            pins.analogWritePin(AnalogPin.P2, ledpower)
        }
        basic.pause(2)
    }
    for (let ledpower2 = 0; ledpower2 <= 1023; ledpower2++) {
        ledpowerinverted = 1023 - ledpower2
        if (pin1) {
            pins.analogWritePin(AnalogPin.P1, ledpowerinverted)
        }
        if (pin2) {
            pins.analogWritePin(AnalogPin.P2, ledpowerinverted)
        }
        basic.pause(2)
    }
    basic.pause(500)
})

