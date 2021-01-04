import speech
import random
import microbit
from microbit import *

def sayText():
    # from the docu at https://microbit-micropython.readthedocs.io/en/v1.0.1/tutorials/speech.html
    # pitch - how high or low the voice sounds (0 = high, 255 = Barry White)
    # speed - how quickly the device talks (0 = impossible, 255 = bedtime story)
    # mouth - how tight-lipped or overtly enunciating the voice sounds (0 = ventriloquist’s dummy, 255 = Foghorn Leghorn)
    # throat - how relaxed or tense is the tone of voice (0 = falling apart, 255 = totally chilled)

    text = ["Useless climate, staring at me",
    "Yearning, yearning to be free",
    "The unpredictable sense of a short road",
    "An epidemic that comprehends"]
    
    for line in text:
        speech.say(line, speed=90, pitch=200, throat=50, mouth=200)
        microbit.sleep(500)

while True:
    if microbit.button_a.is_pressed():
        display.show(Image.SAD)
        sayText()
        display.clear()
    elif microbit.button_b.is_pressed():
        display.show(Image.HAPPY)
        microbit.sleep(500)
        display.clear()
        
    microbit.sleep(100)
