# Snake and Ladder Problem

Create a snake and ladder application. The application should take as input (from the command line or a file):

- Size of the board (n > 0)
- Number of players (p) followed by p lines each containing a name.
- Number of snakes (s) followed by s lines each containing 2 numbers denoting the head and tail positions of the snake.
- Number of ladders (l) followed by l lines each containing 2 numbers denoting the start and end positions of the ladder.

After taking these inputs, you should print all the moves in the form of the current player name followed by a number denoting the die roll and the initial and final position based on the move.
Format: <player_name> rolled a <dice_value> and moved from <initial_position> to <final_position>

When someone wins the game, print that the player won the game.
Format: <player_name> wins the game

### Problem Requirements

- The board will have n*n cells starting from 1.
- The board will have one dice with a face value from 1 to 6.
- On rolling the dice a random number will be generated which will be used to determine the move.
- A player moves from his/her current position by the number on the die rolled.
- A player only wins the game if he/she is able to land exactly on the last cell
- If the final position exceeds the size of the board, the player stays in his/her current position.
- Each player has a piece which is initially kept outside the board (i.e., at position 0).
- The board will have a snake at some cells and a ladder at some cells.
- On landing at a position with the snake head, the player should go down to the position of the snake tail.
- On landing at a position with the ladder bottom, the player should go up to the position of the ladder top.

### Assumptions

- The board is always a square board.
- There won't be a snake at the last cell or a ladder at the first cell.
- Snake and Ladder won't form a cycle or infinite loop.
