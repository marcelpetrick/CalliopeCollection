//javascript for the calliope editor
// found at: https://makecode.calliope.cc/

let reviewer = ""
input.onButtonPressed(Button.A, () => {
    findAndShowReviewer()
})

input.onButtonPressed(Button.B, () => {
    findAndShowReviewer()
})

function findAndShowReviewer()  {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.setTempo(120)
    music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    reviewer = namesAll[Math.random(namesAll.length + 1)]
    basic.showString(reviewer)
}
let namesAll: string[] = []
namesAll = ["GSC", "HGA", "NKU", "MDR", "MPE", "HCH", "RNI", "NLE"]
basic.forever(() => {
    for (let i = 0; i < 31; i++) {
        Math.random(namesAll.length + 1)
    }
    control.waitMicros(1000)
})
