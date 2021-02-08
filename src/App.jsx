import { GlobalStyle, Container } from 'components/styled'
import {Header, Main,Footer} from 'components';
import React from 'react';

export default function App() {
 
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  )
}


