# wordle-project
Project 1 submission for General Assembly Software Engineering Immersive.

To play the game click here:
[Wordle-project](https://bjpfox.github.io/wordle-project)


## List of features
The app has the same basic game play as the original [Wordle](https://www.nytimes.com/games/wordle/index.html). In addition to the minimum project requirements for Project 1, I also added these additional features: 
1. Player stats - remembers winning streak, number of wins, number of losses, and win percentange. A toggle button is provided for showing/hiding stats. 
1. Instructions - displays short instructions explaining the game play and how the other game options work. 
1. Session storage - remembers player stats, current game state and difficulty level preferences and automatically recovers them when player closes and re-opens page. A reset button is provided to reset stored data. 
1. Earn points / request a hint - awards points when player guesses correctly with spare guesses remaining. For the cost of 2 points, the player can get a hint containing a letter from the mystery word that they haven't guessed yet. A maximum of 3 hints are allowed per game. 
1. Hard mode - switches game play between an easy word dictionary and a larger dictionary containing more difficult words. 
1. Challenge a friend - generates a unique shareable URL that can be sent to a friend so that the players friend can attempt to solve the same word as the player. 


## Approach taken and technologies used for additional features
1. **localStorage** - remembers player stats, current game state and difficulty level preferences and automatically recovers them when player closes and re-opens page. A reset button is provided to reset player stats if preferred. The stored data is updated whenever any of the data changes. To avoid repeating code, data is loaded using the same submitGuess() function as used during normal game play. I used the [localStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) rather than sessionStorage so that the data doesn't expire. Since localStorage only stores strings, [JSON stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON parse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) are used to convert objects to strings and vice-versa.
1. **Earn points / request a hint** - points are awarded when a player guesses correctly with spare guesses remaining. For the cost of 2 points, the player can get a hint containing a letter which is in the mystery word and which they haven't guessed yet. If the player can't get a hint, they are told the reason why (e.g. they have insufficient points, have requested more than 3 hints, or there are no unguessed letters reamining). 
1. **Hard mode** - switches game play between an easy word dictionary and a larger dictionary containing more difficult words. The easy word dictionary is based on [previous words from the official wordle game](https://www.rockpapershotgun.com/wordle-past-answers), the hard word dictionary is [the one provided with the project](https://gist.git.generalassemb.ly/kenni/79988cc1cf9554e81954739f664c78d9)
1. **Challenge a friend** - generates a unique shareable URL that can be sent to a friend so that the players friend can try solving the same word as the player. To obfuscate the word (so the friend can't figure it out from the URL) I used a simple [base64 encoding](https://developer.mozilla.org/en-US/docs/Web/API/btoa) approach which I read about [here](https://stackoverflow.com/questions/14458819/simplest-way-to-obfuscate-and-deobfuscate-a-string-in-javascript). The [document.URL API](https://developer.mozilla.org/en-US/docs/Web/API/Document/URL) is used extract the encoded string and by decoding this the mystery word can be obtained. A try...catch statement is used in case the encoded string is not valid. I also used the [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) to develop a clipboard feature which enables copying the link to the users system clipboard. 


## Installation instructions  
The game can be played in any modern web browser and does not require any installation. 
To play the game click here:
[Wordle-project](https://bjpfox.github.io/wordle-project)


## Ideas for future extensions 
The following ideas were not implemented, but could be considered for future versions:
1. Ability to customise your word length and/or your allowed number of guesses
1. Use CSS animations to make the game more fun e.g. when letters change colour, or when extra points are awarded. 
1. Ability for the user to enter their own 5 letter word and generate a shareable link from that word to send to a friend. 
1. The app currently achieves Google Lighthouse scores of 100 for Performance, 100 for Best Practices, 88 for Accessibility and 84 for SEO. Future version should aim to get the Accessibility and SEO scores to 100.  


## References
1. https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText
1. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage 
1. https://developer.mozilla.org/en-US/docs/Web/API/Document/URL
1. https://developer.mozilla.org/en-US/docs/Web/API/btoa
1. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
1. https://stackoverflow.com/questions/14458819/simplest-way-to-obfuscate-and-deobfuscate-a-string-in-javascript 
1. https://gist.git.generalassemb.ly/kenni/79988cc1cf9554e81954739f664c78d9o1. 
1. https://www.rockpapershotgun.com/wordle-past-answers


## Appendix 1 - Game play and code structure
The notes below were developed to help me to understand the basic game play and to plan out the structure of my code. A more detailed explanation of how my code works is provided as comments in the code.

### Basic game play 
1. Page loads with a blank keyboard and blank set of six guess rows. A 'mystery word' is loaded but is not revealed to the player. 
1. Player takes successes guesses in an attempt to guess the 'mystery word'. Input can be provided by clicking the buttons or pressing keys on keyboard.  
1. Each time the player submits a guess, the colour keys on the keyboard and guess tiles are updated as follows:
    - Green: letter is in the word, and is in the correct position
    - Yellow: letter is in the word, but is in a different position
    - Grey: letter is not present anywhere in word 
1. Player can keep guessing until they have exhausted all guess attempts (6). If player runs out of guesses, player is told they have lost and the mystery word is revealed. Player stats (wins, losses, winning streak) are updated and displayed to player.  
1. If player gets word correct, game ends and player is congratulated for winning. Player stats (wins, losses, winning streak) are updated and displayed to the player.   
1. Once the game has ended the player can launch a new game game. It is also possible to reset a game part way through.  
1. A player can request hints for 2 point - see list of features above for more information.
1. A player can toggle between normal mode and hard mode - see list of features above for more information. The change will take place at the start of the next game.  


### Code structure / approach taken for basic game play 
1. On initial page load, startNewSession() is loaded. This function declares the variables to track game state and player stats, selects key elements from the DOM, adds event listeners, and declares the other functions to be used. 
1. startNewGame() launches a new game. This involves:
    - Resetting the keyboard and guess tiles
    - Loading a previous game from storage i.e updating the guess tiles, keys, mystery word, etc to reflect the last game
    - If nothing is in storage, loading a new guess word using getNewWord() and reseting the answerString 
1. getNewWord() randomly selects a word from the word array to be used for the current game, and puts it into localStorage. 
1. addLetter() is used to process a single letter entry (either from a keypress, a click on the keyboard, or from localStorage).  
Since it receives all keydown events, it also sends backspace and enter keydown events to deleteLetter() and submitGuess().
1. deleteLetter() deletes the previous letter entered on the guessTile and answerString and updates this in localStorage. 
1. submitGuess() processes the players guess, either following the player clicking or pressing enter on their keyboard. To avoid duplicating code, it is also used to process guesses loaded from storage. After checking that the word is valid, it then loops through each letter in the mystery word, and checks if the current guess has any matching letters. These matching letters are changed to the appropriate classes (correct = green, somewhere-else = yellow) with any remaining letters set to the not-present class (grey). Once the tiles and keys have been updated, submitGuess checks if the entire word was correct and if so, invokes winGame(). Otherwise, it invokes getNextGuess() unless there are no more guesses, in which case it invokes loseGame().
1. getNextGuess() moves to the next guess row so that the player can enter their next guess 
1. winGame() displays the win result, updates the game stats and localStorage. 
1. loseGame() displays the lose result and updates the game stats and localStorage.  