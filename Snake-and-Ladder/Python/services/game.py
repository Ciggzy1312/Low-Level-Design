import random
from collections import deque

from entities.board import Board
from entities.dice import Dice
from entities.player import Player
from entities.jumper import Jumper

class Game:
    def __init__(self, board_size, num_dice):
        self.board = Board(board_size)
        self.dice = Dice(num_dice)
        self.players = deque()

    def add_player(self, name):
        player = Player(name)
        self.players.append(player)
        
    def add_snake(self, start, end):
        snake = Jumper(max(start, end), min(start, end))
        self.board.add_snake(snake)

    def add_ladder(self, start, end):
        ladder = Jumper(min(start, end), max(start, end))
        self.board.add_ladder(ladder)

    def move_player(self, player):
        steps = self.dice.roll()
        current_position = player.get_position()
        final_position = current_position + steps

        if final_position > self.board.get_size():
            final_position = current_position
        else:
            ladder_end = self.board.check_ladder(final_position)
            if ladder_end:
                print(f"{player.name} met a ladder that goes from {final_position} to {ladder_end}")
                final_position = ladder_end
            else:
                snake_end = self.board.check_snake(final_position)
                if snake_end:
                    print(f"{player.name} met a snake that goes from {final_position} to {snake_end}")
                    final_position = snake_end

        player.set_position(final_position)

        return steps, current_position, final_position

    def play_game(self):
        num_players = len(self.players)
        curr_player = 0
        rank = 1

        while True:
            num_players = len(self.players)

            if num_players <= 1:
                print("Game Over")
                break

            player = self.players[curr_player]
            self.players.popleft()
            steps, current_position, final_position = self.move_player(player)

            print(f"{player.name} moved {steps} steps from {current_position} to {final_position}\n")

            if final_position == self.board.get_size():
                player.set_rank(rank)
                print(f"{player.name} won the game with rank {player.rank}\n")
                rank += 1
                num_players -= 1
            else:
                self.players.append(player)
