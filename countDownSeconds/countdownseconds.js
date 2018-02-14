let activated = 0
let counter = 0
input.onButtonPressed(Button.A, () => {
    counter = 4
    activated = 1
})
basic.forever(() => {
    if (activated > 0) {
        while (counter >= 0) {
            basic.showNumber(counter)
            basic.pause(1000)
            counter += -1
        }
        activated = 0
    }
})
