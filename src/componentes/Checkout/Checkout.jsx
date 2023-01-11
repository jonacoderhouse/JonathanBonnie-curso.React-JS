import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../componentes/assets/firebase';
import { useCarritoContext } from "../../context/CarritoContex";
import { toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import { useDarkModeContext } from "../../context/DarkModeContext";


const Checkout = () => {
    const valorInicial={nombreCompleto: "", email: "", validarEmail: "", DNI: "", celular: "", direccion: ""}
    const [valorFormulario, setvalorFormulario]=useState(valorInicial);
    const [errorFormulario, seterrorFormulario]=useState({});
    const [esEnviar, setesEnviar] = useState(false);    
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {darkMode} = useDarkModeContext()
    useEffect(() => {
        if (Object.keys(errorFormulario).length === 0 && esEnviar) {
            consultarFormulario();
        }
      }, [errorFormulario]);


    const manejarEnviar = (e) => {
        e.preventDefault();
        seterrorFormulario(validar(valorFormulario));
        setesEnviar(true);
        e.target.reset()
    };

    const manejarCambiar = (e)=>{
        const { name, value } = e.target;
        setvalorFormulario({ ...valorFormulario, [name]: value });
    }

    const validar = (values)=>{
        const errors ={};
        const mailFormatRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //exp regular que matchea con un formato de mail     
        //Errores de nombre y apellido (que no los ingrese)
        if (!values.nombreCompleto) {
            errors.nombreCompleto = "El nombre y apellido son necesarios";
        }
        //Errores del email (que no lo ingrese, que no sea valido)
        if (!values.email) {
            errors.email = "El email es requerido";
        } else if (!mailFormatRegex.test(values.email)) {
            errors.email = "Ese no es un formato valido de email";
        }
        //Errores del email a validar (que no lo ingrese, que no sea valido, que no sea el mismo, que no sea valido podria borrarse ya que si es valido el primero solo con que sea igual ya es valido)
        if (!values.validarEmail){
            errors.validarEmail = "Debe ingresar nuevamente el email";            
        }else if (!mailFormatRegex.test(values.validarEmail)) {
            errors.validarEmail = "Ese no es un formato valido de email";
        }else if (values.validarEmail!==values.email){
            errors.validarEmail = "Los emails no coinciden";
        }
        //Errores del DNI (que no lo ingrese, ya que sea un numero me aseguro dandole el tipo "number" al input)
        if (!values.DNI){
            errors.DNI="Debe ingresar su DNI";
        }
        //Errores del Celular (idem DNI)
        if (!values.celular){
            errors.celular="Debe ingresar su celular";
        }
        //Errores de la dirección (Que no la ingrese)
        if (!values.direccion){
            errors.direccion="Debe ingresar su direccion";
        }
        return errors;
    };

    const consultarFormulario = (e) => {
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]
        aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)                    
                } else {
                    toast.error(`El producto ${prodBDD.nombre} no tiene stock`);                    
                    emptyCart();
                    navigate("/")                      
                }
            })            
        })

        delete cliente["validarEmail"];

        createOrdenCompra(cliente,totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra => {
            getOrdenCompra(ordenCompra.id).then(item => {
                toast.success(`¡Muchas gracias por su compra, su orden es ${item.id}`)
                emptyCart()              
                navigate("/")
            }).catch(error => {
                toast.error("Su orden no fue generada con exito")
            })                
        })

    }

    return (
        <div className="container espaciadoNav">
            <form onSubmit={manejarEnviar} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className={`form-label ${darkMode ? 'text-white ' : 'text-black'}`}>Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombreCompleto"  value={valorFormulario.nombreCompleto} onChange={manejarCambiar}/>
                    <p className='colorMensajeCheckout'>{errorFormulario.nombreCompleto}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className={`form-label ${darkMode ? 'text-white ' : 'text-black'}`}>Email</label>
                    <input type="text" className="form-control" name="email" value={valorFormulario.email} onChange={manejarCambiar}/>
                    <p className='colorMensajeCheckout'>{errorFormulario.email}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="email2" className={`form-label ${darkMode ? 'text-white ' : 'text-black'}`}>Repetir Email</label>
                    <input type="text" className="form-control" name="validarEmail" value={valorFormulario.validarEmail} onChange={manejarCambiar}/>
                    <p className='colorMensajeCheckout'>{errorFormulario.validarEmail}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className={`form-label ${darkMode ? 'text-white ' : 'text-black'}`}>DNI</label>
                    <input type="number" className="form-control" name="DNI" value={valorFormulario.DNI} onChange={manejarCambiar}/>
                    <p className='colorMensajeCheckout'>{errorFormulario.DNI}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className={`form-label ${darkMode ? 'text-white ' : 'text-black'}`}>Celular</label>
                    <input type="number" className="form-control" name="celular" value={valorFormulario.celular} onChange={manejarCambiar}/>
                    <p className='colorMensajeCheckout'>{errorFormulario.celular}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className={`form-label ${darkMode ? 'text-white ' : 'text-black'}`}>Dirección</label>
                    <input type="text" className="form-control" name="direccion"  value={valorFormulario.direccion} onChange={manejarCambiar}/>
                    <p className='colorMensajeCheckout'>{errorFormulario.direccion}</p>
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;
