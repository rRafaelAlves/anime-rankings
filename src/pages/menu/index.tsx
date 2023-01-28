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
                <C.imgTios src="https://static-cdn.jtvnw.net/badges/v1/8837af07-f36c-4271-b257-cbef34002492/2" alt="" />
                <C.ButtonStart style={{color: 'black'}} onClick={()=> nextPage()}>Começar</C.ButtonStart>
                <C.imgTios src="https://static-cdn.jtvnw.net/badges/v1/0ba026d2-ebb5-4273-ab58-0b0ec91147de/2" alt="" />
            </div>
        </Theme>
    )
}

export default Menu;


