//Array methods
const animals = ['dog','cow', 'cat']

let pos = animals.indexOf('cat')

console.log(pos)

console.log(animals.indexOf('hamster'))

animals.splice(1, 1, 'horse') //kopiuje fragment tablicy od 1 do 1 i zastępuje go 'horse'

console.log(animals)

const animals1 = ['guinea pig', 'hamster', 'mouse']

const animalsAll = animals.concat(animals1) //łączy tablice

console.log(animalsAll)

animalsAll.copyWithin(1, 3, 4) //zamienia element o indeksie 0 na ciąg elementów od 3 do 4

console.log(animalsAll)

animalsAll.unshift('tiger')  //dodaje emelemnty na początku tablicy

console.log(animalsAll)

animalsAll.shift()  //uwuwa element o indeksie 0

console.log(animalsAll)

animalsAll.push('zebra','lion')  //dodaje elementy na końcu tablicy

console.log(animalsAll)

animalsAll.pop()  //usuwa ostatni element tablicy
console.log(animalsAll)

const drinks = ['pepsi','kawa', 'sok']
const meals = ['schabowy', 'spaghetti', 'zupa']

const menu = [...drinks, ...meals] //... wyciąga wszystkie elementy tablicy z tablicy

console.log(menu)

menu.fill('dupa',4,5) //zastępuje dupą każdy element tablicy od 4 do 5 wyłącznie- zwraca nową tablicę
console.log(menu)