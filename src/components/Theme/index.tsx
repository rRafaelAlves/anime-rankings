import React from 'react';
import { TitleStep } from '../../Pages.styles';
import Footer from '../Footer';
import Header from '../Header';
import * as C from './styles';

type Props = {
    children : React.ReactNode
}

function Theme({children}: Props){
    return(
        <C.Container>
            
            <Header />

                
                <C.Main>
                MELHOR ALGO
                    {children}
                </C.Main>
            
            <Footer />
           
        </C.Container>
    )
}

export default Theme;