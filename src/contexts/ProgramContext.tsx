import React, { useContext, useReducer } from "react";
import { Anime } from "../types/AnimeList";
import { Character } from "../types/Character";

const FormContext = React.createContext<ContextType | undefined>(undefined);

export const DEFAULT_ANIME = {attributes:{
    canonicalTitle: '',
    episodeCount: 0,
    posterImage: {
        large: '',
        medium: '',
        original: '',
        tiny: ''
    }
}};

export const DEFAULT_CHARACTER = {
    name: '',
    anime: '',
    poster: ''
};

type ClientState ={
    ListBetterBest: [Anime]
    ListBestHistory: [Anime]
    ListBestProtagonist: [Character]
    ListBestSoundTrack: [Anime]
    ListBestAnimation: [Anime]
    ListMoreCute: [Character]
};

type Action = {
    type: FormActions
    payload: any
};

type ContextType = {
    state: ClientState
    dispatch: (action: Action)=>void
};

type FormProviderProps = {
    children: React.ReactNode
};

const initialDate: ClientState ={
    ListBetterBest: [DEFAULT_ANIME],
    ListBestHistory: [DEFAULT_ANIME],
    ListBestProtagonist: [DEFAULT_CHARACTER],
    ListBestSoundTrack: [DEFAULT_ANIME],
    ListBestAnimation: [DEFAULT_ANIME],
    ListMoreCute: [DEFAULT_CHARACTER]
};

export enum FormActions {
    setListBetterBest,
    setListBestHistory,
    setListBestProtagonist,
    setListBestSoundTrack,
    setListBestAnimation,
    setListMoreCute

};
const formReducer = (state: ClientState, action: Action) => {
    switch (action.type) {

        case FormActions.setListBestHistory:
            return { ...state, ListBestHistory: action.payload };

        case FormActions.setListBestAnimation:
            return { ...state, ListBestAnimation: action.payload };

        case FormActions.setListBestSoundTrack:
            return { ...state, ListBestSoundTrack: action.payload };

        case FormActions.setListBetterBest:
            return { ...state, ListBetterBest: action.payload };

        case FormActions.setListMoreCute:
            return { ...state, ListMoreCute: action.payload };

        case FormActions.setListBestProtagonist:
            return { ...state, ListBestProtagonist: action.payload };


        default: return state;
    }
}


export const FormProvider = ({children}: FormProviderProps) =>{

const [state, dispatch] = useReducer(formReducer, initialDate);

    return(
        <FormContext.Provider value={{state, dispatch}}>
            {children}
        </FormContext.Provider>
    )
};

export const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw Error ('useForm precisa ser utilizado dentro do Provider');
    }
    return context;
}