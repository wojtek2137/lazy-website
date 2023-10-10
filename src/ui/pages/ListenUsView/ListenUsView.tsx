import React from 'react';
import { Card } from 'src/ui/components/Card';
import { ListenAlbumsWrapper, ListenUsHeader, ListenUsSection } from './ListenUsView.style';
import LazySwingersCover from 'src/assets/images/lazy.png';
import LazyChristmasCover from 'src/assets/images/christmas.jpg';
import PolishSwingCover from 'src/assets/images/polish.jpg';
import TagSpotify from 'src/assets/images/spotify.png';
import TagTidal from 'src/assets/images/tidal.png';
import TagYouTube from 'src/assets/images/youtube.png';
import TagAppleMusic from 'src/assets/images/apple.png';
export interface CardConfigType {
    name: string,
    cover: string,
    data: Array<{
        src: string,
        imageUrl: string
    }>
}

const cards: Array<CardConfigType> = [
    {
        name: 'Lazy Swingers Band',
        cover: LazySwingersCover,
        data: [
            {
                src: 'https://open.spotify.com/artist/6zZ4pSM6Omz7z6T97DIg78',
                imageUrl: TagSpotify
            },
            {
                src: 'https://tidal.com/browse/album/136916865',
                imageUrl: TagTidal
            },
            {
                src: 'https://www.youtube.com/watch?v=7vk4D1ikMAI&list=OLAK5uy_mBdrWLxeD30Betmkn8hfJS_eraYm5CVEs',
                imageUrl: TagYouTube
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagAppleMusic
            },
        ]
    },
    {
        name: 'Lazy Christmas',
        cover: LazyChristmasCover,
        data: [
            {
                src: 'https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P',
                imageUrl: TagSpotify
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagTidal
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagYouTube
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagAppleMusic
            },
        ]
    },
    {
        name: 'Polish Swing For Lindy Hop',
        cover: PolishSwingCover,
        data: [
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagSpotify
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagTidal
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagYouTube
            },
            {
                src: 'https://music.apple.com/pl/album/lazy-swingers-band/1507094483',
                imageUrl: TagAppleMusic
            },
        ]
    },
];

export function ListenUsView() {
    return (
        <ListenUsSection id="albums">
            <ListenUsHeader>
                Albums
            </ListenUsHeader>
            <ListenAlbumsWrapper>
                {cards.map(card => {
                    return <Card name={card.name} coverSrc={card.cover} tags={card.data} />
                })}
            </ListenAlbumsWrapper>
        </ListenUsSection>
    );
};
