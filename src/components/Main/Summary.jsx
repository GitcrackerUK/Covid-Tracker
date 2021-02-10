import {CountryData,shadow6,h3Light,h3Regular,h2Regular,h2Light} from 'components/styled'
import SectionHeader from 'components/common/SectionHeader'
import React,{useEffect,useState} from 'react'
import CountUp from 'react-countup';
import styled from 'styled-components'
import {Chart} from './Chart/Chart'
import {getNumberNull,checkForData} from 'factory'

const Wrapper = styled.div`
${shadow6};
margin:auto;
background-color:#fff;
width:593px;
height:338px;
`
// const Chart = styled.div`
// height:192px;
// width:570px;
// `
const CountrySummary = styled.div`
display:flex;
align-items:center;
border-radius:3px;
margin:5px auto;
${CountryData};
${shadow6};
width:505px;
height:93px;
`
const Country = styled.div`
margin-left:20px;
width:30%;
${h2Regular}
`
const CountDetail = styled.div`
margin:0px 10px;
`
const Header = styled.div`
margin-bottom:5px;
${h3Light}
`
const Data = styled.div`
text-align:center;`

const ChartWrapper = styled.div`
margin:5px;
height:200px;

`


export default function Summary(props){
    return(
        <Wrapper>
            <SectionHeader Regular>
           {`Summary information for ${props.country?props.country:"UK"}`}
            </SectionHeader>

           <ChartWrapper>
           <Chart data={[
            {
            "active cases": getNumberNull(props.activeCases),
            "new cases":  getNumberNull(props.newCases),
            "new deaths": getNumberNull(props.newDeaths),
            }
            ]
           }></Chart>
           </ChartWrapper>

            <CountrySummary>
                <Country>{checkForData(props.country)}
                {/* {props.country?props.country:null} */}
                </Country>
                <CountDetail>
                    <Header>Total Cases</Header>
                    <Data>{checkForData(props.totalCases)}</Data>
                </CountDetail>
                <CountDetail>
                    <Header>Total recovered</Header>
                    <Data>{checkForData(props.totalRecovered)}</Data>
                </CountDetail>
                <CountDetail>
                    <Header>Total deaths</Header>
                    <Data>{checkForData(props.totalDeaths)}</Data>
                </CountDetail>
            </CountrySummary>

           
        </Wrapper>
    )
}