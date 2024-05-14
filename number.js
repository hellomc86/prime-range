const numberOfPc = (n) =>{
    if (n % 10 === 1 && n % 100 !== 11) {
        return n + ' компьютер';
    } else if ([2, 3, 4].includes(n % 10) && ![12, 13, 14].includes(n % 100)) {
        return n + ' компьютера';
    } else {
        return n + ' компьютеров';
    }
}

console.log(numberOfPc(23));