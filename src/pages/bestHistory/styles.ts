import styled from "styled-components";



export const ListBox = styled.div`
display: flex;
justify-content: space-between;
width: 560px;
`

export const ContainerAnime = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;


&:first-child{
    padding-top: 80px;
}

&:last-child{
    padding-top: 40px;
}

`
export const FormAnimes = styled.form`

`

export const InputSearchAnime = styled.input`

padding: 4px;
width: 112px; 
color: black;
`

export const AnimeName = styled.p`

font-size: 14px;
font-weight: bold ;

`

export const AnimePoster = styled.img`
border: 1px solid black;
height: 180px;
width: 136px;
background-color: black;
-webkit-box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);

`

export const AnimeEpsCount = styled.p`
font-size: 10px;

`

export const DefaultImage = styled.img`
border: 1px solid black;
height: 180px;
width: 136px;
-webkit-box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);



`
