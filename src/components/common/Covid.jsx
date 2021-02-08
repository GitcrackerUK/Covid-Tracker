import styled from 'styled-components'
import { SvgLoader } from 'react-svgmt';
import React from 'react'
import {covidIcon} from 'img'


export const Wrapper = styled(SvgLoader)`
height:${p=>p.size}px;
width:${p=>p.size}px;

>path{
    /* fill:#fff; */
}
`

export default function Covid(props){
    return(
        <Wrapper {...props} path={covidIcon}></Wrapper>
    )
}
