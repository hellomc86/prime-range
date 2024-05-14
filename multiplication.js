const multiplicationTable3 = (n) => {

    process.stdout.write(` `);

    for (var j = 1; j <= n; j++) {
        process.stdout.write(` ${j}`);
    }
    for (var i = 1; i <= n; i++) {
        console.log("");
        //console.log(i);
        process.stdout.write(`${i}`);
        for (var j = 1; j <= n; j++) {

            process.stdout.write(` ${i * j}`);
        }

    }
    console.log("");

}

const multiplicationTable9 = (n) => {
    process.stdout.write(` `);

    for (var j = 1; j <= n; j++) {
        process.stdout.write(`  ${j}`);
    }
    for (var i = 1; i <= n; i++) {
        console.log("");
        //console.log(i);
        process.stdout.write(`${i}`);
        for (var j = 1; j <= n; j++) {
            let multiplicaiton = i * j;

            if (multiplicaiton < 10)
                process.stdout.write(`  ${multiplicaiton}`);
            else
                process.stdout.write(` ${multiplicaiton}`);
        }

    }
    console.log("");
}

const multiplicationTable = (n) => {
    if (n < 4)
        multiplicationTable3(n);
    else
        multiplicationTable9(n);
}

multiplicationTable(3);
multiplicationTable(5);