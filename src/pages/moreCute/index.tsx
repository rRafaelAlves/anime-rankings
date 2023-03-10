import React from 'react';
import {FormActions, useForm} from '../../contexts/ProgramContext';
import * as C from './../../Pages.styles'
import Theme from '../../components/Theme';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';
import { Character } from '../../types/Character';



function MoreCute() {

  const Navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [Character, setCharacter] = React.useState<Character>(state.MoreCute);


  const  listCharacters: Character[] = [
    {anime: 'Kotaro vai morar sozinho', name: 'Kotaro', poster: 'https://i0.wp.com/www.jbox.com.br/wp/wp-content/uploads/2022/02/kotaro-destacada.jpg?fit=774%2C489&quality=99&strip=all&ssl=1' },
    {anime: 'One Piece', name: 'Chopper', poster: 'https://ovicio.com.br/wp-content/uploads/2021/11/20211116-ovicio-one-piece-chopper-555x555.jpg' },
    {anime: 'Spy X Family', name: 'Anya', poster: 'https://www.seucurioso.com/wp-content/uploads/2022/07/portada_spy-x-family-42.jpg' },
    {anime: 'Avatar', name: 'Aang', poster: 'https://tm.ibxk.com.br/2021/12/13/13093901049065.jpg?ims=1200x675' },
    {anime: 'One Piece', name: 'Luffy', poster: 'https://uploads.spiritfanfiction.com/historias/capitulos/202102/0-imagines-one-piece-0-21614730-030220210126.jpg' },
    {anime: 'Ousama Ranking', name: 'Bojji', poster: 'https://i.pinimg.com/736x/39/72/1e/39721ea2e219c552964d9a38d75341e9.jpg' },
    {anime: 'Ano Hana', name: 'Menma', poster: 'https://i.pinimg.com/564x/f2/ed/e0/f2ede02c46696cdb28f37f0eef8937d1.jpg' },
    {anime: 'Avatar', name: 'Appa', poster: 'https://pbs.twimg.com/media/E-pMuuvWQAQYE7L.jpg' },

];



  const handleNextStep = () =>{
     Navigate('/bestProtagonist'); 

     dispatch({
      type: FormActions.setCurrentStep,
      payload: state.currentStep + 1
  })
   
}


const handleBackStep = () =>{
   Navigate('/bestAnimation');

   dispatch({
    type: FormActions.setCurrentStep,
    payload: state.currentStep - 1
})
 
}


  React.useEffect(() => {
    const handleNameChange = () => {

      dispatch({
        type: FormActions.setMoreCute,
        payload: Character
      })
    }
    
    
    handleNameChange();
    console.log(state.MoreCute)
  }, [Character])


  function select(element: Character){
    setCharacter(element);

  }

  return (

    <Theme>

      <C.ListBox>

        <div>

          {listCharacters.map((element, index)=>(
          
               
                <C.CharacterPost src={element.poster} key={index} onClick={()=> select(element)} className={state.MoreCute.name === element.name ?  'selected': ''}  />
                
          
          ))}

</div>
          
          
        
      </C.ListBox>


      <NavigateBeforeIcon onClick={()=> handleBackStep()} style={{position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer'}} /> 
      <NavigateNextIcon onClick={()=> handleNextStep()} style={{position: 'absolute', top: '44vh', right: 90, fontSize: 50, cursor: 'pointer'}} /> 

    </Theme>
  )
}

export default MoreCute;