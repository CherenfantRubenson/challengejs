let user;
let numberToTest = "0123456789."
let compt;

do {

    user = prompt("Entre Adrese ip u an");
    user = user.split('')


    for (let el of user) {

        if (!numberToTest.includes(el)) {

            alert("adres ip a pa korek");

        }
     if (el == '.'){

        compt +=1;
     }

    }
    
    if (user == '') {

        alert("Chan vid");


    }
} while (numberToTest.includes(user) && compt == 3)


let somme = 0;
for (let i = 0; i < user.length; i++) {




    if (user[i] == '.') {

        continue
    }
    user[i] = parseInt(user[i], 10);

    somme += user[i];

}
let Result = parseInt(user[0]) * somme

console.log(`Pot ki ouvri a se : ${Result}`)