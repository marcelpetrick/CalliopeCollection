//javascript for the calliope editor
// found at: https://makecode.calliope.cc/

let namesAll: string[] = []
let namesInternal: string[] = []
let item = 0
let reviewer = ""
let Platzhalter = 0
input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
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
    reviewer = namesAll[Math.random(namesAll.length + 1)]
    for (let Platzhalter3 = 0; Platzhalter3 <= 2; Platzhalter3++) {
        basic.showString(reviewer)
    }
})
Platzhalter = 0
namesInternal = ["GSC", "HGA", "MSA", "NKU", "MDR", "MPE"]
namesAll = namesInternal
namesAll.push("RNI")
namesAll.push("NLE")
basic.forever(() => {
    for (let Platzhalter4 = 0; Platzhalter4 <= 32; Platzhalter4++) {
        item += Math.random(namesAll.length + 1)
    }
    basic.showString("" + input.temperature() + "°C")
})
