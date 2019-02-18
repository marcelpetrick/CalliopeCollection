let reviewer = ""
let namesAll: string[] = []
let namesExternal: string[] = []
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
    reviewer = namesExternal[Math.random(namesExternal.length + 1)]
    for (let Platzhalter2 = 0; Platzhalter2 <= 2; Platzhalter2++) {
        basic.showString(reviewer)
    }
})
namesExternal = ["RNI", "NLE", "MLA"]
namesAll = ["RNI", "NLE", "MLA", "GSC", "HGA", "MSA", "NKU", "MDR", "MPE"]
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
