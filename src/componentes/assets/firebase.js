//CONECCION CON FIREBASE

import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
  apiKey:  process.env.API_KEY,
  authDomain: "react-2022-bb8f2.firebaseapp.com",
  projectId: "react-2022-bb8f2",
  storageBucket: "react-2022-bb8f2.appspot.com",
  messagingSenderId: "1098955223938",
  appId: "1:1098955223938:web:2cedb7421f6b6c0b45d59b"
};



const app = initializeApp(firebaseConfig);

const db = getFirestore()

const cargarBDD = async () => {
    const promise = await fetch('../json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db,"productos"), { //collection si existe consulta si no existe crea
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            idCategoria: prod.idCategoria,
            stock: prod.stock,
            precio: prod.precio,
            img: prod.img
        })
    })
}

export {cargarBDD}