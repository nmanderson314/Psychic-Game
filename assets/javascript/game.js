
//
var randomAlpha = ""; //for the computer choice
var possible = "abcdefghijklmnopqrstuvwxyz"; //all possible options
var wins = 0;
var losses= 0;
var userSelection="";
var selectionAggregate = "";
var chancesLeft = 9;


//Generate random alpha character using function     
function makeChoice() {
    randomAlpha = possible.charAt(Math.floor(Math.random() * possible.length));
    return randomAlpha;
}
//function for updating the html ids
function updatePage(){
    document.querySelector("#wins").innerHTML = wins; 
    document.querySelector("#losses").innerHTML = losses; 
    document.querySelector("#chancesLeft").innerHTML = chancesLeft;
    document.querySelector("#selectionAggregate").innerHTML = selectionAggregate;

}

// initialize the computer selection
if (randomAlpha == ""){
    makeChoice();
}

//capture the user guess 
document.onkeyup = function(event) {
// Determines which key was pressed.
userSelection = event.key;

//only run if a valid alpha character was selected AND if the user did not just win AND the user has chances left
//possible.indexOf(userSelection) will return -1 if the user entered a value not in the string possible defined above
if(possible.indexOf(userSelection) >-1 && userSelection !== randomAlpha && chancesLeft >= 1){
    if (selectionAggregate == ""){
        selectionAggregate = " " + userSelection;
    }
    else{
        selectionAggregate = selectionAggregate + ", " + userSelection;
    }
    //remove a chance
    chancesLeft--;
    //update the html
    updatePage();
}
else if(userSelection == randomAlpha){
    //add to wins
    wins++;
    
    //clear selection and aggregate
    selectionAggregate = "";
    userSelection="";

    //reset chancesLeft
    chancesLeft = 9;

    //create a new randomAlpha
    makeChoice();
    updatePage();
    //stops running the entire onkeyup function
    return userSelection;
}

//this will only run if the user did not win and they're out of chances

if (chancesLeft == 0){
    //add to losses
    losses++;
    
    //clear selection and aggregate
    selectionAggregate = "";
    userSelection="";

    //reset chancesLeft
    chancesLeft = 9;

    //create a new randomAlpha
    makeChoice();
    updatePage();
}

}
