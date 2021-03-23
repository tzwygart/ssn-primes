/**
 * All SSN Numbers that meet the following criteria
 *  1) First 3 digits are Prime
 *  2) Middle 2 digits are Prime
 *  3) Last 4 digits are Prime
 *  4) All 9 digits are Prime
 * 
 *  Output from main function getPrimeSsnAsString() is an array of strings containing the SSN's
 *  The time to run takes about 25 to 30
 *  
 *  You can use 'node app.js' or you can use 'npm start' to run the file
 * 
 * 
 *  @author Tim Zwygart
 */


function isPrime( number ) {
    const maxCheck = Math.floor( Math.sqrt(number) ); //No need to check for the % value past the sqaureroot of the number
    let isPrime = true; //assume the number is prime until it isn't

    if ( number < 2 ) {
        isPrime = false;
    } else {
        if( number !== 2 && number % 2 === 0) {
            isPrime = false;
        } else {
            //Only need to check using odd numbers
            for ( let i = 3; i <= maxCheck; i+=2 ) {
                if ( number % i === 0 ) {
                    isPrime = false;
                    break; //Break out of the loop as soon as we know it isn't prime
                }
            }
        }
    }

    return isPrime;
}

function getPrimesAsStrings( maxNum, numChars ) {
    let primes = [];
    // Find First non-null and add to primes, make null all multiples of that value
    for(let i = 2; i <= maxNum; i++) {
        if(isPrime(i)) {
            let value = i.toString();
            if(numChars && value.length < numChars) {
                value = value.padStart(numChars, '0')
            }
            primes.push(value);
        }
    }
    return primes;
}

function combinePrimesAsStrings( first3, middle2, last4 ) {
    let combinedPrimes = [];
    for(let i = 0; i < first3.length; i++) {
        for(let j = 0; j < middle2.length; j++) {
            for(let k = 0; k < last4.length; k++ ) {
                const stringValue = first3[i] + middle2[j] + last4[k];
                if(isPrime(Number(stringValue))) {
                    combinedPrimes.push(stringValue);
                }
            }
        }
    }
    return combinedPrimes;
}


function getPrimeSsnAsString() {
    const timeStart = Date.now();
    console.log('starting primes as strings');
    const first3Primes = getPrimesAsStrings(1000, 3);
    const middle2Primes = getPrimesAsStrings(100, 2);
    const last4Primes = getPrimesAsStrings(10000, 4);

    
    console.log(first3Primes);
    console.log(middle2Primes);
    console.log(last4Primes);

    const all9Primes = combinePrimesAsStrings(first3Primes, middle2Primes, last4Primes);
    console.log(all9Primes);
    const timeEnd = Date.now();
    const diff = timeEnd - timeStart;
    console.log(`Primes As Strings: ${diff}`);
}

console.log('1 isPrime: ' + isPrime(1));
console.log('3 isPrime: ' + isPrime(3));
console.log('4 isPrime: ' + isPrime(4));
console.log('5 isPrime: ' + isPrime(5));
console.log('6 isPrime: ' + isPrime(6));
console.log('2020003 isPrime: ' + isPrime(2020003));
console.log('2020004 isPrime: ' + isPrime(2020004));

const primes = getPrimeSsnAsString();
