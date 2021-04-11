import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const PhoneList = ({ data }) => {
    return (
        <>
            {data.map((data) => {
                const { id, first_name, last_name, number } = data;
                return (
                    <Fragment>
                        <h4>{id}_________________________________</h4>
                        <h4>Name: {first_name}</h4>
                        <h4>Last Name: {last_name}</h4>
                        <h4>Number: {number}</h4>
                    </Fragment>

                );
            }
            )}
             <Link to={'/'}>Back</Link>
        </>
    )
};
export default PhoneList;