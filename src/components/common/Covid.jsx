import styled from 'styled-components'
import { SvgLoader } from 'react-svgmt';
import React from 'react'
import {covidIcon} from 'img'


export const Wrapper = styled(SvgLoader)`
position:absolute;
top:${p=>p.top}vw;
right:${p=>p.right}vw;
height:${p=>p.size}vw;
width:${p=>p.size}vw;

>path{
    /* fill:#fff; */
}
`

export default function Covid(props){
    return(
        <Wrapper {...props} path={covidIcon}></Wrapper>
    )
}
