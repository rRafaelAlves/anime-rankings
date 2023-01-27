import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/ProgramContext';


function Menu(){
    const { state, dispatch } = useForm();
    function nextPage(){
        
        Navigate('/bestHistory')
        dispatch({
            type: FormActions.setCurrentStep,
            payload: state.currentStep + 1
        })
    }

   const Navigate = useNavigate();
    return( 
        <Theme>
            <div>
                <button style={{color: 'black'}} onClick={()=> nextPage()}>Começar</button>
            </div>
        </Theme>
    )
}

export default Menu;


