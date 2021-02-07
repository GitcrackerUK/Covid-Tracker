import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body{
  background-color:#f6f6f6;
}
`
export const Container = styled.div`
width:1000px;
margin:auto;
height:100vw;
`
// weight -extra-light 200  
//        -light 300
//        -regular 400
//        -medium 500
const h1Light = css`
font-size:20px;
font-weight:300;
`
const h1Regular = css`
font-size:20px;
font-weight:400;
`
const h2Regular = css`
font-size:18px;
font-weight:400;
`


export const shadow6 = css`box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2);`
export const shadow8 = css`box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2);`
export const shadow12 = css`box-shadow: 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2);`