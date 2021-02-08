import SectionHeader from 'components/common/SectionHeader'
import Covid from 'components/common/Covid.jsx'
import styled from 'styled-components'
import React from 'react'


const Wrapper = styled.div`
height:135px;
width:100vw;
`
const Image = styled.div`

`


export default function Header() {
    return (
        <Wrapper>
           <SectionHeader>Header</SectionHeader>
           <SectionHeader>Header</SectionHeader>
           <Image></Image>
           <Covid></Covid>

            
        </Wrapper>
    )
}
