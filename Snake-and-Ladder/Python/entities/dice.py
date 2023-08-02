import random

class Dice:
    def __init__(self, number):
        self.number = number

    def get_number(self):
        return self.number

    def roll(self):
        return random.randint(1*self.number, 6*self.number)