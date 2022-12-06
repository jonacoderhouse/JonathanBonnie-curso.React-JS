//FUNCIONES NECESARIAS EN MI APLICACION
//consulta asincrona

const consultarBDD = async (ruta) => {
    const response = await fetch(ruta)
    const productos = await response.json()
    return productos
}

export default consultarBDD