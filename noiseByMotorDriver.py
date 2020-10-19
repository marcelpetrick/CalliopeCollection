# inspired by https://www.elektronik-labor.de/Microbit/Calliope6.html

def on_button_pressed_a():
    for Index in range(1001):
        motors.motor_power(50)
        control.wait_micros(100)
        motors.motor_power(-50)
        control.wait_micros(100)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    for Index2 in range(1001):
        motors.motor_power(100)
        control.wait_micros(100)
        motors.motor_power(100)
        control.wait_micros(100)
input.on_button_pressed(Button.B, on_button_pressed_b)
