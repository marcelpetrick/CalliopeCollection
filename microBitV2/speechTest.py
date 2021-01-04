import speech
import random
import microbit

def sayText():
    text = ["Useless climate, staring at me", "Yearning, yearning to be free", "The unpredictable sense of a short road", "An epidemic that comprehends"]
    
    for line in text:
        speech.say(line, speed=120, pitch=100, throat=100, mouth=200)

while True:
    if microbit.button_a.is_pressed():
        microbit.display.scroll("A")
        sayText()        
    elif microbit.button_b.is_pressed():
        microbit.display.scroll("B")
        
    microbit.sleep(100)
