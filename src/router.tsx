import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './pages/menu';
import BestAnimation from './pages/bestAnimation';
import BestHistory from './pages/bestHistory';
import BestSoundTrack from './pages/bestSoundtrack';
import BetterBest from './pages/betterBest';
import BestProtagonist from './pages/bestProtagonist';
import MoreCute from './pages/moreCute';



export const Router = () => {

    return (

        <BrowserRouter >
            <Routes>

                <Route path="/" element={<Menu />} />
                <Route path="/bestAnimation" element={<BestAnimation />} />
                <Route path="/bestHistory" element={<BestHistory />} />
                <Route path='/bestSoundTrack' element={<BestSoundTrack />} />
                <Route path="/betterBest" element={<BetterBest />} />
                <Route path='/bestProtagonist' element={<BestProtagonist />} />
                <Route path='/bestSoundTrack' element={<MoreCute />} />
            </Routes>
        </BrowserRouter>

    )
}