import React from 'react'
import { Button } from '@mui/material'
import instance from '../../service/AxiosOrder';


export default function AxiosPage() {

    const getData = () => {
        // console.log('get Data')
        instance.get('/companies')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <div>
            <h2>Axios</h2>
            <Button onClick={getData} variant="contained">Get Data</Button>
        </div>
    )
}
