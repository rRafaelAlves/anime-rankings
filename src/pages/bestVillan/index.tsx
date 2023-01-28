import React from 'react';
import {FormActions, useForm} from '../../contexts/ProgramContext';
import * as C from './../../Pages.styles'
import Theme from '../../components/Theme';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../types/Character';



function BestVillan() {

  const Navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [Character, setCharacter] = React.useState<Character>(state.BestVilan);


  const  listCharacters: Character[] = [
    {anime: 'Kimetsu no Yaiba', name: 'Muzan', poster: 'http://pm1.narvii.com/7328/c32417fbc2eb70c75b061d041943d15e41ec3adfr1-350-490v2_00.jpg' },
    {anime: 'One Piece', name: 'Akainu', poster: 'https://criticalhits.com.br/wp-content/uploads/2022/07/fb2b3-16587779097074-1920-910x512.jpg' },
    {anime: 'Hunter x Hunter', name: 'Meruem', poster: 'https://www.nautiljon.com/images/perso/00/59/meruem_10695.webp' },
    {anime: 'Naruto', name: 'Madara', poster: 'https://criticalhits.com.br/wp-content/uploads/2020/11/madara-uchiha-hokage-naruto-910x550.jpeg' },
    {anime: 'Hunter X Hunter', name: 'Chrollo', poster: 'https://criticalhits.com.br/wp-content/uploads/2019/09/Chrollo-Lucilfer.jpg' },
    {anime: 'Avatar', name: 'Azula', poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRRDpb2KEKkw1TE15LbH7CWg5yXZVNdoQHegc4rOb0wwCUeSowo8I3TLz5QVE0NpjuxI&usqp=CAU' },
    {anime: 'One Piece', name: 'Doflamingo', poster: 'https://i.pinimg.com/736x/2b/6a/48/2b6a4834bf6a9dfeec04e6639fc5fa89.jpg' },
    {anime: 'Psyco Pass', name: 'Makishima Shogo', poster: 'https://i1.sndcdn.com/artworks-000146965275-69yjtn-t500x500.jpg' },
    

];



  const handleNextStep = () =>{
     Navigate('/betterBest'); 

     dispatch({
      type: FormActions.setCurrentStep,
      payload: state.currentStep + 1
  })
   
}


const handleBackStep = () =>{
   Navigate('/bestProtagonist');

   dispatch({
    type: FormActions.setCurrentStep,
    payload: state.currentStep - 1
})
 
}


  React.useEffect(() => {
    const handleNameChange = () => {

      dispatch({
        type: FormActions.setBestVillan,
        payload: Character
      })
    }
    
    
    handleNameChange();
    console.log(state.BestVilan)
  }, [Character])


  function select(element: Character){
    setCharacter(element);

  }

  return (

    <Theme>

      <C.ListBox>

        <div>

          {listCharacters.map((element, index)=>(
          
               
                <C.CharacterPost src={element.poster} key={index} onClick={()=> select(element)} className={state.BestVilan.name === element.name ?  'selected': ''}  />
                
          
          ))}

</div>
          
          
        
      </C.ListBox>


      <NavigateBeforeIcon onClick={()=> handleBackStep()} style={{position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer'}} /> 
      <NavigateNextIcon onClick={()=> handleNextStep()} style={{position: 'absolute', top: '44vh', right: 90, fontSize: 50, cursor: 'pointer'}} /> 

    </Theme>
  )
}

export default BestVillan;