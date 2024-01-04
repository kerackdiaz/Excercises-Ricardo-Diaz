const imprimirMensaje = (mensaje) => console.log(mensaje)



const crearmultiplicación = (number1, number2) => {
  let resultado = number1 * number2;
  return resultado;
};

const array = [ 1,2,3,4,5,6,7,8,9 ]

const newArray = array.map((num, index) => crearmultiplicación(num, index));

console.log(newArray);





function filterData(data, value) {
  const sortedData = data.sort((a, b) => {
    if (a[value] < b[value]) return 1;
    if (a[value] > b[value]) return -1;
    return 0;
  });

  const top10 = sortedData.slice(0, 10);
  return top10;
}


let filteredData = filterData(beers, "abv");
console.log(filteredData);

 filteredData = filterData(beers, "ibu");
console.log(filteredData);


function beerByName(data, name) {
  return data.find(dat => dat.name === name);
}

const beer = beerByName(beers, 'Buzz');
console.log(beer);



function FindBy(data) {
  const value = prompt(`dato que desea buscar Ej: "ibu, abv, etc"`);
  const inputValue = Number(prompt(`Ingrese el valor de la busqueda`));

  const filterData = data.find(dat => dat[value] === inputValue);

  if (filterData) {
    return filterData;
  } else {
    console.log(`No hay cerveza con un ${value} de ${inputValue}`);
    return console.log(`el valor ingresado es incorrecto`)
  }
}

console.log(FindBy(beers));


function indexdata (data, value){
  const indexPosition= data.findIndex(dat => dat.name == value);
  if(indexPosition !== -1){
    return indexPosition;
  }
  return console.log(`${value} no existe`);
}

const beerIndex = indexdata(beers, 'Rabiator')
console.log(`la posición de la cerveza es  ${beerIndex}`)



function byAlcohol(data, maxValue) {
  const filteredData = data.filter(dat => dat.abv <= maxValue);

  const formattedBeers = filteredData.map(beer => {
    return {
      nombre: beer.name,
      alcohol: beer.abv,
      amargura: beer.ibu
    };
  });

  return formattedBeers;
}

console.log(byAlcohol(beers, 5));



function filterAndSort(beers, property, ascending) {
  const sortedBeers = beers.sort((a, b) => {
    if (ascending) {
      return a[property] - b[property];
    } else {
      return b[property] - a[property];
    }
  });

  return sortedBeers.slice(0, 10);
}

console.log( filterAndSort(beers, 'abv', true)); 





const $tbody = document.getElementById('tbody');

function createRow(beer) {
  return `
    <tr>
      <td>${beer.name}</td>
      <td>${beer.abv}</td>
      <td>${beer.ibu}</td>
    </tr>`;
}

function completeTable(beerRows, $element) {
  let template = '';
  beerRows.forEach((beer) => {
    template += createRow(beer);
  });
  $element.innerHTML = template;
}

completeTable(filterAndSort(beers, 'abv', true), $tbody);

