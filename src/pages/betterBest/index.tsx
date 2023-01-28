import React from 'react';
import { FormActions, useForm } from '../../contexts/ProgramContext';
import axios from 'axios';
import { Anime } from '../../types/AnimeList';
import Theme from '../../components/Theme';
import * as C from '../../Pages.styles';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';
import {ContainerBetterBest} from './styles';



function BetterBest() {

  const Navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [listAnime, setListAnime] = React.useState<Array<Anime>>(state.ListBetterBest);
  const [currentAnime, setCurrentAnime] = React.useState<number>(0);



  const handleNextStep = () =>{
     Navigate('/final'); 

     dispatch({
      type: FormActions.setCurrentStep,
      payload: state.currentStep + 1
  })
   
}


const handleBackStep = () =>{
   Navigate('/bestVillan');

   dispatch({
    type: FormActions.setCurrentStep,
    payload: state.currentStep - 1
})
 
}


  React.useEffect(() => {
    const handleNameChange = () => {

      dispatch({
        type: FormActions.setListBetterBest,
        payload: listAnime
      })
    }
    
    handleNameChange();
  }, [listAnime])

  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  const inputRef3 = React.useRef<HTMLInputElement>(null);
  const inputRef4 = React.useRef<HTMLInputElement>(null);
  const inputRef5 = React.useRef<HTMLInputElement>(null);
  const inputRef6 = React.useRef<HTMLInputElement>(null);
  


  function formatSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const input = currentAnime === 0 ? inputRef : currentAnime === 1 ? inputRef2 : currentAnime === 2 ? inputRef3 : currentAnime === 3 ? inputRef4 : currentAnime === 4 ? inputRef5 : inputRef6;
    let name = input?.current?.value ?? '';
    name = name?.toLowerCase();
    const newStr = name.replace(/ /g, '-');

    searchAnime(newStr);
  }

  const searchAnime = async (name: string) => {
    const res = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${name}`);
    const { data } = res;
    if(!data){
      return
    }
    setListAnime(prevList => {
      const newList = [...prevList];
      newList[currentAnime] = data.data[0];
      return newList;
    });
  };

  console.log(listAnime);

  return (

    <Theme>
      
     <C.ListBox>

   
  {listAnime.map((anime, index) => (
    <ContainerBetterBest key={index}>
     {index === 0 ?  "1° Lugar": index === 1 ? "2° Lugar" : index === 2 ?  "3° Lugar" : index === 3 ?  "4° Lugar" :  index === 4 ? "5° Lugar" : "6° Lugar" }

      <div>
        <C.AnimeName>
          {anime?.attributes?.canonicalTitle.length > 12 ?anime?.attributes?.canonicalTitle.slice(0, 19) : anime?.attributes?.canonicalTitle}
        </C.AnimeName>

        {state.ListBetterBest
        [index]?.attributes?.episodeCount !== 0 && (
          <C.AnimeEpsCount >
            Número de episódios: {state?.ListBetterBest[index]?.attributes?.canonicalTitle === "One Piece" ? '1048' : state?.ListBetterBest[index]?.attributes?.episodeCount}
          </C.AnimeEpsCount>
        )}

        {state.ListBetterBest[index]?.attributes?.posterImage?.tiny?.length !== 0 ? (
          <C.AnimePoster src={state?.ListBetterBest[index]?.attributes?.posterImage?.original} alt={state?.ListBetterBest[index]?.attributes?.canonicalTitle} />
        ) : (
          <C.DefaultImage src='https://spassodourado.com.br/wp-content/uploads/2015/01/default-placeholder.png' />
        )}
      </div>
      

      <C.FormAnimes id='form' onSubmit={e => formatSearch(e)}>
        <C.InputSearchAnime type="text" ref={index === 0 ? inputRef : index === 1 ? inputRef2 : index === 2 ? inputRef3 : index === 3 ? inputRef4: index === 4 ? inputRef5: inputRef6} id='name' name='name' />
        
        <Button variant="contained" type="submit" form='form' value="Buscar" onClick={() => setCurrentAnime(index)} style={{width: 60}} size="small">
          <SearchIcon />
        </Button>
      </C.FormAnimes>
    </ContainerBetterBest>
  ))}
</C.ListBox>

<NavigateBeforeIcon onClick={()=> handleBackStep()} style={{position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer'}} /> 
<NavigateNextIcon onClick={()=> handleNextStep()} style={{position: 'absolute', top: '44vh', right: 90, fontSize: 50, cursor: 'pointer'}} /> 

    </Theme>
  )
}

export default BetterBest;