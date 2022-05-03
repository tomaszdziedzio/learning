//Stworzyć tablicę letters ['c','d']
//Dodać na początku 'a' i 'b' oraz na końcu 'e' i 'f'
//Sprawdzić czy tablica zawiera 'c'
//Wylogować zmodyfikowaną tablicę oraz wynik sprawdzenia 'c'

const letters = ['c','d']

letters.unshift('a','b')

letters.push('e','f')

console.log(letters)

console.log(letters.includes('c'))