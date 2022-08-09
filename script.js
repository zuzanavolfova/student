const value1 = 10;
const value2 = 20;

const numbers = [0, 10, 1, 7, 2, 9, 11];

const duplicateNumbers = [0, 10, 0, 7, 9, 11, 5];

let numbersUI = document.querySelector(".numbers__field");
numbersUI.textContent=numbers;
/*
Napis funkci, ktera bude prebirat na vstupu pole. Bude vrace true, 
pokud obsahuje duplikatni cislo, false v opacnem pripade.
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
                    console.log('hura je to tam');
                    return true
                } else {
                    // console.log(duplicateNumbers[last]+ " " + duplicateNumbers[a] + " " + 'nic')
                    a--;
                }
            }
        }
}

console.log("checkDuplicate" + " " + checkDuplicate(duplicateNumbers));

/* fizz buzz */

/* 
Serad cisla v poli vzestupne a vrat vysledek
*/

numbers.sort(sortItems);
function sortItems(el1, el2) {
    if (el1 > el2)
    {return 1;
    }else {
        return -1;
    }
}
console.log(numbers)

/*
Modifikuj predchozi funkci tak, aby slo rozhodnot, zda se radi 
vzestupne nebo sestupne
*/
 






//const numbers = [];

function compare (value1, value2){
    // if (value1>value2){
    // return true
    // } else {
    //     return false
    // }
    return value1>value2;
}

console.log(compare(value1, value2));


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

console.log(findMax(numbers));

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



console.log(findMin(numbers));