// Your code here

let age = prompt('Сколько Вам лет?');
let year;
let oneNumber = (age % 10);
let twoNumber = (age % 100)
    if (4 < oneNumber && oneNumber <= 9 || (twoNumber >= 10 && twoNumber < 21)) {
        year = ('лет');
    }
    else if (oneNumber == 1) {
        year = ('год');
        console.log (year)
    }
    else if (1 < oneNumber && oneNumber < 5)  {
        year = ('года');
    }
    else {
        year= ('лет')
    }
alert('Вам' + ' ' + age + ' ' + year + '!');