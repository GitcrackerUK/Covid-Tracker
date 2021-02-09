import {GlobalBackground,shadow6,GlobalMain,h1Regular} from 'components/styled'
import {removeComa} from 'factory'
import React,{useEffect,useState} from 'react'
import CountUp, { useCountUp } from 'react-countup';
import GlobalTotal from 'store/total'
import styled from 'styled-components'


const Wrapper = styled.div`
width:100%;
height:360px;
`
const InnerWrapper =styled.div`
${GlobalBackground}
${shadow6}
width:540px;
height:332px;
border-radius:3px;
padding:1px;
`
const GlobalWrapper = styled.div`
${GlobalMain};
${shadow6}
width:330px;
height:252px;
margin:40px auto 40px 40px;
border-radius:3px;
display:flex;
justify-content:center;
align-items:center;
position:relative;
`

const Left = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
height:80%;
`
const Text = styled.p`
${h1Regular};
margin: 0px auto;
`
const Right = styled.div`
display: flex;
flex-direction:column;
justify-content: space-between;
height:95%;
width:197px;
position:absolute;
left:280px;
`
const Data = styled.div`
border-radius:3px;
${shadow6};
${GlobalMain};
display: flex;
justify-content:center;
align-items:center;
height:58px;
width:100%;
text-align:center;
`

export default function Global(){
    const [data , setData] = useState ({
        totalCases:"",
        totalDeaths:"",
        totalRecovered:""
    })
    // const [loading,setLoading]=useState(false)
    
    useEffect(()=>{
        const set = async ()=>{
            const {totalCases,totalDeaths,totalRecovered} = await  GlobalTotal.result 
            setData({totalCases:removeComa(totalCases),totalDeaths:removeComa(totalDeaths),totalRecovered:removeComa(totalRecovered)})
        }   
        set()
    },[])
    return(
        <Wrapper>
            <InnerWrapper>
                <GlobalWrapper>
                        <Left>
                            <Text>Global Total Cases:</Text>
                            <Text>Global Total recovered : </Text>
                            <Text>Global Total Deaths: </Text>
                        </Left>
                        <Right>
                            <Data><Text><CountUp  duration={3} useEasing={true} separator={","} end={data.totalCases}></CountUp></Text></Data>
                            <Data><Text><CountUp duration={2} separator={","} end={data.totalRecovered}></CountUp></Text></Data>
                            <Data><Text><CountUp  duration={1} separator={","} end={data.totalDeaths}></CountUp></Text></Data>
                        </Right>
                </GlobalWrapper>
            </InnerWrapper>
        </Wrapper>
    )
}