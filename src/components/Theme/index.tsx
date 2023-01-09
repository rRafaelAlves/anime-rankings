import React from 'react';
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
            
            {children}
            
            <Footer />
           
        </C.Container>
    )
}

export default Theme;