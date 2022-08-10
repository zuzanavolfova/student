const value1 = 10;
const value2 = 20;

const numbers = [0, 10, 1, 7, 2, 9, 11];

const duplicateNumbers = [0, 10, 0, 7, 9, 11, 5];

//let numbersConst = document.querySelector(".numbers__const");
//let numbersUI = document.querySelector(".numbers__field");
//numbersConst.textContent=numbers;
/*
Napis funkci, ktera bude prebirat na vstupu pole. Bude vrace true, pokud obsahuje duplikatni cislo, false v opacnem pripade.
*/

function checkDuplicate (duplicateNumbers){
/* zkontroluju jestli je pole naplnene.*/
    if (!duplicateNumbers.length){
        alert("nejsou zadané hodnoty")
        return 0
    } 
/*1. vezmu posledni hodnotu a porovnam ji se vsema predchozima.*/
    let vysledek;
    for (let last = duplicateNumbers.length-1; last>0; last--){
        /*vezmu druhou hodnotu a porovnam ji.*/
        let a = last - 1;
        while (a >= 0){
            if (duplicateNumbers[last]===duplicateNumbers[a]){
                // console.log('hura je to tam');
                return true;
            } else {
                // console.log(duplicateNumbers[last]+ " " + duplicateNumbers[a] + " " + 'nic')
                a--;
            }
        }
    }
    return false
}
    //TODO dodelat vratit false !!!

console.log("checkDuplicate" + " " + checkDuplicate(duplicateNumbers));
console.log("checkDuplicate" + " " + checkDuplicate(numbers));

/* 
Serad cisla v poli vzestupne a vrat vysledek
*/

function sortToMax(el1, el2) {
    if (el1 > el2)
    {return 1;
    }else {
        return -1;
    }
}
// console.log(numbers);
function sortToMin(el1, el2) {
    if (el1 < el2)
    {return 1;
    }else {
        return -1;
    }
}
// console.log(numbers);
/*
Modifikuj predchozi funkci tak, aby slo rozhodnot, zda se radi 
vzestupne nebo sestupne
*/
 
// TODO napis si svoji vlastni funkci, ktera bude prebirat pole ktere chces seradit a funkci ci parametr, ktery bude rikat zda sestupne nebo vzestupne.
// bude vracet nove serazene pole
// inspirace quicksort, bubble sort
function sortUI (){
    let option = document.querySelector("select[id=sort]").value;
    // console.log(option);
    if (option==0){
        numbers.sort(sortToMax);
        // console.log(numbers)
    } else {
        numbers.sort(sortToMin);
        // console.log(numbers)
    }
    numbersUI.innerHTML=numbers;
}

function compare (value1, value2){
    // if (value1>value2){
    // return true
    // } else {
    //     return false
    // }
    return value1>value2;
}

// console.log(compare(value1, value2));

function findMax (numbers){    
    let max = 0;
    for (let i = 0; i < numbers.length; i++){
        if (compare(numbers[i], max)) {
            max=numbers[i]
        }
        //console.log(numbers[i], numbers[i+1]);
        //console.log(max)
    }
    return max
}

// console.log(findMax(numbers));

function findMin (numbers){
    if (!numbers.length) {
        return 0;
    }
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++){
        if (!compare(numbers[i], min)) {
            min=numbers[i]
        }
    }
    return min
}

// console.log(findMin(numbers));

/* fizz buzz */
/*Fizz buzz is a group word game for children to teach them about division.[1] Players take turns to count incrementally, replacing any number divisible by three with the word "fizz", and any number divisible by five with the word "buzz". */

/*
1. Udelat UI
-vstup uzivatele*/

