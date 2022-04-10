//Promesas: una promesa es una accion que se promete cumplir que puede tener exito (resolver), fracaso(rechazar) y tiene un tiempo de ejecucion
//resolve es un callback que se ejecuta si todo esta ok
//reject es otro callback que se ejecuta si falla
//Las promesas son asycronas, es decir su ejecucion no es lineal
import getHeroeById from "./bases/08-Impor_Expor_funciones";

const getHeroByIdAsync=(Id)=>{
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroe=getHeroeById(Id)
            if (heroe===undefined) reject('El heroe no existe.')
            else resolve(heroe)
        }, 2000);  
    });
    
    return promesa
}


const getHeroByIdAsync2=(id)=>{
    const promesa = new Promise((resolve,reject)=>{
        const heroe = getHeroeById(id)
        if (heroe===undefined) reject('El heroe no existe')
        else resolve(heroe)
    })
    return promesa
}


const getHeroeByIdAsync3=(id)=>{
    return new Promise((resolve,reject)=>{
        const heroe = getHeroeById(id)
        if (heroe===undefined) reject('El heroe no existe')
        else resolve(heroe)
    })
}   

getHeroByIdAsync(1)
    .then((heroe)=> (console.log(`getHeroByIdAsync. Se consulto el heroe ${heroe.name} correctamente`)))
    .catch((error)=>(console.log(error)))
    // .finally(()=>{
    //     console.log('Se ejecuto getHeroByIdAsync')
    // })

getHeroByIdAsync2(2)
    .then((heroe)=>(console.log(`getHeroByIdAsync2. El heroe ${heroe.name} si existe`)))
    .catch((error)=>(console.log(error)))
    // .finally(()=>(console.log('Se ejecuto getHeroByIdAsync2')))


getHeroeByIdAsync3(3)
    .then((heroe)=>(console.log(`getHeroeByIdAsync3. El heroe ${heroe.name} si existe`)))
    .catch((error)=>(console.log(error)))
    // .finally(()=>(console.log('Se ejecuto getHeroeByIdAsync3')))
