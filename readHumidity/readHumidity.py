# measure temperature and write to serial port
def tempToSerial():
    serial.write_value("temperature:", input.temperature())
    basic.pause(1024)

#basic.forever(tempToSerial)

#----------------------------------------------
# measure humidity and write to serial port; also switch with each measurement the LED's color
def readHumidity():
    humidity = pins.analog_read_pin(AnalogPin.P1)
    #basic.show_number(humidity) # takes too long, disabled
    serial.write_value("humidity:", humidity)
    ledColor = Math.random() * 2**24 // 1
    serial.write_value("color", ledColor)
    basic.set_led_color(__internal.__colorNumberPicker(ledColor))
    basic.pause(1024)

basic.forever(readHumidity)
