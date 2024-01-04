const titulo = document.getElementById('titulo');


 titulo.innerText='Frutas'

 const HeaderFooter= document.querySelectorAll('header, footer');

 for (let i = 0; i < HeaderFooter.length; i++) {
    HeaderFooter[i].style.backgroundColor = 'orange'; 
}


const footerP= document.querySelector('footer p');

footerP.innerText += ' Ricardo Díaz - Cohort 53';


const homeDiv= document.createElement ('Div');
homeDiv.id= 'productos'
homeDiv.style.display="flex"
homeDiv.style.flexWrap="wrap"
homeDiv.style.justifyContent="center"
homeDiv.style.gap="5%"
homeDiv.style.margin=" 10% 2%"
homeDiv.style.width="90%"


document.querySelector('main').appendChild(homeDiv);






const newCard = document.getElementById('productos');    

function designCard(nombre, foto, desc) {
    const card = document.createElement('article');
    card.innerHTML = `
        <h2 id="tittle">${nombre}</h2>
        <img id="photo" src="${foto}" alt="${nombre}">
        <p id="pro_desc">${desc}</p>
    `;
    
    return card;
}


function createCard(frutas, section) {
    section.innerHTML = ""; 
    const fragment = document.createDocumentFragment();

    for (const fruta of frutas) {
        const card = designCard(fruta.nombre, fruta.foto, fruta.descripcion);
        fragment.appendChild(card); 
    }

    section.appendChild(fragment); 
}

createCard(frutas, newCard);

const title= document.getElementById('tittle')
title.style.textAlign='center'
title.style.fontWeight='bold'


const articles = document.querySelectorAll('article');

for (const element of articles) {
    element.style.display = 'flex';
    element.style.flexDirection = 'column';
    element.style.width = '28%';
    element.style.borderRadius = '25px';
    element.style.boxShadow = '0px 0px 10px #000';
    element.style.overflow = 'hidden';
    element.style.justifyContent = 'center';
    element.style.alignItems = 'center';
    element.style.marginBottom= '3%'
    element.style.padding= '3% 0'
}

const photos = document.querySelectorAll('img');
for (const element of photos) {
    element.style.width = '100%';
    element.style.objectFit='contain'
    element.style.height='220px'
}

const desc = document.querySelectorAll('p');
for (const element of desc) {
    element.style.width = '80%';
}


const listDiv=document.createElement('div') 
document.querySelector('main').appendChild(listDiv);
listDiv.id='lista'







const divList = document.getElementById('lista');    


const titleList= document.createElement('h3')
titleList.textContent="Frutas Dulces";
divList.appendChild(titleList);
const newList=document.createElement('lu')
newList.id='NList'
divList.appendChild(newList);



function designList(nombre) {
    const listItem = document.createElement('li');
    listItem.textContent = nombre;
    return listItem;
}


function createList(frutas, section) {
    section.innerHTML = ""; 
    const fragment = document.createDocumentFragment();
for (let i = 0; i < frutas.length; i++) {
        if(frutas[i].esDulce){
        const list = designList(frutas[i].nombre);
        fragment.appendChild(list); 
        }
    }

    section.appendChild(fragment); 
}


createList(frutas, newList);

