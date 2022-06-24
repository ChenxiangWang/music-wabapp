import React, {memo} from 'react';
import {Routes, Route} from "react-router-dom";
//import routes from './router';
import AppLayout from '@/layout/app-layout';
// import Mine from '@/pages/mine';
import Discover from '@/pages/discover';
// import Friend from '@/pages/friend';
import Recommend from '@/pages/discover/child-pages/recommend';
import Album from '@/pages/discover/child-pages/album';
import Dj from '@/pages/discover/child-pages/dj';
import Songs from '@/pages/discover/child-pages/songs';
import Artist from '@/pages/discover/child-pages/artist';
import Ranking from '@/pages/discover/child-pages/ranking';

import store from '@/store';
import {Provider} from 'react-redux';

export default memo(function App() {
    //let element = useRoutes(routes);
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<AppLayout/>}>
                    <Route index element={<Discover/>}/>
                    <Route path="discover" element={<Discover/>}>
                        <Route index element={<Recommend/>}/>
                        <Route path="recommend" element={<Recommend/>}/>
                        <Route path="album" element={<Album/>}/>
                        <Route path="djradio" element={<Dj/>}/>
                        <Route path="songs" element={<Songs/>}/>
                        <Route path="artist" element={<Artist/>}/>
                        <Route path="ranking" element={<Ranking/>}/>
                    </Route>
                </Route>
            </Routes>
        </Provider>
    );
});