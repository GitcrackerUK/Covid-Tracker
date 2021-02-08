import SectionHeader from 'components/common/SectionHeader'
import {shadow6} from 'components/styled'
import styled from 'styled-components'
import React from 'react'


const Wrapper = styled.div`
margin:auto;
width:90%;
`
const InnerWrapper = styled.div`
padding:1px;
border-radius:2px;
${shadow6}
margin:auto;
width:80%;
background-color:#fff;
height:500px;
`


export default function CountryPicker(){
    return(
        <Wrapper>
           
            <InnerWrapper>
            <SectionHeader Regular >Countries</SectionHeader>

            </InnerWrapper>

        </Wrapper>
    )
}