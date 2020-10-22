# wip; just a configurable, fashy tea timer

def on_button_pressed_a():
    global duration
    if programState == 0:
        duration += 1
        duration = duration % maxDuration
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global programState
    programState += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

duration = 0
maxDuration = 0
programState = 0
programState = 0
maxDuration = 5
duration = 1

def on_forever():
    if programState == 0:
        basic.show_number(duration)
    else:
        if programState == 1:
            pass
        else:
            pass
basic.forever(on_forever)
