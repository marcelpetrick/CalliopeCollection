import speech
import random
import microbit

text = "Useless climate, staring at me"
    "Yearning, yearning to be free"
    "The unpredictable sense of a short road"
    "An epidemic that comprehends"

while True:
    if microbit.button_a.is_pressed() and microbit.button_b.is_pressed():
        microbit.display.scroll("AB")
        break
    elif microbit.button_a.is_pressed():
        microbit.display.scroll("A")
        speech.say(line, speed=120, pitch=100, throat=100, mouth=200)
    elif microbit.button_b.is_pressed():
        microbit.display.scroll("B")
        
    microbit.sleep(100)
