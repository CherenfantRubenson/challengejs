// "5 45 123 12"
// ap bay (5) * (4+5) * (1+2+3) * (1+2) => 5*9*6*3
// ki bay total: 810



let number = "5 45 123 12"
let numberToTab = number.split(" ")

let tab = []

for (let i of numberToTab) {
  let receiver = 0;

  if (i.length > 1) {

    for (let v of i) {


      receiver += parseInt(v)
    }
    tab.push(z)
  } else {

    tab.push(parseInt(i))
  }





}
let sum = tab[0];
for (var i = 1; i < tab.length; i++) {

  sum *= tab[i]


}