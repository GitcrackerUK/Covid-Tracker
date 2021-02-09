import { CountryPicker, Global, Summary } from '../Main'
import React, {useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display:flex;
height:1059px;
`
const LeftWrapper =styled.div`
width:320px;
`
const RightWrapper = styled.div`
width:715px;

`
export default function Main(props) {
   const [country,setCountry] = useState('UK')

    function handleClick(e){
        setCountry(e.target.innerText);
    }
    return (
        <Wrapper props={props}>
            <LeftWrapper>
                <CountryPicker handleClick={handleClick}></CountryPicker>
            </LeftWrapper>
            <RightWrapper>
                <Global></Global>
                <Summary data={country}></Summary>
            </RightWrapper>
        </Wrapper>
    )
}
