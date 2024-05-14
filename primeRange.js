

const checkIfPrime = (n)=> {

    if(n < 2) return false;

    if(n < 4 ) return true;

    let checkRange = Math.sqrt(n);   

    for(let i = 2; i <= checkRange; i++)
        if((n % i) === 0) return false;
    
    return true;
}

const primeRange = (min, max) => {

    var primeNumbers = [];

    for( let i = min; i <= max; i++)
        if(checkIfPrime(i)) primeNumbers.push(i);

    return primeNumbers;

}


console.log(primeRange(11, 20));