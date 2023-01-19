# wordle-project
Project submission for General Assembly Software Engineering Immersive

To play the game click here:
[Wordle-project](https://bjpfox.github.io/wordle-project)

## List of planned features
The first version of the app will aim to replicate the same game play as [Wordle](https://www.nytimes.com/games/wordle/index.html). 
See structure of game below. 

Once this is working, I plan to try implementing some extensions / modifications. 
Possible ideas for extensions: 
1. A version of wordle where you can customise your word length and maybe your allowed number of guesses (maybe it makes a suggestion as to how many guesses) - would need a bigger dictionary of words 
1. Session storage - to be investigated
1. To be developed


## Structure of game
1. Page loads with a blank keyboard and blank set of six guess rows
1. User input: by clicking the buttons. As this happens the guess tiles are automatically updated. 
1. User input alt way: can type letters 
1. After user presses enter, the colour keys on keyboard and guess tiles are updated per Wordle game play (green: correct position, yellow: incorrect position, dark grey: letter not present)
1. If user gets word correct, game ends and a container div congratulates user on correct answer
1. User can keep guessing until they have exhausted all attempts. If user runs out of guesses a container div tells user they lost and tells them what the correct word was. 
1. Once the above is working, look at options for extended game play (winning streak), keeping ntrack of points, etc.  


## Structure of code / basic approach
1. On initial page load, startNewSession() is loaded. This will be responsible for setting up the initial page (e.g. adding event listeners), launching games and keeping track of players overall win/loss stats.
2. startNewGame() will launch a new game. This will involve 
- Resetting the keyboard and guess tiles
- Generating a new guess word using getNewWord()
- Launching getNextGuess() to get the first guess from the player
3. getNewWord() will randomly select a word to be used. If I do the extension involving words of adjustable length, this will take an argument of the target word length. 
4.  getNextGuess() will allow the player to enter their next guess 
5.  submitGuess() will update the keys to reflect the guess. if correct it will launch winGame(), if not it will launch getNextGuess() unless there are no more guesses, in which case it will launch loseGame()
6. winGame() will display the win container and will update the score. container will have a play again button which will launch startNewGame().
7. loseGame() will display the lose container and will update the score. container will have a play again button which will launch startNewGame().
8. May should have letter processing function? Also need to handle delete and enter 

