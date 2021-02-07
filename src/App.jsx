import { countries, sum, countryStatusTotalRoute, countryDayOneRoute } from 'api/routes'
import React, { useEffect, useState } from 'react';
import { Cards, Charts, CountryPicker } from 'components';
import { GlobalStyle, Container } from 'components/styled'
import { API } from 'api/index'
import {Header, Main,Footer} from 'components';





export default function App() {
  // let [res, setData] = useState()



  useEffect(
    () => {
      // const getData = async () => {
      //   try {
      //     await API(sum)
      //     setData( await API(sum))
      //   } catch (err) {
      //     console.log(err);
      //     return err
      //   }
      // }
      // getData()
    }, []
  )
  
  return (
    <Container>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </Container>
  )
}


