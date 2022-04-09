//Desestructuracion de objetos

const persona = {
    nombres:'Jesus Edgar',
    apellidos:'Duarte Caceres',
    edad:56,
    direccion: {
                calle:53,
                no:'21-50',
                barrio:'Galerias'
    }

}

const {nombres,apellidos,direccion:{barrio}}=persona

console.log(persona)
console.log(nombres,apellidos,barrio)

//Usando la desestructuracion no necesito declarar nuevas variables, por que las extraigo tal cual
const getPersona=({nombres,apellidos,nohijos=1})=> (`Saludando a ${nombres} ${apellidos} tienes ${nohijos} hijo`)
console.log(getPersona(persona))

const getPersona2=({nombres,apellidos})=>({nombrecompleto:`${nombres} ${apellidos}`,sexo:'M'})
console.log(getPersona2(persona))

const getPersona3=getPersona2(persona)

const {nombrecompleto}=getPersona3
console.log(nombrecompleto)