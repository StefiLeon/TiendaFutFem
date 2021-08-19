import React from 'react';

const detalleDeProducto = [
    {
        id: "1",
        tipoDeProducto: "Taza",
        modelo: "Banini",
        descripcion: "Taza de cerámica de gran calidad con imagen de Estefania Banini en el Mundial de Francia 2019.",
        precio: 800,
        imagen: "http://www.futbolfemeninoargentino.com.ar/img/Taza_Banini.jpg"
        },
        {
        id: "2", 
        tipoDeProducto: "Taza", 
        modelo: "Bonsegundo", 
        descripcion: "Taza de cerámica de gran calidad con imagen de Florencia Bonsegundo en el Mundial de Francia 2019.",
        precio: 800, 
        imagen: "http://www.futbolfemeninoargentino.com.ar/img/Taza_Bonsegundo.jpg"
        },
        {
        id: "3", 
        tipoDeProducto: "Taza", 
        modelo: "Cometti", 
        descripcion: "Taza de cerámica de gran calidad con imagen de Aldana Cometti en el Mundial de Francia 2019.",
        precio: 800, 
        imagen: "http://www.futbolfemeninoargentino.com.ar/img/Taza_Cometti.jpg"
        },
        {
        id: "4", 
        tipoDeProducto: "Taza", 
        modelo: "Barroso", 
        descripcion: "Taza de cerámica de gran calidad con imagen de Agustina Barroso en el Mundial de Francia 2019.",
        precio: 800, 
        imagen: "http://www.futbolfemeninoargentino.com.ar/img/Taza_Barroso.jpg"
        }
]

export default function ItemDetail(props) {
    return(
        <>
            {detalleDeProducto.map((cadaProducto) => (
            <>
                <h4>{cadaProducto.modelo}</h4>
                <p>{cadaProducto.descripcion}</p>
                <img src={cadaProducto.imagen} style={{height:"200px"}} />
            </>))}
        </>
    )
}