# switch for each single LED of the matrix the brightness randomly every half second
def randomLedBrightness():
    basic.clear_screen()
    for x in range(0, 5):
        for y in range(0, 5):
            #led.plot_brightness(x, y, x * y * 255 / 25)
            led.plot_brightness(x, y, randint(0, 255))
    basic.pause(500)

basic.forever(randomLedBrightness)
