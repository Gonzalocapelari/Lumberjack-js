document.addEventListener('DOMContentLoaded', () => {
const palitoizq = document.createElement('div') //creo el div del palito izq
const palitoder = document.createElement('div') //creo el div del palito der
const palito= document.createElement('div') //creo el div del palito

const grid = document.getElementById("grid") //agarro el grid del html
const width = 5; //cantidad de bloques
const tam_cuadro = 50; //tamanio pixeles
let posicionJugador = 5 //div index 5 (pos6)
let elementoJugador; //jugador global
let direccionplayer = 'right'
let juegorunning = 'true'
let cont = 1;
const puntos = document.getElementById('contador') //div del contador
let puntaje = 0;
puntos.textContent =0
const papu = document.getElementById('papu') //creo paragraph papu para las quotes
const pos = {
    x:50,
    y:100,
}


const posarbol = {
    x:1,
    y:1
}
const pospalito = {
    y:0
}

function moverpalito(){
    palito.style.top = `${pospalito.y + 50}px`
    pospalito.y +=50;
    if(pospalito.y==200){
        pospalito.y = 0
        crearpalito()
    }
}



// function crearpalito(){
// let numeroAleatorio = Math.floor(Math.random() * 2);
// console.log(numeroAleatorio);
// if(numeroAleatorio == 0)
//         palitoizq.setAttribute('class', 'palito_izq')    
// if(numeroAleatorio == 1)
//         palitoder.setAttribute('class', 'palito_der')  
    
//     palito.style.top = `${pospalito.y}px`
//     document.getElementById('idarbol').appendChild(palito);

// }
function crearpalito(){
    let numeroAleatorio = Math.floor(Math.random() * 2);
console.log(numeroAleatorio);
if(numeroAleatorio == 0)
        palito.setAttribute('class', 'palito_izq')    
if(numeroAleatorio == 1)
        palito.setAttribute('class', 'palito_der')  
    
    palito.style.top = `${pospalito.y}px`
    document.getElementById('idarbol').appendChild(palito);

}

function quote_random(){
  
    fetch('https://api.quotable.io/random').then( (respuesta) =>{
        return respuesta.json()
    }).then((data) => {
papu.innerHTML = data.content+'<br>'+data.author  //le hago un textcontent si fuera solo tecto pero
//el problema es que quiero meter  un <br> en medio y necesito hacerlo con innerHTML
papu.style.fontSize = '5%';
papu.style.textAlign = "center" //soy un genio jajaj
document.body.append(papu) // aver si funciona
    }) 

}

function crearJugador(){
 elementoJugador = document.createElement('div') //creo div del jugador a la derecha
    elementoJugador.className = 'jugador-izquierda'
   // elementoJugador.setAttribute('class', 'jugador-derecha')
    elementoJugador.id = 'jugador'
    // elementoJugador.style.right = ('738px')
    elementoJugador.style.position = 'absolute';
    elementoJugador.style.left = `${pos.x}px`
    elementoJugador.style.top = `${pos.y}px`
//   elementoJugador.style.left = `${(posicionJugador % width) * tam_cuadro}px` //horizontal
//   elementoJugador.style.top = `${Math.floor(posicionJugador / width) * tam_cuadro}px`; //vertical
    grid.appendChild(elementoJugador);
}
//console.log(2)

function creararbol(){
            const elementoArbol = document.createElement('div')
            elementoArbol.setAttribute('id', 1)
            elementoArbol.setAttribute('class', 'arbol')
            document.getElementById('idarbol').appendChild(elementoArbol);
        }

function crear(){
    for (let i = 0; i<3; i++){

        for (let j = 0; j<5; j++){

        if(i==1){
            const cuadrado = document.createElement('div')  //creo div del piso
            cuadrado.setAttribute('id', cont)
            cont++
            cuadrado.setAttribute('class', "piso")
            //cuadrado.className("piso")
            grid.appendChild(cuadrado)
}
        if(i==0){
            const cuadrado = document.createElement('div') //creo div del cielo
        cuadrado.setAttribute('id', cont)
        cont++
        cuadrado.setAttribute('class', "cielo")
        grid.appendChild(cuadrado)
}
if(i==0){
            const cuadrado = document.createElement('div') //creo div del cielo
        cuadrado.setAttribute('id', cont)
        cont++
        cuadrado.setAttribute('class', "cielo")
        grid.appendChild(cuadrado)
}
if(i==0){
            const cuadrado = document.createElement('div') //creo div del cielo
        cuadrado.setAttribute('id', cont)
        cont++
        cuadrado.setAttribute('class', "cielo")
        grid.appendChild(cuadrado)
}
        }
    }
    crearJugador()
}

crear();
creararbol();
crearpalito();

function dibujar(tecla){
if(tecla=='a')
    elementoJugador.className = 'jugador-izquierda'
else
    elementoJugador.className= 'jugador-derecha'

    elementoJugador.style.left = `${pos.x}px` //posicion que cambia es la x por ahora
    elementoJugador.style.top = `${pos.y}px` //queda siempre en el cuadro de abajo de 50px
}

function mover(tecla){ //muevo la pos en variable no se pinta todavia
    if(tecla == 'a'){
        pos.x =50
    console.log(pos.x)}
//pos.x -= tam_cuadro  //le suma 50px que es el tamanio de mis cuadros
      //  if(pos.x <0)  //si esta por debajo de los 0 pixeles (se sale del div) le devuelvo la pos a 0
    //    pos.x = 0

    if(tecla == 'd'){
        pos.x =150
    console.log(pos.x)}
   // pos.x += tam_cuadro //sumo para que vaya mas a la derecha el tamanio de mis cuadros (50px)
  //      if(pos.x>200) //si supera 200 serian (50+50+50+50) 4 lugares a la izquierda que es el limite...
   //         pos.x=200//lo deja capado en 200 ya que 250 se sale.



}
// function verificarcolision(){
// if(pos.x == 50 && pospalito.y == 100 && palito.getAttribute('class')=='palito_izq'){//izquierda
//         return true
//     }
// if(pos.x == 150 && pospalito.y == 100 && palito.getAttribute('class')=='palito_der'){//derecha
//         return true
//     }
    
//     return false
// }

//new KeyboardEvent(type)
//A string with the name of the event.
// It is case-sensitive and browsers set it to keydown, keyup, or keypress.

document.addEventListener('keypress', (e) => {
    const tecla = e.key;
if(e.key == 'a' || e.key == 'd'){
    mover(tecla);
    dibujar(e.key)
    // 2. VERIFICAMOS LA COLISIÓN ANTES DE MOVER EL ÁRBOL
    // Esta es la lógica clave:
    // ¿Hay un palito AHORA MISMO a la altura del jugador (y=100)?
    // Y si lo hay, ¿coincide su lado con el nuevo lado del jugador (pos.x)?
    
    let colision = false;

if (pospalito.y == pos.y || pospalito.y == (pos.y + 50) ) { 
        // (pos.y - 50) es la altura de la "cabeza" del jugador si el palito tiene 50px de alto
        console.log('if1')
        if (pos.x == 50 && palito.getAttribute('class') == 'palito_izq') {
        console.log('if2')
            colision = true; 
        }
        
        if (pos.x == 150 && palito.getAttribute('class') == 'palito_der') {
        console.log('if3')
            colision = true;
        }
    }

    if (colision) { //bool colision
      location.reload();
     console.log('perdio')
        return; // Detenemos la ejecución para no sumar puntos
    }

    moverpalito();

    
    if ((puntaje % 2) == 0) {
        quote_random();
    }
    
    puntaje++;
    puntos.textContent = puntaje;
    }
});
})

// If the pressed key has a printed representation, 
// the returned value is a non-empty Unicode character 
// string containing the printable representation of the key.
//  For example: if the pressed key is the Space key,
//  the returned value is a single space (" "). 
// If the pressed key is the B key, the returned value is the string "b".
//  However, if the Shift key is pressed at the same time (so shiftKey is true), 
// the returned value is the string "B".