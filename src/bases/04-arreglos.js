//Arreglos []
const arreglo = []
console.log(arreglo) 

//Objetos literales {}
const persona = {}
console.log(persona)

//Arreglo de objetos literales
const personas = [
    {
        nombre:'William',
        edad:52
    },
    {
        nombre:'Rocio',
        edad:53
    },
    {
        nombre:'Edgar',
        edad:56
    },
    {
        nombre:'Doris',
        edad:57
    },
    {
        nombre:'Henry',
        edad:59
    }
]

const familia = [...personas,{nombre:'Juan',edad:14}]
const recorrer = familia.map((miembro)=>{
    return `recorre el arreglo y extrae valores ${miembro.nombre}`
}) 

console.log(recorrer)

console.log(personas)
console.log(familia)