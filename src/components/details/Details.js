import React, { Fragment } from 'react'
import data from './../../data'
import { Link } from "react-router-dom";

const Details = ({ }) => {
    try {
        const id = window.location.pathname.split("/")[2];
        //const contacto = data.filter(contact => { if(contact.id === parseInt(id,10)){ return contact;}} );
        const contacto = data.filter(contact => { return contact.id === parseInt(id, 10); });
        const { first_name, last_name, number } = contacto[0];
        return (
            <>
                <h4>Nombre: {first_name}</h4>
                <h4>Apellido: {last_name}</h4>
                <h4>Telefono: {number}</h4>
                <Link to={'/'}>Back</Link>



            </>
        )
    } catch (error) {
        return (
            <>
                <h2> Page not Found.</h2>
                <Link to={'/'}>Back</Link>
            </>
        );
    }
};
export default Details;