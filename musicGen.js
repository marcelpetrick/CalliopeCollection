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
    music.playTone(translateNotes("C"), music.beat(BeatFraction.Whole))
    music.playTone(translateNotes("D"), music.beat(BeatFraction.Whole))
    music.playTone(translateNotes("E"), music.beat(BeatFraction.Whole))
    music.playTone(translateNotes("F"), music.beat(BeatFraction.Whole))
})
function translateNotes(inputString2: string): number {
    let returnValue2 = 131;

    if (inputString2 == "C") {
        returnValue2 == 131;
    } else
        if (inputString2 == "D") {
        returnValue2 == 262;
    } else
        if (inputString2 == "E") {
        returnValue2 == 593;
    }

    return returnValue2;
}
