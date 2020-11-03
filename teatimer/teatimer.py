# What? A configurable, flashy tea timer
#
# timer has several states:
# 1st: (set the time by pressing A; just increases up to 5 minutes); start the timer with B
# 2nd: counts down the time (and shows the remainder in seconds as scrolled text (this causes a delay.. uff)
# 3rd: time elapsed -> blinkng red/green; can be reset by pressing B .. take out the teabag

def on_button_pressed_a():
    global duration
    if programState == 0:
        duration = (duration + 1) % maxDuration
        if duration == 0:
            duration = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global programState, startTime
    if programState == 0 or programState == 2:
        programState = (programState + 1) % maxProgramState
        startTime = control.millis()
input.on_button_pressed(Button.B, on_button_pressed_b)

startTime = 0
programState = 0
maxProgramState = 3
maxDuration = 10 # minutes; green tea 3; fruity tea 8 (so for the sake of it, the user can use 1..9)
duration = 3 # 3 min is a good start for green tea
basic.turn_rgb_led_off()

def on_forever():
    global programState
    if programState == 0:
        basic.set_led_color(0x00ff00)
        basic.show_number(duration)
    elif programState == 1:
        basic.set_led_color(0x0000ff)
        currentTime = control.millis()
        remainingTimeMs = (60 * 1000 * duration - (currentTime - startTime))
        remainingTimeS = remainingTimeMs / 1000
        basic.show_number(Math.ceil(remainingTimeS))
        if remainingTimeS <= 0:
            music.start_melody(music.built_in_melody(Melodies.BA_DING))
            programState = 2
    elif programState == 2:
        basic.set_led_color(0xff0000)
        basic.pause(100)
        basic.set_led_color(0x00ff00)
        basic.pause(100)
basic.forever(on_forever)
