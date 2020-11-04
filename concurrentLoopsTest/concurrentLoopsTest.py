abortScrolling = False

def handleLeds():
    if not abortScrolling:
        basic.show_icon(IconNames.HEART)
        basic.pause(100)
        basic.show_icon(IconNames.STICK_FIGURE)
        basic.pause(100)
        basic.show_string("scrollingText")
        basic.pause(100)
basic.forever(handleLeds)

def handleSingleLed():
    basic.set_led_color(0x0000ff)
    basic.pause(100)
    basic.set_led_color(0xff0000)
    basic.pause(100)
basic.forever(handleSingleLed)

def on_button_pressed_a():
    global abortScrolling
    abortScrolling = not abortScrolling
input.on_button_pressed(Button.A, on_button_pressed_a)