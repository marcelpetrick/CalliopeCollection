//javascript for the calliope editor
// found at: https://makecode.calliope.cc/

let reviewer = ""
let namesInternal: string[] = []
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.setTempo(120)
    music.beginMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    reviewer = namesInternal[Math.random(namesInternal.length + 1)]
    for (let Platzhalter2 = 0; Platzhalter2 <= 2; Platzhalter2++) {
        basic.showString(reviewer)
    }
})
input.onButtonPressed(Button.B, () => {
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
    for (let Platzhalter3 = 0; Platzhalter3 <= 2; Platzhalter3++) {
        basic.showString(reviewer)
    }
})
let namesAll: string[] = []
namesInternal = ["GSC", "HGA", "MSA", "NKU", "MDR", "MPE", "HCH"]
namesAll = namesInternal
namesAll.push("RNI")
namesAll.push("NLE")
basic.forever(() => {
    for (let i = 0; i < 32; i++) {
        Math.random(namesAll.length + 1)
    }
    basic.showString("" + input.temperature() + "C")
})
