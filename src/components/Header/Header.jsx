import SectionHeader from 'components/common/SectionHeader'
import Covid from 'components/common/Covid.jsx'
import styled,{css} from 'styled-components'
import { covidMain } from 'img'
import React from 'react'

const Wrapper = styled.div`
position:relative;
height:135px;
width:100%;
`
const Image = styled.div`
background-image:url(${covidMain});
background-repeat: no-repeat;
margin:40px 5vw 0 auto;
background-size: 100% ;
height:20vw;
width:80%;
`


export default function Header() {
    return (
        <Wrapper>
            <SectionHeader headerStyle >Covid-19 Data Explorer</SectionHeader>
            <Image></Image>
            {/* <Covid size={30}></Covid> */}
        </Wrapper>
    )
}
