value = 1

def on_button_pressed_a():
    global value
    value -= 1
    value = (value+10) % 10
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global value
    value += 1
    value = value % 10
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    basic.show_number(value)

basic.forever(on_forever)
