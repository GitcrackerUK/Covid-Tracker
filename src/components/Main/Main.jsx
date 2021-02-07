import { countries, sum, countryStatusTotalRoute, countryDayOneRoute } from 'api/routes'
import React, { useEffect, useState } from 'react';
import { API } from 'api'
import styled from 'styled-components';
const Wrapper = styled.div`


`
export default function Main(props) {
    const [CountriesData, setCountriesData] = useState(["Countries"])

    useEffect(
        () => {
            // const getData = async () => {
            //     try {
            //         const {data}= await API(sum)
            //         setCountriesData(data.Countries)
            //     } catch (err) {
            //         console.log(err);
            //         return err
            //     }
            // }
            // getData()
        }, []
    )
    
    return (
        <Wrapper props={props}>
        <h1>Main</h1>
        </Wrapper>
    )
}
