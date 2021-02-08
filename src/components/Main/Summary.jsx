import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`



export default function Summary(props){
    console.log(props.data);
    return(
        <Wrapper>
            <h1>{props.data}</h1>
        </Wrapper>
    )
}