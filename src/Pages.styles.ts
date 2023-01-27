import styled from "@emotion/styled";


export const TitleStep = styled.h2`
position: absolute;
top: 15vh;
left: 42vw;
`



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



export const CharacterPost = styled.img`
border: 1px solid black;
height: 150px;
width: 128px;
background-color: black;
-webkit-box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
-moz-box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
box-shadow: 5px 8px 18px -1px rgba(0,0,0,0.75);
margin: 0 6px;
border: 1px solid transparent;
transition: ease-in 0.1s;
cursor: pointer;

&:hover{

    border: 6px solid blue;
    border-radius: 8px;
}

&.selected{
    border: 6px solid blue;
    border-radius: 8px;
}
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
