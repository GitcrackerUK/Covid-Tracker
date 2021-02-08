import React from 'react'
import { SectionHeaders, h1Light, h1LightRES } from 'components/styled'
import styled, { css } from 'styled-components'

const Wrapper = styled.div`
justify-content:center;
align-items:center;
border-radius:3px;
${SectionHeaders};
display:flex;
${p => p.headerStyle ? css`
    ${h1Light}
    width:269px;
    height:40px;
    position:absolute;
    top:40px;
    left:40px;
    @media(max-width:1000px){
        top:4vw;
        left:3vw;
        width:27vw;
        height:4.5vw;
        ${h1LightRES}
    }
`: css``}
`

export default function SectionHeader(props) {
    return (
        <Wrapper {...props}>

        </Wrapper>
    )
}
