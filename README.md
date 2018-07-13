# Psychic-Game

psuedocode

- Generate a random alpha character and set to value.
- Use onkeyup to capture the user's input
- print user input out onto the screen AGGREGATED
    Bonus: show "last key pressed" as well as "all guesses" (I didnt' like the way they had the demo)
- add to winTotal or lossTotal


- Make sure to use toLower() to make sure the user input does not lose due to case issues

Other things needed:
    creating a random character
        Needs to be initialized
        Needs to be reset after the 9th guess OR the user guesses correctly
    win or loss
        loss++ if user does not guess within 9 guesses
        win++ if the user guesses correctly
    user input
        only 9 tries
        display all user input 
    
