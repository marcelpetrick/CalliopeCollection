input.onButtonPressed(Button.A, () => {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString("" + input.temperature() + "°C")
})

