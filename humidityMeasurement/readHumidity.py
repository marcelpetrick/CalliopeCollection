def tempToSerial():
    serial.write_value("temp:", input.temperature())

basic.forever(tempToSerial)

def readHumidity():
    humidity = pins.analog_read_pin(AnalogPin.P1)
    basic.show_number(humidity)
basic.forever(readHumidity)
