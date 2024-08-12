import React from "react";
import { Card } from "src/ui/components/Card";
import {
  ListenAlbumsWrapper,
  ListenUsHeader,
  ListenUsSection,
} from "./ListenUsView.style";
import LazySwingersCover from "src/assets/images/lazy.png";
import LazyChristmasCover from "src/assets/images/christmas.jpg";
import PolishSwingCover from "src/assets/images/polish.jpg";
import TagSpotify from "src/assets/images/spotify.png";
import TagTidal from "src/assets/images/tidal.png";
import TagYouTube from "src/assets/images/youtube.png";
import TagAppleMusic from "src/assets/images/apple.png";
export interface CardConfigType {
  name: string;
  cover: string;
  data: Array<{
    src: string;
    imageUrl: string;
  }>;
}

const cards: Array<CardConfigType> = [
  {
    name: "Lazy Swingers Band",
    cover: LazySwingersCover,
    data: [
      {
        src: "https://open.spotify.com/album/6eKPp0p7fb6w0SQlyvHzp0",
        imageUrl: TagSpotify,
      },
      {
        src: "https://tidal.com/browse/album/136916865",
        imageUrl: TagTidal,
      },
      {
        src: "https://music.youtube.com/playlist?list=OLAK5uy_mZWYpsOls5ank7HnSNuvOeR3eQgvZO9t8",
        imageUrl: TagYouTube,
      },
      {
        src: "https://music.apple.com/pl/album/lazy-swingers-band/1507094483",
        imageUrl: TagAppleMusic,
      },
    ],
  },
  {
    name: "Lazy Christmas",
    cover: LazyChristmasCover,
    data: [
      {
        src: "https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P",
        imageUrl: TagSpotify,
      },
      {
        src: "https://tidal.com/browse/album/168182006",
        imageUrl: TagTidal,
      },
      {
        src: "https://music.youtube.com/playlist?list=OLAK5uy_lkk1xPxBViBc6BJV15Z1go2wJyJRYvNQI",
        imageUrl: TagYouTube,
      },
      {
        src: "https://music.apple.com/pl/album/lazy-christmas-single/1547365804",
        imageUrl: TagAppleMusic,
      },
    ],
  },
  {
    name: "Polish Swing For Lindy Hop",
    cover: PolishSwingCover,
    data: [
      {
        src: "https://open.spotify.com/album/66XnsvDO5h60grrk1hpzkG",
        imageUrl: TagSpotify,
      },
      {
        src: "https://tidal.com/browse/album/236091664",
        imageUrl: TagTidal,
      },
      {
        src: "https://music.youtube.com/playlist?list=OLAK5uy_n6alLLIMeF5-DwTYv1UvoAMrzi1GeIaBY",
        imageUrl: TagYouTube,
      },
      {
        src: "https://music.apple.com/pl/album/polish-swing-for-lindy-hop/1632523593",
        imageUrl: TagAppleMusic,
      },
    ],
  },
];

export function ListenUsView() {
  return (
    <ListenUsSection id="albums">
      <ListenUsHeader>Albums</ListenUsHeader>
      <ListenAlbumsWrapper>
        {cards.map((card) => {
          return (
            <Card name={card.name} coverSrc={card.cover} tags={card.data} />
          );
        })}
      </ListenAlbumsWrapper>
    </ListenUsSection>
  );
}
