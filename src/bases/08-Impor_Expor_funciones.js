//Import, Export y funciones comunes de arreglos

import { heroes } from "../data/heroes";
// console.log(heroes)

//para seleccionar un elemento especifico de la lista
export const getHeroeById=(id)=>(heroes.find((heroe)=>(heroe.id===id?true:false)))
// console.log(getHeroeById(3))

// //para listar todos los elementos de la lista
export const getHeroesmap=()=>(heroes.map((heroe)=>(console.log(heroe))))
// console.log(getHeroesmap())

export const getHeroesforEach=()=>(heroes.forEach((heroe)=>(console.log(heroe))))
// console.log(getHeroesforEach())

// //para filtrar elementos
export const getHeroesByfilter=(id)=>(heroes.filter((heroe)=>(heroe.owner===id)))
// console.log(getHeroesByfilter('mierda'))

// //Almenos uno
export const getHeroesSome=()=>(heroes.some((heroe)=>(heroe.owner='DC')))
// console.log(getHeroesSome())

// //Cumplen condicion
export const getHeroesEvery=()=>(heroes.every((heroe)=>(heroe.id<6)))
// console.log(getHeroesEvery())

// //caracteres dentro de cadenas
export const getHeroesFilterIncludes=(cadena)=>(heroes.filter((heroe)=>(heroe.name.includes(cadena))))
// console.log(getHeroesFilterIncludes('man'))

 export default getHeroeById