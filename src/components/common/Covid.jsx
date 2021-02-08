import styled from 'styled-components'
import { SvgLoader } from 'react-svgmt';
import React from 'react'
import {covidIcon} from 'img'


export const Wrapper = styled(SvgLoader)`
height:80px;
width:80px;

>path{
    /* fill:#fff; */
}
`

export default function Covid(){
    return(
        <Wrapper path={covidIcon}></Wrapper>
    )
}
