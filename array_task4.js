/*
Stworzyć tablicę z jednym kolorem zapisamym małymi literami.
Dodać nowy kolor na początku i na końcu tablicy.
Przeiterować po tablicy za pomoca pętli for i wylogować:
Mój ulubiony kolor to: [nazwa koloru z wielkiej litery]
*/
const colours = ['black']

colours.unshift('white')
colours.push('purple')

for (let i=0; i<colours.length; i++){
    console.log(`Mój ulubiony kolor to: ${colours[i].charAt(0).toUpperCase().concat(colours[i].slice(1))}`)
}