import React, { useRef } from 'react';
import axios from 'axios';

import { Anime } from './types/AnimeList';

function ObjAux(){


  const [currentAnime, setCurrentAnime] = React.useState<Anime>(
    
      {
        attributes: {
          canonicalTitle: '',
          episodeCount: 0,
          posterImage: {
            medium: '',
            tiny: '',
            large: '',
            original: '',
          },
        },
      },
    
  );

  const inputRef = useRef<HTMLInputElement>(null);
 
    function formatSearch(e: React.FormEvent<HTMLFormElement>){
      e.preventDefault();
      
      let name = inputRef.current?.value ?? '';
      name = name?.toLowerCase();
      const newStr = name.replace(/ /g, '-');

      searchAnime(newStr);
    }

    const searchAnime = async (name: string) => {
      const res = await axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${name}`);
      const { data } = res;
      console.log(data.data);
      setCurrentAnime(data.data[0]);
    };
 
  return (
    <div>
     
      <form id='form' onSubmit={e => formatSearch(e)}>

      <input type="text" ref={inputRef} id='name' name='name'/>
      <input type="submit" form='form' value="Buscar" />
      </form>


      <div>
        <p>{currentAnime.attributes.canonicalTitle}</p>

        <img src={currentAnime.attributes.posterImage.medium} alt="" />
        
      </div>
     
     
    </div>
  );
};

export default ObjAux;

