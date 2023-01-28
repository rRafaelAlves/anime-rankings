import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { FormActions, useForm } from '../../contexts/ProgramContext';
import * as C from './styles';





function FinalBetterBest() {
    const { state, dispatch } = useForm();
    const Navigate = useNavigate();

    const handleNextStep = () =>{
        Navigate('/end'); 
   
        dispatch({
         type: FormActions.setCurrentStep,
         payload: state.currentStep + 1
     })
      
   }

    const handleBackStep = () => {
        Navigate('/final');

        dispatch({
            type: FormActions.setCurrentStep,
            payload: state.currentStep - 1
        })

    }
    return (
        <Theme>

            <C.Container>

                <C.ContainerFav>
                


                    <C.ContainerAnime>
                        <p>1° {state.ListBetterBest[0].attributes.canonicalTitle.length > 12 ? state.ListBetterBest[0].attributes.canonicalTitle.slice(0, 19) : state.ListBetterBest[0].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBetterBest[0].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>2° {state.ListBetterBest[1].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBetterBest[1].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>3° {state.ListBetterBest[2].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBetterBest[2].attributes.posterImage.original} />
                    </C.ContainerAnime>


                </C.ContainerFav>

                <C.ContainerFav>
                    

                    <C.ContainerAnime>
                        <p>4° {state.ListBetterBest[3].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBetterBest[3].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>5° {state.ListBetterBest[4].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBetterBest[4].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>6° {state.ListBetterBest[5].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBetterBest[5].attributes.posterImage.original} />
                    </C.ContainerAnime>


                </C.ContainerFav>


            </C.Container>

            <NavigateBeforeIcon onClick={() => handleBackStep()} style={{ position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer' }} />
            <NavigateNextIcon onClick={()=> handleNextStep()} style={{position: 'absolute', top: '44vh', right: 90, fontSize: 50, cursor: 'pointer'}} /> 
              {/* <C.Rosinante src='https://practicaltyping.com/wp-content/uploads/2019/05/corazon.jpg' /> */}  
        </Theme>

    )
}

export default FinalBetterBest;