# measure temperature and write to serial port
def tempToSerial():
    serial.write_value("temperature:", input.temperature())
    basic.pause(1024)

#basic.forever(tempToSerial)

#----------------------------------------------
# measure humidity and write to serial port; also switch with each measurement the LED's color
def readHumidity():
    # one cable to -, one to P1; but the values flukatuate and look weird in air, dry and wet earth
    #humidity = pins.analog_read_pin(AnalogPin.P1)
    #basic.show_number(humidity) # takes too long, disabled

    # page 18: https://dll-production.s3-de-central.profitbricks.com/media/filer_public/21/6c/216cb180-14b9-499f-ac73-90ce209cae46/kopiervorlagen_und_projektbeschreibung.pdf
    pins.digital_write_pin(DigitalPin.P0, 1)
    humidity = pins.analog_read_pin(AnalogPin.P1)
    serial.write_value("humidity:", humidity)

    ledColor = Math.random() * 2**24 // 1
    #serial.write_value("color", ledColor)
    basic.set_led_color(__internal.__colorNumberPicker(ledColor))

    basic.pause(1024)

basic.forever(readHumidity)
