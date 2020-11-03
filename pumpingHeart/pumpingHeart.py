factor = 0.5
b = 255
led.set_brightness(b)

while not (input.button_is_pressed(Button.A)):
    b = led.brightness() * factor
    led.set_brightness(b)
    
    if led.brightness() <= 1:
        b = 1
        factor = 2

    if led.brightness() >= 255:
        b = 255
        factor = 0.5
    
    basic.show_icon(IconNames.HEART)
    #basic.pause(10)
