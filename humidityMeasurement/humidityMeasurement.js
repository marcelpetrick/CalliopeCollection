let v_sampleSize = 0
let v_maxMeasurement = 0
let v_minMeasurement = 0
let currentValue = 0
let v_sleepTime = 0
basic.forever(() => {
    basic.pause(v_sleepTime)
    currentValue = pins.analogReadPin(AnalogPin.P2)
    if (currentValue > v_maxMeasurement) {
        v_maxMeasurement = currentValue
    }
    if (currentValue < v_minMeasurement) {
        v_minMeasurement = currentValue
    }
    v_sampleSize += 1
})
input.onButtonPressed(Button.A, () => {
    basic.showString("min:" + v_minMeasurement + ("max:" + v_maxMeasurement) + ("samples:" + v_sampleSize))
})
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `)
v_sleepTime = 60 * 1000
v_minMeasurement = 1024
v_maxMeasurement = -1
v_sampleSize = 0
basic.clearScreen()

