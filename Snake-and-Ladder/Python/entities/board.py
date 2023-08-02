class Board:
    def __init__(self, size):
        self.size = size*size
        self.snakes = {}
        self.ladders = {}

    def get_size(self):
        return self.size

    def add_snake(self, snake):
        self.snakes[snake.get_start()] = snake.get_end()

    def check_snake(self, position):
        return self.snakes.get(position)

    def add_ladder(self, ladder):
        self.ladders[ladder.get_start()] = ladder.get_end()

    def check_ladder(self, position):
        return self.ladders.get(position)