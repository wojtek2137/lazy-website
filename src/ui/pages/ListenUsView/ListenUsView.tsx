import React from 'react';
import { Card } from 'src/ui/components/Card';
import { ListenAlbumsWrapper, ListenUsHeader, ListenUsSection } from './ListenUsView.style';
import LazySwingersCover from 'src/assets/images/lazy.png';
import LazyChristmasCover from 'src/assets/images/christmas.jpg';
import PolishSwingCover from 'src/assets/images/polish.jpg';
import TagSpotify from 'src/assets/images/spotify.png';


export function ListenUsView() {
    return (
        <ListenUsSection id="albums">
            <ListenUsHeader>
                Albums
            </ListenUsHeader>
            <ListenAlbumsWrapper>
                <Card coverSrc={LazySwingersCover} tagSrc={TagSpotify} />
                <Card coverSrc={LazyChristmasCover} tagSrc={TagSpotify} />
                <Card coverSrc={PolishSwingCover} tagSrc={TagSpotify} />
                <Card coverSrc={LazySwingersCover} tagSrc={TagSpotify} />
            </ListenAlbumsWrapper>

            {/* 

                
                        <div class="listen-content">
                            <div>
                                <h3>
                                    Lazy Swingers Band
                                </h3>
                                <ul class="streaming">
                                    <li><a href="https://open.spotify.com/artist/6zZ4pSM6Omz7z6T97DIg78"><img
                                        src="images/spotify.png"></a>
                                    </li>
                                    <li><a
                                        href="https://www.youtube.com/watch?v=7vk4D1ikMAI&list=OLAK5uy_mBdrWLxeD30Betmkn8hfJS_eraYm5CVEs"><img
                                            src="images/youtube.png"></a>
                                    </li>
                                    <li><a href="https://tidal.com/browse/album/136916865"><img src="images/tidal.png"></a>
                                    </li>
                                    <li><a href="https://music.apple.com/pl/album/lazy-swingers-band/1507094483"><img
                                        src="images/apple.png"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="listen-img-box">
                            <img src="images/christmas.jpg" alt="">
                        </div>
                        <div class="listen-content">
                            <div>
                                <h3>
                                    Lazy Christmas
                                </h3>
                                <ul class="streaming">
                                    <li><a href="https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P"><img
                                        src="images/spotify.png"></a>
                                    </li>
                                    <li><a
                                        href="https://www.youtube.com/watch?v=a3gFdbOYIow&list=OLAK5uy_l3SQkKAuteZR6MhNBQJDAXhIw1f1fjkVs"><img
                                            src="images/youtube.png"></a>
                                    </li>
                                    <li><a href="https://tidal.com/browse/album/168182006"><img src="images/tidal.png"></a>
                                    </li>
                                    <li><a
                                        href="https://music.apple.com/pl/album/lazy-christmas-single/1547365804?at=1001lwQy&ct=FFM_4f30dba867bc9a7892f545d73cf27553&uo=4&app=music"><img
                                            src="images/apple.png"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="listen-img-box">
                            <img src="images/charlie.jpg" alt="">
                        </div>
                        <div class="listen-content">
                            <div>
                                <h3>
                                    Charlie Parker Plays Bossa Nova (what if)
                                </h3>
                                <ul class="streaming">
                                    <li><a
                                        href="https://open.spotify.com/album/2Wf0lSkfnLAB7WgMxIWj3L?si=XI8-AVhPSsS9qeONV6moAA&nd=1"><img
                                            src="images/spotify.png"></a>
                                    </li>
                                    <li><a
                                        href="https://music.youtube.com/playlist?list=OLAK5uy_lt10FKHP0sPcI-aLT1UnBlmrqfa-SdSA0"><img
                                            src="images/youtube.png"></a>
                                    </li>
                                    <li><a href="https://tidal.com/browse/album/178870903"><img src="images/tidal.png"></a>
                                    </li>
                                    <li><a
                                        href="https://music.apple.com/us/album/charlie-parker-plays-bossa-nova-what-if/1560727257">
                                        <img
                                            src="images/apple.png"></a>
                                    </li>
                                </ul>
                            </div>

            </div> */}

        </ListenUsSection>
    );
};
