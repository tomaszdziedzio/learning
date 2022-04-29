//Pętla for

const cities = ['res', 'krakow', 'warsaw', 'gdansk', 'berlin']

for (let i=0; i<cities.length; i++){
    console.log(`To miasto nazywa się ${cities[i].toUpperCase()}`)
}

//Pętla while

let x = 0

while(x<10){
    x += 2
    console.log(x)
}

//Pętla do...while

let y = 20

do {
    y -= 3
} while (y>0)

console.log(y)

//Pętla for...of

const numbers = [5, 8, 10, 23, 48, 60]

for (const number of numbers){
    console.log(number/5)
}

for (const number1 of numbers){
     if (number1 % 2 == 0){
        console.log(`Liczba ${number1} jest parzysta`)
    }
    else{
        console.log(`Liczba ${number1} jest nieparzysta`)
    }
}