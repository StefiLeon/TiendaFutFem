import React, { useEffect, useState } from 'react';
import Item from './Item';

export default function ItemList() {
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(Item), 2000);
        })
        .then((dataResolve) => {
            console.log("Data Resolve", dataResolve);
            // setProductos(dataResolve);
        })
        .catch((error) => {
            console.log("error", error);
        });
    }, []);
    return (
            <Item />
            );
}