userName = prompt("Antre nonw svp");

userName = userName.split(" ")


for (let i = 0; i < userName.length; i++) {
    userName[i] = userName[i].charAt(0).toUpperCase() + userName[i].slice(1);

}

console.log(userName.join(' '))