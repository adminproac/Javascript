//operador condicional ternario
const activo =true
let mensaje =''

mensaje = (activo) ? 'Mujer':'Hombre'
console.log(mensaje)


mensaje = (!activo) ? 'Mujer':'Hombre'
console.log(mensaje)

mensaje = (activo===true) ? 'Mujer':'Hombre'
console.log(mensaje)

mensaje = (activo===true) ? 'Mujer':null
console.log(mensaje)


//El operador && es verdadero unicamente si los dos son verdaderos
//es decir que si evalua el primero en verdadero tiene que validar el segundo
//pero si el primero es falso no necesita evaluar el segundo la respuesta es falsa
const resultado= activo && 'activo=true entonces mensage'
console.log(resultado)

const hacer = false
console.log(hacer && 'hagalo boludo')


