//Async await
//Si usamos async convertimos la funcion en una promesa automaticamente sin necesidad
//de usar new Promise(). el await nos permite trabajar el codigo como si fuera sincrono

//fetch API

const getImagen=async()=>{

    try {
        const apiKey ='EbSHyE7VIA4mjwj5tfwrJ7hPHWv9n52X'
        //el await indica que hay que esperar la respuesta antes de seguir
        const respuesta=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data}=await respuesta.json()
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src=url
        document.body.append(img)
        
    } catch (error) {
        console.log(error)
    }
}

getImagen()

const getImagen1=async()=>{
    const apiKey ='EbSHyE7VIA4mjwj5tfwrJ7hPHWv9n52X'
    //el await indica que hay que esperar la respuesta antes de seguir
    const respuesta=await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    //la respuesta esta en el body en un objecto ReadableStream, para verlo hay que convertirlo a json
    const data = await respuesta.json()
    //console.log(data.data.images.original.url)
    const url = data.data.images.original.url
    //creamos un objeto imagen en el DOM
    const miimagen = document.createElement('img')
    //le asignamos a la propiedad src la url determinada
    miimagen.src=url
    //y luego le agregamos  el objeto imagen al cuerpo del DOM
    document.body.append(miimagen)

}

getImagen1()
