/*
Stworzyć tablicę z cyframi 1, 5, 13, 26, 48
Za pomocą forEach lub map wylogować wszyskie liczby z tablicy pomnożone przez 5
Za pomocą instrukcji warunkowej If oraz odpowiedniej pętli przejść po nowej tablicy i sprawdzić, które liczby
są parzyste a wynik wylogować za pomocą template stringa:
Liczba parzysta:
Liczba nieparzysta:
*/
const arr = [1, 5, 13, 26, 48]

const arr1 = arr.map(i => i * 5)
console.log(arr1)

for (const arg of arr1){
    if (arg % 2 === 0){
        console.log(`Liczba parzysta: ${arg}`)
    }
    else{
        console.log(`Liczba nieparzysta: ${arg}`)
    }
}