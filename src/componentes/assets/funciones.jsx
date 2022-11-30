//FUNCIONES NECESARIAS EN MI APLICACION
//consulta asincronica

const consultarBDD = async () => {
    const response = await fetch("./json/productos.json")
    const productos = await response.json()
    return productos
}

export default consultarBDD