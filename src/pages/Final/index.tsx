import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { FormActions, useForm } from '../../contexts/ProgramContext';
import * as C from './styles';





function Final() {
    const { state, dispatch } = useForm();
    const Navigate = useNavigate();


    const handleNextStep = () =>{
        Navigate('/finalBetterBest'); 
   
        dispatch({
         type: FormActions.setCurrentStep,
         payload: state.currentStep + 1
     })
      
   }

    const handleBackStep = () => {
        Navigate('/betterBest');

        dispatch({
            type: FormActions.setCurrentStep,
            payload: state.currentStep - 1
        })

    }
    return (
        <Theme>

            <C.Container>

                <C.ContainerFav>



                    <h4>Melhor História: </h4>

                    <C.ContainerAnime>
                        <p>1° {state.ListBestHistory[1].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestHistory[1].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>2° {state.ListBestHistory[2].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestHistory[2].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>3° {state.ListBestHistory[0].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestHistory[0].attributes.posterImage.original} />
                    </C.ContainerAnime>


                </C.ContainerFav>

                <C.ContainerFav>



                    <h4>Melhor Trilha Sonora: </h4>

                    <C.ContainerAnime>
                        <p>1° {state.ListBestSoundTrack[1].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestSoundTrack[1].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>2° {state.ListBestSoundTrack[2].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestSoundTrack[2].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>3° {state.ListBestSoundTrack[0].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestSoundTrack[0].attributes.posterImage.original} />
                    </C.ContainerAnime>


                </C.ContainerFav>

                <C.ContainerFav>



                    <h4>Melhor Animação: </h4>

                    <C.ContainerAnime>
                        <p>1° {state.ListBestAnimation[1].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestAnimation[1].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>2° {state.ListBestAnimation[2].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestAnimation[2].attributes.posterImage.original} />
                    </C.ContainerAnime>
                    <C.ContainerAnime>
                        <p>3° {state.ListBestAnimation[0].attributes.canonicalTitle}</p>
                        <C.Poster src={state.ListBestAnimation[0].attributes.posterImage.original} />
                    </C.ContainerAnime>


                </C.ContainerFav>

                <C.BoxChar>

                <C.ContainerFav>







                    <h4>Mais Fofo:  </h4>

                    <C.ContainerCharacter>
                        <p>{state.MoreCute.name}</p>
                        <C.Poster src={state.MoreCute.poster} />
                    </C.ContainerCharacter>

                </C.ContainerFav>
                <C.ContainerFav>



                    <h4>Melhor Protagonista:  </h4>

                    <C.ContainerCharacter>
                        <p>{state.BestProtagonist.name}</p>
                        <C.Poster src={state.BestProtagonist.poster} />
                    </C.ContainerCharacter>

                </C.ContainerFav>
                <C.ContainerFav>



                    <h4>Melhor Vilão:  </h4>

                    <C.ContainerCharacter>
                        <p>{state.BestVilan.name}</p>
                        <C.Poster src={state.BestVilan.poster} />
                    </C.ContainerCharacter>

                </C.ContainerFav>



                </C.BoxChar>


            </C.Container>

            <NavigateBeforeIcon onClick={() => handleBackStep()} style={{ position: 'absolute', top: '44vh', left: 90, fontSize: 50, cursor: 'pointer' }} />
            <NavigateNextIcon onClick={()=> handleNextStep()} style={{position: 'absolute', top: '44vh', right: 90, fontSize: 50, cursor: 'pointer'}} /> 
              {/* <C.Rosinante src='https://practicaltyping.com/wp-content/uploads/2019/05/corazon.jpg' /> */}  
        </Theme>

    )
}

export default Final;