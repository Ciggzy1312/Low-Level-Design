class Player:
    def __init__(self, name):
        self.name = name
        self.position = 0
        self.rank = 0

    def set_position(self, new_position):
        self.position = new_position

    def get_position(self):
        return self.position

    def get_name(self):
        return self.name

    def set_rank(self, rank):
        self.rank = rank