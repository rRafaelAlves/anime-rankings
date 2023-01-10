import styled from "styled-components";


export const Container = styled.div`
min-height: 100vh ;
display: flex;
flex-direction: column;
background-color: #120a5a;


`

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #120a5a;
    align-items: center;
    min-height: 95vh;
    position: relative;
    
`

export const ProgressBar = styled.div`
border-bottom: 6px solid white;
width: 400px;
margin-top: 40px;
position: relative;


.step1{
    position: absolute;
    background-color: green;
    width: 0px;
    border-bottom: 6px solid green;
  

}
.step2{
    position: absolute;
    background-color: green;
    width: 100px;
    border-bottom: 6px solid green;
}

.step3{
    position: absolute;
    background-color: green;
    width: 200px;
    border-bottom: 6px solid green;
}

.step4{
    position: absolute;
    background-color: green;
    width: 300px;
    border-bottom: 6px solid green;
}

`