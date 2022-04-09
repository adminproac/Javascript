//Temple string
const nombres='Jesus Edgar'
const apellidos ='Duarte Caceres'
console.log(nombres + ' ' + apellidos)
console.log(`${nombres} ${apellidos} ${10+2*20}`)
console.log(`
${nombres} 
${apellidos} 
${10+2*20}`)


function getSaludo(noms,apells) {
    return `Hola como esta ${noms} ${apells}`
} 

console.log(`Saludos ${getSaludo()}`)
console.log(`Saludos ${getSaludo('Jesus Edgar','Duarte Caceres')}`)

