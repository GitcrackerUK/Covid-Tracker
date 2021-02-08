import { CountryPicker, Global, Summary } from '../Main'
import React, { useEffect, useState } from 'react';
import { API } from 'api'
import styled from 'styled-components';
const Wrapper = styled.div`
display:flex;
height:1887px;
`
const LeftWrapper =styled.div`
width:320px;
`
const RightWrapper = styled.div`
width:715px;

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
            <LeftWrapper>
                <CountryPicker></CountryPicker>
            </LeftWrapper>
            <RightWrapper>
                <Global></Global>
                <Summary></Summary>
            </RightWrapper>
        </Wrapper>
    )
}
