import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()

    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario)
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm) //metodo
        console.log(cliente)
        e.target.reset()
        navigate("/")
    }
    
    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                    <input type="text" className="form-control" name="nombre" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required />
                </div>
                <button type="submit" className="btn btn-primary">Finalizar Compra</button>
            </form>

        </div>
    );
}

export default Checkout;