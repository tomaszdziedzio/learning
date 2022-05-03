/*
Stworzyć stringa z samochodami "Audi, Mercedes, BMW, Nissan, Dodge"
Za pomocą metody na stringu zrobić z niego tablicę i przypisać do nowej zmiennej
Za pomocą operatora warunkowego sprawdzić czy długość tablicy jest większa niż 3. Jeśli tak to wylogować
    "JEST OK,", jeśli nie to wylogować "Nie jest OK"
Za pomocą instrukcji warunkowej i odpowiedniej metody sprawdzić czy tablica zawiera Audi
    Jeśli tak, za pomocą odpowiedniej metody dodać nową markę do tablicy
    Jeśli nie, za pomocą odpowiedniej metody usunąć ostatni element z tablicy
*/
const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'
const carsArr = cars.split(',')

carsArr.length > 3 ? console.log('JEST OK'): console.log('Nie jest OK')

if (carsArr.includes('Audi')){
    carsArr.push('Jeep')
}
else{
    carsArr.pop()
}