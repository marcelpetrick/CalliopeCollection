# pumping heart on the LED-matrix: from full brightness to "off" and back ..

factor = 2
b = 1
led.set_brightness(b)

while not (input.button_is_pressed(Button.A)):
    b = b * factor    
    
    if b <= 1:
        b = 1
        factor = 2

    if b >= 255:
        b = 255
        factor = 0.5

    led.set_brightness(b)
    
    basic.show_icon(IconNames.HEART)
    #basic.pause(10)
