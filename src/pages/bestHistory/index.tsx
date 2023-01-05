import React from 'react';
import {DEFAULT_ANIME, FormActions, useForm} from '../../contexts/ProgramContext';
import axios from 'axios';
import { Anime } from '../../types/AnimeList';



function BestHistory(){

    const [listAnime, setListAnime] = React.useState<Array<Anime>>([DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME]);
    const [currentAnime, setCurrentAnime] = React.useState<number>(0);
    const {state, dispatch} = useForm();


    React.useEffect(()=>{


        const handleNameChange = () =>{

            dispatch({type:FormActions.setListBestHistory,
            payload: listAnime})
    
    
    }

    handleNameChange();
    console.log(state.ListBestHistory);


    },[listAnime])

    const inputRef = React.useRef<HTMLInputElement>(null);
    const inputRef2 = React.useRef<HTMLInputElement>(null);
    const inputRef3 = React.useRef<HTMLInputElement>(null);


    function formatSearch(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        
        const input = currentAnime === 0 ? inputRef : currentAnime === 1 ? inputRef2 : inputRef3;
        let name = input?.current?.value ?? '';
        name = name?.toLowerCase();
        const newStr = name.replace(/ /g, '-');
  
        searchAnime(newStr);
      }
  
      const searchAnime = async (name: string) => {
        const res = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${name}`);
        const { data } = res;
        setListAnime(prevList => {
            const newList = [...prevList];
            newList[currentAnime] = data.data[0];
            return newList;
          });
      };


 

    
    console.log(listAnime);




    return( 
    <div>
    
    <div>
     Anime 1
     <form id='form' onSubmit={e => formatSearch(e)}>

     <input type="text" ref={inputRef} id='name' name='name'/>
     <input type="submit" form='form' value="Buscar" onClick={()=>setCurrentAnime(0)} />
     </form>


     <div>
       <p>
          {listAnime[0]?.attributes?.canonicalTitle}
       </p>
        
       
       
     </div>
    
    
   </div>

   <div>    
     Anime 2
     <form id='form' onSubmit={e => formatSearch(e)}>

     <input type="text" ref={inputRef2} id='name' name='name'/>
     <input type="submit" form='form' value="Buscar" onClick={()=>setCurrentAnime(1)} />
     </form>


     <div>
       <p>
          {listAnime[1]?.attributes?.canonicalTitle}
       </p>
        
       
       
     </div>
    
    
   </div>

   <div>
     Anime 3
     <form id='form' onSubmit={e => formatSearch(e)}>

     <input type="text" ref={inputRef3} id='name' name='name'/>
     <input type="submit" form='form' value="Buscar" onClick={()=>setCurrentAnime(2)} />
     </form>


     <div>
       <p>
          {listAnime[2]?.attributes?.canonicalTitle}
       </p>
        
       
       
     </div>
    
    
   </div>
    
    </div>
    )
}

export default BestHistory;