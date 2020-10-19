def on_button_pressed_a():
    basic.set_led_color(0x00ff00)
    beet5 = ['G:1', 'G:1', 'G:1', 'Eb', 'F:1', 'F:1', 'F:1', 'D']
    music.begin_melody(beet5)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    delay = 50*1000
    for a in range(10):
        basic.set_led_color(0xff0000)
        control.wait_micros(delay)
        basic.set_led_color(0x0000ff)
        control.wait_micros(delay)

    basic.turn_rgb_led_off()

    music.begin_melody(music.built_in_melody(Melodies.ENTERTAINER), MelodyOptions.ONCE)

input.on_button_pressed(Button.B, on_button_pressed_b)
