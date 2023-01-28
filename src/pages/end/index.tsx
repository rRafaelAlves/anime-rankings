import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { DEFAULT_ANIME, DEFAULT_CHARACTER, FormActions, useForm } from '../../contexts/ProgramContext';
import * as C from './styles';





function End() {
    const { state, dispatch } = useForm();
    const Navigate = useNavigate();


    const handleBackStep = () => {
        Navigate('/finalBetterBest');

        dispatch({
            type: FormActions.setCurrentStep,
            payload: state.currentStep - 1
        })

    }


    const Refazer = () => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 0
        })
        dispatch({
            type: FormActions.setBestProtagonist,
            payload: DEFAULT_CHARACTER
        })
        dispatch({
            type: FormActions.setBestVillan,
            payload: DEFAULT_CHARACTER
        })
        dispatch({
            type: FormActions.setMoreCute,
            payload: DEFAULT_CHARACTER
        })
        dispatch({
            type: FormActions.setListBestHistory,
            payload: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME]
        })
        dispatch({
            type: FormActions.setListBestAnimation,
            payload: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME]
        })
        dispatch({
            type: FormActions.setListBestSoundTrack,
            payload: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME]
        })
        dispatch({
            type: FormActions.setListBetterBest,
            payload: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME]
        })

        Navigate('/');

    }

    return (
        <Theme>

            <C.Container>

                <C.TextEnd>
                    Muito obrigado por usarem esse site, não ficou tão profissional quanto eu queria, mas foi de coração e irei continuar me dedicando nos estudos. Vocês me motivam muito com as lives. <br/>
                    Eu amo vocês!

                </C.TextEnd>
                <C.Rosinante src='https://practicaltyping.com/wp-content/uploads/2019/05/corazon.jpg' />
                

            </C.Container>
            <C.ButtonStartAgain onClick={()=> Refazer()}>Refazer Ranking</C.ButtonStartAgain>

            <NavigateBeforeIcon onClick={() => handleBackStep()} style={{ position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer' }} />
             
        </Theme>

    )
}

export default End;