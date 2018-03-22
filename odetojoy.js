input.onButtonPressed(Button.A, () => {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(349, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(262, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            . # . # .
            # . . . #
            . . . . .
            # . . . #
            . # . # .
            `)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    }
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})

