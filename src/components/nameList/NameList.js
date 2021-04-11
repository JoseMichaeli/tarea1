import React, { Fragment } from 'react'
import { Link } from "react-router-dom";

const NameList = ({ data }) => {
    return (
        <>
            {data.map((data) => {
                const { id,first_name, last_name} = data;
                return (
                    <Fragment >
                        <Link to={`/details/${id}`}>
                        <h4> {first_name} {last_name} </h4>
                        </Link>
                    </Fragment>

                );
            }
            )}
             <Link to={'/all'}>See all</Link>
        </>
    )
};
export default NameList;