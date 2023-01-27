import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { FormActions, useForm } from '../../contexts/ProgramContext';






function Final(){
    const { state, dispatch } = useForm();
   const Navigate = useNavigate();

   const handleBackStep = () =>{
    Navigate('/bestVillan');
 
    dispatch({
     type: FormActions.setCurrentStep,
     payload: state.currentStep - 1
 })
  
 }
    return( 
        <Theme>
         <NavigateBeforeIcon onClick={()=> handleBackStep()} style={{position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer'}} />
        </Theme>
        
    )
}

export default Final;