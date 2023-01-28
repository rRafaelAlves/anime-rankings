import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Menu from './pages/menu';
import BestAnimation from './pages/bestAnimation';
import BestHistory from './pages/bestHistory';
import BestSoundTrack from './pages/bestSoundtrack';
import BetterBest from './pages/betterBest';
import BestProtagonist from './pages/bestProtagonist';
import MoreCute from './pages/moreCute';
import BestVillan from './pages/bestVillan';
import Final from './pages/Final';
import FinalBetterBest from './pages/finalBetterBest';
import End from './pages/end';



export const Router = () => {

    return (

        <BrowserRouter >
            <Routes>

                <Route path="/" element={<Menu />} />
                <Route path="/bestAnimation" element={<BestAnimation />} />
                <Route path="/bestHistory" element={<BestHistory />} />
                <Route path='/bestSoundTrack' element={<BestSoundTrack />} />
                <Route path='/bestProtagonist' element={<BestProtagonist />} />
                <Route path='/moreCute' element={<MoreCute />} />
                <Route path='/bestProtagonist' element={<BestProtagonist />} />
                <Route path='/bestVillan' element={<BestVillan />} />
                <Route path="/betterBest" element={<BetterBest />} />
                <Route path= '/final' element={<Final />} />
                <Route path='/finalBetterBest' element={<FinalBetterBest />}/>
                <Route path='/end' element={<End />} />
            </Routes>
        </BrowserRouter>

    )
}