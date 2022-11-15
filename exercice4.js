let x = 2;

let y = 7;
let tab1 = [],
  compt1 = 0;
let tab2 = [],
  compt2 = 0;
let tab3 = [],
  compt3 = 0;
let tab4 = [],
  compt4 = 0;

let intervalMax = 50;

for (let i = 0; i <= intervalMax; i++) {


  if (i % 2 == 0) {
    tab1.push(i);

    compt1 += 1;
  } else if (i % 7 == 0) {

    tab2.push(i);
    compt2 += 1;

  } else if (i % 2 == 0 && i % 7 == 0) {

    tab3.push(i);
    compt3 += 1;
  } else if (i % 2 != 0 && i % 7 != 0) {

    tab4.push(i)
    compt4 += 1;
  }




}

console.log(`${tab1} total nonb -> ${compt1}`)
console.log(`${tab2} total nonb -> ${compt2}`)
console.log(`${tab3} total nonb -> ${compt3}`)
console.log(`${tab4} total nonb -> ${compt4}`)