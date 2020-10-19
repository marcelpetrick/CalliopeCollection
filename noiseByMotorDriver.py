# inspired by https://www.elektronik-labor.de/Microbit/Calliope6.html

def on_button_pressed_a():
    basic.set_led_color(0x00ff00)
    for Index in range(1025):
        motors.motor_power(50)
        control.wait_micros(100)
        motors.motor_power(-50)
        control.wait_micros(100)
    basic.set_led_color(0xffffff)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    # fancy lights with the LED
    delay = 500
    for a in range(1025):
        basic.set_led_color(0xff0000)
        control.wait_micros(delay)
        basic.set_led_color(0x0000ff)
        control.wait_micros(delay)

    basic.turn_rgb_led_off()

#    for Index2 in range(1025):
#        motors.motor_power(100)
#        control.wait_micros(100)
#        motors.motor_power(-100)
#        control.wait_micros(100)
#    basic.set_led_color(0xffffff)
input.on_button_pressed(Button.B, on_button_pressed_b)

