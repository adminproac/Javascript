//fetch API
const apiKey ='EbSHyE7VIA4mjwj5tfwrJ7hPHWv9n52X'

const peticion =fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

//Promesas encadenadas
peticion
    .then((respuesta)=>(respuesta.json()))
        .then(({data})=>{
            const {url}= data.images.original
            
            const img =document.createElement('img')
            img.src=url
            document.body.append(img)
        })
        .catch(()=>(console.log('Ocurrio un error')))