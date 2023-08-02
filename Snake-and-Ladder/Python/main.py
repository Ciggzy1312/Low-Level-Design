from services.game import Game

if __name__=="__main__":
    board_size = int(input("Enter board size: "))
    num_dice = 1
    num_players = int(input("Enter number of players: "))

    game = Game(board_size, num_dice)

    for i in range(num_players):
        name = input(f"Enter player {i+1} name: ")
        game.add_player(name)

    num_snakes = int(input("Enter number of snakes: "))
    for i in range(num_snakes):
        start, end = map(int, input(f"Enter snake {i+1} start and end: ").split(" "))
        game.add_snake(start, end)

    num_ladders = int(input("Enter number of ladders: "))
    for i in range(num_ladders):
        start, end = map(int, input(f"Enter ladder {i+1} start and end: ").split(" "))
        game.add_ladder(start, end)

    game.play_game()