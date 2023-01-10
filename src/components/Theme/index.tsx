import React from 'react';
import { useForm } from '../../contexts/ProgramContext';
import Footer from '../Footer';
import Header from '../Header';
import * as C from './styles';

type Props = {
    children : React.ReactNode
}

function Theme({children}: Props){

    const { state, dispatch } = useForm();

    return(
        <C.Container>
            
            <Header />

                
                <C.Main>

                {state.currentStep === 0 ? "MELHOR HISTÓIA" : state.currentStep === 1 ?
                  "MELHOR TRILHA SONORA" : state.currentStep === 2 ? "MELHOR ANIMAÇÃO" : state.currentStep === 3 ?
                   "MAIS FOFO" : state.currentStep === 4 ? "MELHOR PROTAGONISTA" : ""}

                    {children}

                <C.ProgressBar>
                    <div className={state.currentStep === 0 ? 'step1' : state.currentStep === 1 ? 'step2' : state.currentStep === 2 ? 'step3': 'step4'}></div>
                </C.ProgressBar>
                </C.Main>
            
            <Footer />
           
        </C.Container>
    )
}

export default Theme;