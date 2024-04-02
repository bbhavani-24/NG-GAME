let x = Math.floor(Math.random()*100+1) //GUESSING NUMBER BETWEEN 1 TO 100 
let guesses=1; //NO OF GUESSES

//ON CLICKING THE SUBMIT BUTTON THE NUMBER GUESSING FUNCTION GETS ACTIVATED
document.getElementById('guess-submit').onclick = function()
{
    let y = document.getElementById('guess').value; //SELECTING THE INPUT FIELD
    // IF THE GUESS VALUE IS GREATER THAN THE RANDOM VALUE
    if(y > x){
      guesses++;
      alert("Guess a number smaller than the current value");
    }
    //IF THE VALUES ARE EQUAL
    else if(x == y){
      alert("Congratulations you guessed the number right");
    }
    //IF THE GUESS VALUE IS SMALLER THAN THE RANDOM VALUE
    else{
      guesses++;
      alert("Guess a number greater than the current value");
    }
}