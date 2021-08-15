function sum(num1, num2){
    return num1 + num2;
}

function result (num1, num2, callback) {
    return callback(num1, num2);
}

console.log(result(2, 6, sum));


function date(callback){
    console.log(new Date);
    setTimeout(function (){
        let day = new Date;
        callback(day);
    }, 3000)
}

function printDate(dateNow){
    console.log(dateNow)
}
date(printDate);


function resta(num3, num4){
    return num3 - num4
}

function sustraccion(num3, num4, callback){
    return callback(num3, num4)
}

console.log(result (2,1, resta));

