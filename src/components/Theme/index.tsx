import React from 'react';
import * as C from './styles';

type Props = {
    children : React.ReactNode
}

function Theme({children}: Props){
    return(
        <C.Container>
            {children}
        </C.Container>
    )
}

export default Theme;