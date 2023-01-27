import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';
import { FormActions, useForm } from '../../contexts/ProgramContext';
import * as C from './styles';


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
                <C.ButtonStart style={{color: 'black'}} onClick={()=> nextPage()}>Começar</C.ButtonStart>
            </div>
        </Theme>
    )
}

export default Menu;


