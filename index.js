
// Solution to Question 1
const convertFahrToCelsius(value){
if(typeof value == number || typeof value == "string"){
    let value = celsius * (9/5) + 32;
    return value.toFixed(4);
}

else{
    return `${value} is not a valid number but a/an ${typeof value}`
}
}


// Solution to Question 2
function checkYuGiOh(n){
    let arr = [];
    if (n % 2 === 0 && n % 3 === 0 && n % 5 === 0){
        arr.push("yu-gi-oh")
    }
    else if (n % 2 === 0 && n % 3 === 0){
        arr.push("yu-gi")
    }
    else if (n % 2 === 0 && n % 5 === 0){
        arr.push("yu-oh")
    }
    else if (n % 2 === 0){
        arr.push("yu")
    }
    else if (n % 3 === 0){
        arr.push("gi")
    }
    else if (n % 5 === 0){
        arr.push("oh")
    }
    else{
        return `invalid parameter`
    }
    return arr;
}
