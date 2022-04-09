//Objetos literales

const persona = {
    nombres:'Jesus Edgar',
    apellidos:'Duarte Caceres',
    edad:5,
    direccion: {
        calle:53,
        no:'21-50',
        barrio:'Galerias'
        },
        
}

console.log(persona)
console.log(persona.nombres)
console.log(persona.direccion)
console.log(persona.direccion.barrio)
console.log({persona:persona})
console.log({persona})
console.table(persona)

//Para crear otro objeto persona

const persona2= {...persona}
persona2.direccion.barrio='Rafael Nuñez'
console.log(persona2)