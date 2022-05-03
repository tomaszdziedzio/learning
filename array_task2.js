/*
Stworzyć tablicę z cyframi
Stworzyć tablicę z jedzeniem
Stworzyć nową zmienną i przypisać do niej połączone tablice
*/

const numbers = [1, 2, 3]
const meals = ['dumplings', 'pork', 'soup']

const menu = [...numbers, ...meals]
console.log(menu)