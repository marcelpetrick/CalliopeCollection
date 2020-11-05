# CalliopeCollection
Collection of projects for the Calliope Mini.
Code mostly exported as JS, but some as well in MicroPython.

## best editor so far
<https://makecode.calliope.cc/#editor>

## documentation
<https://makecode.calliope.cc/reference/music/begin-melody>

## write serial data (for isntance the current temperature)

> def on_forever():
>    serial.write_value("temp:", input.temperature())
>    pass
>basic.forever(on_forever)

### Show serial output

- connect Calliope via USB to PC
- open a terminal and configure properly ..
- see: <https://forum.calliope.cc/t/live-daten-vom-calliope-abgreifen/571/3>

TeraTerm works as well: 115200 for the baudrate; 8 bit; no parity; 1 bit stop bits; no flow control
>Device Friendly Name: Serielles USB-Gerät (COM6)
>Device Instance ID: USB\VID_0D28&PID_0204&MI_01\6&194AB456&0&0001
>Device Manufacturer: Microsoft
>Provider Name: Microsoft
>Driver Date: 6-21-2006
>Driver Version: 10.0.18362.1


