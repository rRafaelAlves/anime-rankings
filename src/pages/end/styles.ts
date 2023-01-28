import styled from "styled-components";


export const Container = styled.div`

display: flex;

`

export const ContainerFav = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
margin: 18px 0;
border-bottom: 1px solid white;
padding-bottom: 10px;

`

export const ContainerAnime = styled.div`
display: flex;
flex-direction: column;
margin: 0 20px;
`

export const Poster = styled.img`
width: 140px;
height: 120px;
border-radius: 4px;
`

export const ContainerCharacter = styled.div`
display: flex;
flex-direction: column;
margin: 0 20px
`
export const BoxChar = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const Rosinante = styled.img`

width: 200px;
height: 220px;
border-radius: 12px;
border: 1px solid black;
`

export const TextEnd = styled.h3`
width: 410px

`

export const ButtonStartAgain = styled.div`
padding: 10px 20px;
border-radius: 8px;
font-size: 16px;
text-align: center;
cursor: pointer;
background-color: orange;
color: black;
margin-top: 100px;


&:hover{
    opacity: 0.7;
}
`
