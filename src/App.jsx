import { countries, sum, countryStatusTotalRoute, countryDayOneRoute } from 'api/routes'
import React, { useEffect, useState } from 'react';
import { Cards, Charts, CountryPicker } from 'components';
import { GlobalStyle, Container } from 'components/styled'
import { API } from 'api/index'




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
  function clg() {
    console.log(res);
    // res.data.Countries.map((country)=>{
    //   console.log(country.Country);
    // })
    

  }
  return (
    <Container>
      <button onClick={clg}> Click</button>
      <GlobalStyle></GlobalStyle>
      <Cards ></Cards>
      <Charts></Charts>
      <CountryPicker component="Country Picker" ></CountryPicker>
    </Container>
  )
}


