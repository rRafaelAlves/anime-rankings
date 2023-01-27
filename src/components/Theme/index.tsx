import React from 'react';
import { useForm } from '../../contexts/ProgramContext';
import Footer from '../Footer';
import Header from '../Header';
import * as C from './styles';
import { useNavigate } from 'react-router-dom';


type Props = {
    children : React.ReactNode
}

function Theme({children}: Props){

    const Navigate = useNavigate();

    React.useEffect(()=>{
            
    },[])

    const { state } = useForm();

    return(
        <C.Container>
            
            <Header />
                
                <C.Main>

                {state.currentStep === 0 ? "" : state.currentStep === 1 ?
                  "MELHOR HISTÓRIA" : state.currentStep === 2 ? "MELHOR TRILHA SONORA" : state.currentStep === 3 ?
                   "MELHOR ANIMAÇÃO" : state.currentStep === 4 ? "MAIS FOFO" : state.currentStep === 5 ? "MELHOR PROTAGONISTA" : state.currentStep === 6 ? "MELHOR VILÃO": ""}

                    {children}

                <C.ProgressBar>
                    <div className={state.currentStep === 0 ? 'step1' : state.currentStep === 1 ? 'step2' : state.currentStep === 2 ?
                     'step3': state.currentStep === 3 ? 'step4' : state.currentStep === 4 ? 'step5': state.currentStep  === 5 ? 'step6': 'step7'}></div>
                </C.ProgressBar>
                </C.Main>
            
            <Footer />
           
        </C.Container>
    )
}

export default Theme;