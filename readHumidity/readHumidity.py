# measure temperature and write to serial port
def tempToSerial():
    serial.write_value("temperature:", input.temperature())
    basic.pause(1024)

#basic.forever(tempToSerial)

#----------------------------------------------
# measure humidity and write to serial port; also switch with each measurement the LED's color
def readHumidity():
    # one cable to -, one to P1; but the values fluctuate and look weird in air, dry and wet earth
    #humidity = pins.analog_read_pin(AnalogPin.P1)
    #basic.show_number(humidity) # takes too long, disabled

    #basic.clear_screen()

    observableMin = 300
    observableMax = 1024

    # page 18: https://dll-production.s3-de-central.profitbricks.com/media/filer_public/21/6c/216cb180-14b9-499f-ac73-90ce209cae46/kopiervorlagen_und_projektbeschreibung.pdf
    # one cable to P0, the other to P1 - simple as that
    pins.digital_write_pin(DigitalPin.P0, 1)
    basic.pause(10) # wait for a short delay
    humidity = pins.analog_read_pin(AnalogPin.P1)
    basic.pause(10)
    pins.digital_write_pin(DigitalPin.P0, 0) # off
    serial.write_value("humidity:", humidity)

    # map the value and then display it as bar to the screen (todo)
    mappedHumi = Math.map(humidity, observableMin, observableMax, 0, 9) // 1 # to make it an int; not double
    #basic.show_number(mappedHumi)
    basic.show_string(mappedHumi + " (" + str(humidity) + ")")

    # fancy led-color-change for each measurement
    ledColor = Math.random() * 2**24 // 1
    #serial.write_value("color", ledColor)
    basic.set_led_color(__internal.__colorNumberPicker(ledColor))

    basic.pause(1024 - 10 - 10) # one second minus the measurement duration

basic.forever(readHumidity)
