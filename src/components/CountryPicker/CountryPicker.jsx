import { countries, sum, countryStatusTotalRoute, countryDayOneRoute } from 'api/routes'
import React, { useEffect, useState } from 'react';
import { API } from 'api/index'
import styled from 'styled-components';
const Wrapper = styled.div`


`
export default function CountryPicker(props) {
    const [CountriesData, setCountriesData] = useState(["Countries"])

    useEffect(
        () => {
            const getData = async () => {
                try {
                    const {data}= await API(sum)
                    setCountriesData(data.Countries)
                } catch (err) {
                    console.log(err);
                    return err
                }
            }
            getData()
        }, []
    )
    function clg() {
        console.log(CountriesData);
    }
    return (
        <Wrapper props={props}>
            <h1>{props.component}</h1>
            <h3>List of Countries</h3>
            <label htmlFor="Countries">Choose country</label>
            <select name="Countries" id="countries">
                 {CountriesData.map((country,i)=>{
                    return <option key={i} value={country.Country}>{country.Country}</option>
                })}
            </select>


            <button onClick={clg}>Click</button>

        </Wrapper>
    )
}
