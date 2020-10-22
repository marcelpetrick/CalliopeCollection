# wip; just a configurable, fashy tea timer

def on_button_pressed_a():
    global duration
    if programState == 0:
        duration = (duration + 1) % maxDuration
        if duration == 0:
            duration = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global programState, startTime
    programState += 1
    startTime = control.millis()
input.on_button_pressed(Button.B, on_button_pressed_b)

startTime = 0
programState = 0
maxDuration = 5
duration = 1
basic.turn_rgb_led_off()

def on_forever():
    global programState
    global startTime
    global duration
    if programState == 0:
        basic.show_number(duration)
    elif programState == 1:
        currentTime = control.millis()
        # time in milliseconds
        remainingTime = duration - ((currentTime - startTime) / 1000)
        basic.show_number(remainingTime)
        if currentTime < 0:
            programState = 2
    elif programState == 2:
        pass
basic.forever(on_forever)
