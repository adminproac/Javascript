//Desestructuracion de arreglos

const hermanos = ['william','rocio','edgar','doris','henry']
const [,,medio] =hermanos
const [hermanomenor, hermanamenor, yo ,hermanamayor,hermanomayor]=hermanos

console.log(hermanos)
console.log(medio)
console.log(hermanomenor,hermanamenor,yo,hermanamayor,hermanomayor)


const getState=(valor)=> {
    return [valor,()=>{console.log(`Se supone que asigno ${valor} a una variable`)}]
}

const [nombre,setNombre] = getState('marcos')

console.log(nombre)
setNombre()
