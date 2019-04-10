//javascript for the calliope editor
// found at: https://makecode.calliope.cc/

let reviewer = ""
let namesAll: string[] = []
let namesInternal: string[] = []
input.onButtonPressed(Button.B, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    reviewer = namesAll[Math.random(namesAll.length + 1)]
    for (let Platzhalter = 0; Platzhalter <= 2; Platzhalter++) {
        basic.showString(reviewer)
    }
})
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.beginMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    reviewer = namesInternal[Math.random(namesInternal.length + 1)]
    for (let Platzhalter2 = 0; Platzhalter2 <= 2; Platzhalter2++) {
        basic.showString(reviewer)
    }
})
namesInternal = ["GSC", "HGA", "MSA", "NKU", "MDR", "MPE"]
namesAll = namesInternal
namesAll.push("RNI")
namesAll.push("NLE")
basic.forever(() => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
