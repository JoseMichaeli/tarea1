import React, { useState } from 'react'
import data from './../../data'
import PhoneList from '../phoneList/PhoneList'


const  PhoneScreen = () => {
    const [phones, setData] = useState(data)
    return (
        <div>
            <PhoneList data={phones} />
        </div>
    )
};

export default PhoneScreen;
