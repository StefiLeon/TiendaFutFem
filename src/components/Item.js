import React from 'react';
import ItemDetail from './ItemDetail';

const dataDeProductos = [
    {
        id: "1",
        tipoDeProducto: "Taza",
        modelo: "Banini",
        precio: 800,
        imagen: "www.futbolfemeninoargentino.com.ar/img/Taza_Banini.jpg"
        },
        {
        id: "2", 
        tipoDeProducto: "Taza", 
        modelo: "Bonsegundo", 
        precio: 800, 
        imagen: "www.futbolfemeninoargentino.com.ar/img/Taza_Bonsegundo.jpg"
        },
        {
        id: "3", 
        tipoDeProducto: "Taza", 
        modelo: "Cometti", 
        precio: 800, 
        imagen: "www.futbolfemeninoargentino.com.ar/img/Taza_Cometti.jpg"
        },
        {
        id: "4", 
        tipoDeProducto: "Taza", 
        modelo: "Barroso", 
        precio: 800, 
        imagen: "www.futbolfemeninoargentino.com.ar/img/Taza_Barroso.jpg"
        }
]

export default function Item(props) {
    return(
        <>
                {dataDeProductos.map((cadaProducto) => (
                <div style={{paddingTop: "5rem"}}>
                    <h3 style={{color: "whitesmoke", backgroundColor: "#0275d8"}}>{cadaProducto.tipoDeProducto} {cadaProducto.modelo}</h3>
                    <p>Precio: ${cadaProducto.precio}</p>
                </div>))}
        </>
    )
}