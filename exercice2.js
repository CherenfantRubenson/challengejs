let userInput = prompt("Enter an interger please");
while(userInput != Math.floor(userInput) || userInput == ''){

    userInput = prompt(" Please enter an Interger");

}

if( userInput % 4 == 0){

    console.log("NOK")

}

else console.log("OK")