// TODO vypsat vysledek do konzole a vypsat vsechny moznosti od 1 po maximumNumber
function fizzBuzzPokus(){
// 2.najit hodnotu vstupu uzivatele
    let inputFizzBuzz =document.querySelector("input[id=fizzBuzz]").value;
    let fizzBuzzUI = document.querySelector('.fizzBuzz__item')
// 3.zjisttit zda je hosnota cislo
// 4. pokud neni cislo vrati eror
    // function checkType (){
    // }
    /* 5. pokud je cislo zjistti zda je delitelne 3 a zaroven 5*/
    if (inputFizzBuzz % 3 === 0 && inputFizzBuzz % 5 === 0) {
        //pokud plati napsat Fizz Buzz
        fizzBuzzUI.innerHTML = 'Fizz Buzz';
    } else if (inputFizzBuzz % 3 === 0) {
        //pokud neplati zjistit zda je delitelne 3
            //pokud plati napsat fizz
        fizzBuzzUI.innerHTML = 'Fizz'
    } else if (inputFizzBuzz % 5 === 0){
    //pokud neplati zjistti zda je delitelne 5
        // pokud plati napsat buzz
        fizzBuzzUI.innerHTML = 'Buzz'
    } 
    //pokud neplati napsat cislo
    fizzBuzzUI.innerHTML = inputFizzBuzz;
// X. vypsat vysledek do UI
}


function fizzBuzz(maximumNumber){
    fieldFizzBuzz = [];
    for (let number = 1; number <= maximumNumber; number++) {;
    //vzit jednicku a zkontrolovat pravidla
    //opakovat dokud nedosahnu maxima
    //na konci pricist 1
    if (number % 3 === 0 && number % 5 === 0) {
        //pokud plati napsat Fizz Buzz
        fieldFizzBuzz.push('FizzBuzz');
    } else if (number % 3 === 0) {
        //pokud neplati zjistit zda je delitelne 3
            //pokud plati napsat fizz
            fieldFizzBuzz.push('Fizz');
    } else if (number % 5 === 0){
    //pokud neplati zjistti zda je delitelne 5
        // pokud plati napsat buzz
        fieldFizzBuzz.push('Buzz');
    } else{
    //pokud neplati napsat cislo
    fieldFizzBuzz.push(number);}
    }
    return fieldFizzBuzz
}
console.log(fizzBuzz(35));


/* Napis funkci, ktera prebira 2 argumenty - pole cisel, hledane cislo. Funkce vrati true, pokud v poli exsituje alespon jeden vyskyt hledaneho cisla.
   False v opacnem pripade. Najdi nejoptimalnejsi reseni.
*/
function findDuplicate(field, number){
    for (let index = 0; index < field.length; index++){
        if (field[index] === number){
        return true
        }
    }
    return false
}
console.log(findDuplicate(numbers,55))

function findDuplicate2(field, number){
    for (let index = 0; index < field.length; index++){
        if (field[index] === number){
        break
        }return false
    } return true
}
console.log("find duplicate 2" + " " + findDuplicate2(numbers,55))

/*//function checkDuplicate (duplicateNumbers){
// zkontroluju jestli je pole naplnene.
if (!duplicateNumbers.length){
    alert("nejsou zadané hodnoty")
    return 0
} 
//1. vezmu posledni hodnotu a porovnam ji se vsema predchozima.
let vysledek;
for (let last = duplicateNumbers.length-1; last>0; last--){
    /*vezmu druhou hodnotu a porovnam ji.
    let a = last - 1;
    while (a >= 0){
        if (duplicateNumbers[last]===duplicateNumbers[a]){
            // console.log('hura je to tam');
            vysledek = true
            return true;
        } else {
            // console.log(duplicateNumbers[last]+ " " + duplicateNumbers[a] + " " + 'nic')
            a--;
        }
    }
}
if (vysledek !== true){
    return false
}
*/

let inputString = "balaklava";

/* Napis funkci, ktera prebira 1 argument - retezec. Funkce vraci soucet vsech znaku minus vsechny vyskyty symbolu 'a'. 
   Vymysli reseni za pouziti continue.
*/