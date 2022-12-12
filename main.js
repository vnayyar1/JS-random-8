

let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button. addEventListener("click", function(){

    let randomNumber = Math.floor(Math.random()*9);
    let answerText = " ";

    if (randomNumber == 0){
    answer = "No Way!";
}

else if (randomNumber == 1){
    answer = "It is Certain!";
}

else if (randomNumber == 2){
    answer = "It is definitely so!";
}

else if (randomNumber == 3){
    answerText  = "My Sources Say No!";
}

else if (randomNumber == 4){
    answerText  = "Outlook Not So Good!";
}

else if (randomNumber == 5){
    answerText  = "All Signs Point To Yes!";
}


else if (randomNumber == 6){
    answerText = "You Got It!";
}

else if (randomNumber == 7){
    answerText  = "Pondering...!";
}
else  {
    answerText  = "I Really Don't Care";
}
answer.innerHTML = answerText;
});
   
