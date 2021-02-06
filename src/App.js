import React from 'react';
import { Cards, Charts, CountryPicker } from 'components';
import { GlobalStyle } from 'components/styled'

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Cards></Cards>
      <Charts></Charts>
      <CountryPicker></CountryPicker>
    </>
  )
}

export default App;
