import React from "react";
import { Form } from "react-router-dom";
import { Anime } from "../types/AnimeList";
import { Character } from "../types/Character";


const FormContext = React.createContext<ContextType | undefined>(undefined);

export const DEFAULT_ANIME: Anime = {
    attributes: {
        canonicalTitle: '',
        episodeCount: 0,
        posterImage: {
            large: '',
            medium: '',
            original: '',
            tiny: ''
        }
    }
};

export const DEFAULT_CHARACTER = {
    name: '',
    anime: '',
    poster: ''
};

type ClientState = {
    ListBetterBest: [Anime, Anime, Anime, Anime, Anime, Anime]
    ListBestHistory: [Anime, Anime, Anime]
    BestProtagonist: Character
    ListBestSoundTrack: [Anime, Anime, Anime]
    ListBestAnimation: [Anime, Anime, Anime]
    MoreCute: Character
    currentStep: number
    BestVilan: Character
};

type Action = {
    type: FormActions
    payload: any
};

type ContextType = {
    state: ClientState
    dispatch: (action: Action) => void
};

type FormProviderProps = {
    children: React.ReactNode
};

const initialDate: ClientState = {
    ListBetterBest: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME],
    ListBestHistory: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME],
    ListBestSoundTrack: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME],
    ListBestAnimation: [DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME],
    MoreCute: DEFAULT_CHARACTER,
    BestVilan: DEFAULT_CHARACTER,
    BestProtagonist: DEFAULT_CHARACTER,
    currentStep: 0
};

export enum FormActions {
    setListBetterBest,
    setListBestHistory,
    setBestProtagonist,
    setListBestSoundTrack,
    setListBestAnimation,
    setBetterBest,
    setMoreCute,
    setBestVillan,
    setCurrentStep

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

        case FormActions.setMoreCute:
            return { ...state, MoreCute: action.payload };

        case FormActions.setBestProtagonist:
            return { ...state, BestProtagonist: action.payload };

        case FormActions.setBestVillan:
            return { ...state, BestVilan: action.payload };

        case FormActions.setBetterBest:
            return { ...state, BetterBest: action.payload };

        case FormActions.setCurrentStep:
            return { ...state, currentStep: action.payload }


        default: return state;
    }
}


export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = React.useReducer(formReducer, initialDate);

    return (
        <FormContext.Provider value={{ state, dispatch }}>
            {children}
        </FormContext.Provider>
    )
};

export const useForm = () => {
    const context = React.useContext(FormContext);
    if (context === undefined) {
        throw Error('useForm precisa ser utilizado dentro do Provider');
    }
    return context;
}