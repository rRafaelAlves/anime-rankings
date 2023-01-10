import React from 'react';
import {FormActions, useForm} from '../../contexts/ProgramContext';
import { Anime } from '../../types/AnimeList';
import Theme from '../../components/Theme';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useNavigate } from 'react-router-dom';



function BestProtagonist() {

  const Navigate = useNavigate();
  const { state, dispatch } = useForm();
  const [listCharacter, setCharacter] = React.useState<Array<Anime>>([state.ListBestAnimation[0], state.ListBestAnimation[1], state.ListBestAnimation[2]]);
  const [currentCharacter, setCurrentCharacter] = React.useState<number>(0);

 


  const handleNextStep = () =>{
     Navigate('/moreCute'); 

     dispatch({
      type: FormActions.setCurrentStep,
      payload: state.currentStep + 1
  })
   
}


const handleBackStep = () =>{
   Navigate('/final');

   dispatch({
    type: FormActions.setCurrentStep,
    payload: state.currentStep - 1
})
 
}


  React.useEffect(() => {
    const handleNameChange = () => {

      dispatch({
        type: FormActions.setListBestAnimation,
        payload: listCharacter
      })
    }
    
    handleNameChange();
  }, [listCharacter])




  return (

    <Theme>

<NavigateBeforeIcon onClick={()=> handleBackStep()} style={{position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer'}} /> 
<NavigateNextIcon onClick={()=> handleNextStep()} style={{position: 'absolute', top: '44vh', right: 90, fontSize: 50, cursor: 'pointer'}} /> 

    </Theme>
  )
}

export default BestProtagonist;