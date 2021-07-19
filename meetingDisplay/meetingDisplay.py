def on_button_pressed_a():
    global state
    state += 1
    state %= 3
input.on_button_pressed(Button.A, on_button_pressed_a)

state = 0

def on_forever():
    if state == 0:
        basic.set_led_color(0xff0000)
        basic.show_string("meeting")
    else:
        if state == 1:
            basic.set_led_color(0x00ff00)
            basic.show_string("music")
        else:
            basic.set_led_color(0x00ff00)
            basic.show_string("available")
basic.forever(on_forever)
