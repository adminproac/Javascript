//Funciones normales
function saludar(nombre) {
    return `hola ${nombre}`
  
}

//Funciones de flecha
const saludar2 =(nombre)=>{
    return `hola ${nombre}`

}

//Funciones de flecha corta
const saludar3 = (nombre )=> (`hola ${nombre}`)

const getUsuario =()=>{
    return {
        id:'12345',
        username:'paco'
    }
}

const getUsuario2 =()=>({
        id:'12345',
        username:'paco'
    })


console.log(saludar('Jesus Edgar'))
console.log(saludar2('Juan Sebastian'))
console.log(saludar3('Margarita'))
console.log(getUsuario())
console.log(getUsuario2())