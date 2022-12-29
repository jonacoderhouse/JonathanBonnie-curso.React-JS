//CONECCION CON FIREBASE

import { initializeApp } from "firebase/app";
//Funciones ya creada por firebase 
import {getFirestore, addDoc, getDocs, getDoc, updateDoc, deleteDoc, collection, doc} from 'firebase/firestore' //importe estas funciones de firesbae para acceder a la configuraciones de mi base de datos.

    const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-2022-bb8f2.firebaseapp.com",
    projectId: "react-2022-bb8f2",
    storageBucket: "react-2022-bb8f2.appspot.com",
    messagingSenderId: "1098955223938",
    appId: "1:1098955223938:web:2cedb7421f6b6c0b45d59b",
};

    const app = initializeApp(firebaseConfig);

    const db = getFirestore(); // CONSULTO MI BASE DE DATO CON GETFIRESTORE

    //CRUD PRODUCTOS
    // FUNCION PARA CARGAR MI BASE DE DATO EN FIREBASE DESDE MI OBJETO JSON.
    const cargarBDD = async () => {
    const promise = await fetch("../json/productos.json");
    const productos = await promise.json(); // transformo en un formato json
    productos.forEach(async (prod) => {
    //creo un nuevo objeto recorriendo con forEach cada uno de sus atributos
    await addDoc(collection(db, "productos"), {
        nombre: prod.nombre,
        marca: prod.marca,
        modelo: prod.modelo,
        idCategoria: prod.idCategoria,
        stock: prod.stock,
        precio: prod.precio,
        img: prod.img,
        // el id se genera automaticamente por firesabe y son de manera unicos.
        });
        });
    };

    // FUNCION PARA CONSULTAR TODOS LOS PRODUCTOS DE MI BASE DE DATO YA CARGADA EN FIREBASE
    const getProductos = async() => {
    const productos = await getDocs(collection(db, "productos"))
    console.log(productos);
    const items = productos.docs.map(prod => {
        return {...prod.data(), id: prod.id}// data() basicamente devuelve un objeto con sus propiedades, y agrego del id
    })
    return items
}
 //FUNCION PARA CONSULTAR UN SOLO PROD POR MEDIO DE ID DE MI BASE DE DATO DE FIREBASE
    const getProducto =  async (id) => {
    const producto = await getDoc(doc(db, "productos", id))
    const item = {...producto.data(), id: producto.id}
    return item
}
 //FUNCION PARA ACTUALIZAR MIS PROD
const updateProducto = async (id, info) => {
    const estado = await updateDoc(doc(db,"productos", id), info)
    return estado
    //devuelve un estado por si funciono o no. 1 o 0
    //recibe como parameto tb info
}
 //FUNCION PARA ELIMINAR UN PROD
const deleteProducto = async(id) =>{
    const estado = await deleteDoc(doc(db, "productos", id))
    return estado
}


//CREATE Y READ ORDENES COMPRA

const createOrdenCompra = async (cliente, preTotal, fecha ) => {
    const ordenCompra = await addDoc(collection(db, "ordenCompra"),{//creo una nueva colleccion en mi BD
        nombreCompleto: cliente.nombre,
        email: cliente.email,
        dni: cliente.dni,
        direccion: cliente.direccion,
        celular: cliente.celular,
        fecha: fecha,
        precioTotal: preTotal
    })

    return ordenCompra
}
const getOrdenCompra =  async (id) => {
    const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
    const item = {...ordenCompra.data(), id: ordenCompra.id}
    return item
}



    export { cargarBDD,getProductos,getProducto,updateProducto,deleteProducto,createOrdenCompra,getOrdenCompra };