import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

export default function ItemDetailContainer() {
    useEffect(() => {
        new Promise((resolve, reject) => {
            setTimeout(() => resolve(ItemDetail), 2000);
        })
        .then((dataResolve) => {
            console.log("Data Resolve", dataResolve);
        })
        .catch((error) => {
            console.log("error", error);
        });
    }, []);
    return (
            <ItemDetail />
            );
}