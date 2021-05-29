// #1

var userObj = {
    firstName: 'Fedor',
    lastName: 'Fedorovich',
    age: 25
};

// #2

userObj.fullName = function() {
    return userObj.firstName + ' ' + userObj.lastName;
};

console.log(userObj.fullName());

// #3

function defUpperStr(name) {
    return (name || 'DEFAULT TEXT').toUpperCase();
}
console.log(defUpperStr('My text'));
console.log(defUpperStr());

// #4

function evenFn(n) {
    var array = [];
        for (var i = 1; i <= n; i++) if (i % 2 ===0)array.push(i);
        return array;
};
console.log(evenFn(10));


// #5

function weekFn(n) {
    switch(n) {
        case 1 : Status = 'Понедельник'; break;
        case 2 : Status = 'Вторник'; break;
        case 3 : Status = 'Среда'; break;
        case 4 : Status = 'Четверг'; break;
        case 5 : Status = 'Пятница'; break;
        case 6 : Status = 'Суббота'; break;
        case 7 : Status = 'Воскресенье'; break;
        default: Status = null;
    }return Status;
};
console.log(weekFn(3));

// #6

function ageClassification(age) {
    return (age > 122) ?  null :
    (age > 90) ? 'долгожители' :
    (age > 75) ? 'старческий возраст' :
    (age > 65) ? 'пожилой возраст' :
    (age > 44) ? 'средний возраст' :
    (age > 24) ? 'молодой возраст' :
    (age > 0) ? 'детский возраст' : null;
};

console.log(ageClassification(51));

// #7

function oddFn(n) {
    var array = [];
    var i = 0
    while(i < n){
        i++;
        if(i % 2) array.push (i);
      }return array;
}
console.log(oddFn(10));

// #8

function mainFunc(a, b, func) {
return func && typeof func === 'function' ? func(a, b) : false;
}

function cbRandom(a, b) {
    return Math.ceil(Math.random() * (a - b) + b);
}

function cbPow(a, b) {
    return Math.pow(a, b);
}

function cbAdd(a, b) {
    return a + b;
}

console.log(mainFunc(2, 5, cbRandom)); // целые числа в диапазоне 2..5
console.log(mainFunc(2, 5, cbPow)); // 32
console.log(mainFunc(2, 5, cbAdd)); // 7
console.log(mainFunc(2, 5, 'not a func')); // false

