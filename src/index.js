//Import, Export y funciones comunes de arreglos

import { heroes } from "./data/heroes";
console.log(heroes)

//para seleccionar un elemento especifico de la lista
const getHeroeById=(id)=>(heroes.find((heroe)=>(heroe.id===id?true:false)))
console.log(getHeroeById(3))

//para listar todos los elementos de la lista
const getHeroesmap=()=>(heroes.map((heroe)=>(console.log(heroe))))
console.log(getHeroesmap())

const getHeroesforEach=()=>(heroes.forEach((heroe)=>(console.log(heroe))))
console.log(getHeroesforEach())

//para filtrar elementos
const getHeroesByfilter=(id)=>(heroes.filter((heroe)=>(heroe.owner===id)))
console.log(getHeroesByfilter('mierda'))

//Almenos uno
const getHeroesSome=()=>(heroes.some((heroe)=>(heroe.owner='DC')))
console.log(getHeroesSome())

//Cumplen condicion
const getHeroesEvery=()=>(heroes.every((heroe)=>(heroe.id<6)))
console.log(getHeroesEvery())

//caracteres dentro de cadenas
const getHeroesFilterIncludes=(cadena)=>(heroes.filter((heroe)=>(heroe.name.includes(cadena))))
console.log(getHeroesFilterIncludes('man'))
