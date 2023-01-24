# wordle-project
Project 1 submission for General Assembly Software Engineering Immersive

To play the game click here:
[Wordle-project](https://bjpfox.github.io/wordle-project)

## List of planned features
The first version of the app will aim to replicate the same basic game play as [Wordle](https://www.nytimes.com/games/wordle/index.html). Once this is working, I plan to try implementing some extensions / modifications. 
Ideas for extensions: 
1. Player stats - remembers winning streak, number of wins, number of losses
1. Session storage - remembers player stats and current game state and automatically recovers them when user closes and re-opens page 
1. Points based system - awards points when user guesses correctly with spare guesses remaining
1. Hint system - for 2 points, user can get a hint as a letter from the word which they haven't guessed yet
1. Hard mode - switches between an easy word dictionary and a hard word dictionary 


## Structure of game
1. Page loads with a blank keyboard and blank set of six guess rows
1. User input can be provided by clicking the buttons or pressing keys on keyboard.  
1. After user presses enter, the colour keys on keyboard and guess tiles are updated per Wordle game play (i.e. green: correct position, yellow: incorrect position, dark grey: letter not present)
1. User can keep guessing until they have exhausted all attempts. If user runs out of guesses, user is told they have lost and tells them what the correct word was. Player stats are displayed.  
1. If user gets word correct, game ends and user is congratulated for winning. Player stats are displayed.  
1. User can launch a new game once game has ended. TODO - consider adding ability to launch new game in middle of game. 

## Structure of code / basic approach
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

//TODO - start new game button not appearing?

## Technical aspects
1. LocalStorage - TODO
1. 

## Future work
The following ideas were not implemented but could be considered for future versions:
1. A version of wordle where you can customise your word length and maybe your allowed number of guesses (maybe it makes a suggestion as to how many guesses) - would need a bigger dictionary of words 
1. Use CSS animations e.g. when letter changes colour
