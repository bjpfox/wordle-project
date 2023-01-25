# wordle-project
Project 1 submission for General Assembly Software Engineering Immersive

To play the game click here:
[Wordle-project](https://bjpfox.github.io/wordle-project)

## List of features
The app has the following features has the same basic game play as [Wordle](https://www.nytimes.com/games/wordle/index.html). I have also added the following additional features: 
1. Player stats - remembers winning streak, number of wins, number of losses. A toggle button is provided for showing/hiding stats. 
1. Session storage - remembers player stats, current game state and difficulty level preferences and automatically recovers them when user closes and re-opens page. A reset button is provided to reset player stats if preferred. 
1. Points based system - awards points when user guesses correctly with spare guesses remaining
1. Hint system - for the cost of 2 points, the player can get a hint containing a letter which is in the mystery word and which they haven't guessed yet. A maximum of three hints are allowed per game. 
1. Hard mode - switches game play between an easy word dictionary and a larger dictionary containing more difficult words. 


## Basic game play 
1. Page loads with a blank keyboard and blank set of six guess rows. A 'mystery word' is loaded but is not revealed to the player. 
1. Player takes successes guesses in an attempt to guess the 'mystery word'. Input can be provided by clicking the buttons or pressing keys on keyboard.  
1. Each time the player submits a guess, the colour keys on the keyboard and guess tiles are updated as follows:
- Green: letter is in word, and is in the correct position
- Yellow: letter is in word, but is in a different position
- Dark grey: letter is not present in word 
1. Player can keep guessing until they have exhausted all attempts (6). If player runs out of guesses, player is told they have lost and the mystery word is revealed. Player stats (wins, losses, winning streak) are updated and displayed to player.  
1. If player gets word correct, game ends and player is congratulated for winning. Player stats (wins, losses, winning streak) are updated and displayed to the player.   
1. Once the game has ended the player can launch a new game once game. It is also possible to reset the game part way through.  
1. A player can request hints for 2 point - see list of features above
1. A player can toggle between normal mode and hard mode - see list of features above. The change will take place at the start of the next game.  

## Structure of code / approach taken 
1. On initial page load, startNewSession() is loaded. This function declares the variables to track game state and player stats, selects key elements from the DOM, adds event listeners, and declares the other functions to be used. 
2. startNewGame() launches a new game. This involves:
- Resetting the keyboard and guess tiles
- Generating a new guess word using getNewWord()
- Launching getNextGuess() to get the first guess from the player
3. getNewWord() randomly selectd a word to be used. 
4.  getNextGuess() moves to the next guess row so that the player can enter their next guess 
5.  submitGuess() processes the players guess. First it updates the colours of the keys and guess tiles based on the wordle colour code (green/yellow/grey). If entire word is correct it invokes winGame(). If not it invokes getNextGuess() unless there are no more guesses, in which case it invokes loseGame().
6. winGame() displays the win result and updates the game stats. 
7. loseGame() displays the lose result and updates the game stats. 


## Approach taken for specific features
1. Local storage
1. Hint system
1. Normal mode / hard mode 
 
## Technologies used 
1. LocalStorage - TODO
1.  


## Installation instructions  
The game can be played in any modern web browser and does not require any installation. The game was not specifically developed for mobile devices, but generally works on most mobile devices. To play the game click here:
[Wordle-project](https://bjpfox.github.io/wordle-project)

## Future work
The following ideas were not implemented but could be considered for future versions:
1. A version of wordle where you can customise your word length and maybe your allowed number of guesses (maybe it makes a suggestion as to how many guesses) - would need a bigger dictionary of words 
1. Use CSS animations to make the game more fun e.g. when letter changes colour, or when extra points are awarded. 
