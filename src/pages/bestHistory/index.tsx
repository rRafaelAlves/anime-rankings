import React from 'react';
import { DEFAULT_ANIME, FormActions, useForm } from '../../contexts/ProgramContext';
import axios from 'axios';
import { Anime } from '../../types/AnimeList';
import Theme from '../../components/Theme';
import * as C from './styles';



function BestHistory() {

  const [listAnime, setListAnime] = React.useState<Array<Anime>>([DEFAULT_ANIME, DEFAULT_ANIME, DEFAULT_ANIME]);
  const [currentAnime, setCurrentAnime] = React.useState<number>(0);
  const { state, dispatch } = useForm();


  React.useEffect(() => {
    const handleNameChange = () => {

      dispatch({
        type: FormActions.setListBestHistory,
        payload: listAnime
      })


    }

    handleNameChange();
  }, [listAnime])

  const inputRef = React.useRef<HTMLInputElement>(null);
  const inputRef2 = React.useRef<HTMLInputElement>(null);
  const inputRef3 = React.useRef<HTMLInputElement>(null);


  function formatSearch(e: React.FormEvent<HTMLFormElement>) {
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


  return (

    <Theme>
      <C.ListBox>

        <C.ContainerAnime>
          Anime 1



          <div>
            <C.AnimeName>
              {listAnime[0]?.attributes?.canonicalTitle}
            </C.AnimeName>

            <C.AnimeEpsCount >
              Número de episódios: {state.ListBestHistory[0].attributes.episodeCount}
            </C.AnimeEpsCount>

            <C.AnimePoster src={state.ListBestHistory[0].attributes.posterImage.tiny} alt="" />
          </div>

          <C.FormAnimes id='form' onSubmit={e => formatSearch(e)}>

            <C.InputSearchAnime type="text" ref={inputRef} id='name' name='name' />
            <C.ButtonSearch type="submit" form='form' value="Buscar" onClick={() => setCurrentAnime(0)} />
          </C.FormAnimes>


        </C.ContainerAnime>

        <C.ContainerAnime>
          Anime 2



          <div>
            <C.AnimeName>
              {listAnime[1]?.attributes?.canonicalTitle}
            </C.AnimeName>

            <C.AnimeEpsCount >
              Número de episódios: {state.ListBestHistory[1].attributes.episodeCount}
            </C.AnimeEpsCount>

            <C.AnimePoster src={state.ListBestHistory[1].attributes.posterImage.tiny} alt="" />
          </div>

          <C.FormAnimes id='form' onSubmit={e => formatSearch(e)}>

            <C.InputSearchAnime type="text" ref={inputRef2} id='name' name='name' />
            <C.ButtonSearch type="submit" form='form' value="Buscar" onClick={() => setCurrentAnime(1)} />
          </C.FormAnimes>


        </C.ContainerAnime>

        <C.ContainerAnime>
          Anime 3



          <div>
            <C.AnimeName>
              {listAnime[2]?.attributes?.canonicalTitle}
            </C.AnimeName>

            <C.AnimeEpsCount >
              Número de episódios: {state.ListBestHistory[2].attributes.episodeCount}
            </C.AnimeEpsCount>

            <C.AnimePoster src={state.ListBestHistory[2].attributes.posterImage.tiny} alt="" />
          </div>

          <C.FormAnimes id='form' onSubmit={e => formatSearch(e)}>

            <C.InputSearchAnime type="text" ref={inputRef3} id='name' name='name' />
            <C.ButtonSearch type="submit" form='form' value="Buscar" onClick={() => setCurrentAnime(2)} />
          </C.FormAnimes>


        </C.ContainerAnime>

      </C.ListBox>

    </Theme>
  )
}

export default BestHistory;