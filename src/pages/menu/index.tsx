import React from 'react';
import { useNavigate } from 'react-router-dom';
import Theme from '../../components/Theme';


function Menu(){

   const Navigate = useNavigate();
    return( 
        <Theme>
            <div>
                <button style={{color: 'black'}} onClick={()=> Navigate('/bestHistory')}>Começar</button>
            </div>
        </Theme>
    )
}

export default Menu;