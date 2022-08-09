const value1 = 10;
const value2 = 20;

const numbers = [0, 10, 1, 7, 2, 9, 11];

const duplicateNumbers = [0, 10, 0, 7, 9, 11, 5];

let numbersUI = document.querySelector(".numbers__field");
numbersUI.textContent=numbers;
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
        let last = duplicateNumbers.length-1;
        let a = duplicateNumbers.length-2;
        for (last; last>0; last--){
            /*vezmu druhou hodnotu a porovnam ji.*/
            a = last - 1;
            while (a>=0){
                if (duplicateNumbers[last]===duplicateNumbers[a]){
                    // console.log('hura je to tam');
                    return true
                } else {
                    // console.log(duplicateNumbers[last]+ " " + duplicateNumbers[a] + " " + 'nic')
                    a--;
                }
            }
        }
}

// console.log("checkDuplicate" + " " + checkDuplicate(duplicateNumbers));

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
function fizzBuzz(){
// 2.najit hodnotu vstupu uzivatele
    let inputFizzBuzz =document.querySelector("input[id=fizzBuzz]").value;
    let fizzBuzzUI = document.querySelector('.fizzBuzz__Item')
// 3.zjisttit zda je hosnota cislo
// 4. pokud neni cislo vrati eror
    function checkType (){
    }
    /* 5. pokud je cislo zjistti zda je delitelne 3 a zaroven 5*/
    let remainder3 = inputFizzBuzz % 3;
    let remainder5 = inputFizzBuzz % 5;
    if (remainder3 === 0 && remainder5 === 0) {
        //pokud plati napsat Fizz Buzz
        fizzBuzzUI.innerHTML = 'Fizz Buzz';
    } else {
        //pokud neplati zjistit zda je delitelne 3
        if (remainder3 === 0){
            //pokud plati napsat fizz
            fizzBuzzUI.innerHTML = 'Fizz'
        }else {
            //pokud neplati zjistti zda je delitelne 5
            if (remainder5 === 0){
                // pokud plati napsat buzz
                fizzBuzzUI.innerHTML = 'Buzz'
            } else {
                //pokud neplati napsat cislo
                fizzBuzzUI.innerHTML = inputFizzBuzz;
            }
        }
    }
// X. vypsat vysledek do UI
}