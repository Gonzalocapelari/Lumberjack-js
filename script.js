document.addEventListener('DOMContentLoaded', () => {
const palito = document.createElement('div') //creo el div del palito
const grid = document.getElementById("grid") //agarro el grid del html
const width = 5; //cantidad de bloques
const tam_cuadro = 50; //tamanio pixeles
let posicionJugador = 5 //div index 5 (pos6)
let elementoJugador; //jugador global
let direccionplayer = 'right'
let juegorunning = 'true'
let cont = 1;
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
function finjuego(){

    location.reload()
}

function moverpalito(){
    palito.style.top = `${pospalito.y + 50}px`
    pospalito.y +=50;
    if(pospalito.y==150){
        pospalito.y = 0
        crearpalito()
    }
}
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

function colision(){
    if(pospalito.y == pos.y)
    return true
else
    return false
}
function perder(){
    // const mensaje = document.createElement('p')
    document.body.append('PERDISTE')
}

function crearJugador(){
 elementoJugador = document.createElement('div') //creo div del jugador a la derecha
    elementoJugador.className = 'jugador-derecha'
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

function dibujar(){
    elementoJugador.style.left = `${pos.x}px` //posicion que cambia es la x por ahora
    elementoJugador.style.top = `${pos.y}px` //queda siempre en el cuadro de abajo de 50px
}

function mover(tecla){ 
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


dibujar()
}

//new KeyboardEvent(type)
//A string with the name of the event.
// It is case-sensitive and browsers set it to keydown, keyup, or keypress.
document.addEventListener('keypress', (e) =>{
const tecla = e.key
mover(tecla)
moverpalito()
if(colision){
    perder()
}
// console.log(tecla)})
})

})
// If the pressed key has a printed representation, 
// the returned value is a non-empty Unicode character 
// string containing the printable representation of the key.
//  For example: if the pressed key is the Space key,
//  the returned value is a single space (" "). 
// If the pressed key is the B key, the returned value is the string "b".
//  However, if the Shift key is pressed at the same time (so shiftKey is true), 
// the returned value is the string "B".