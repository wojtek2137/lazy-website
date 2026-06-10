import React from "react";
import { Card } from "ui/components/Card";
import {
  ListenAlbumsWrapper,
  ListenUsHeader,
  ListenUsSection,
} from "./ListenUsView.style";

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
    cover: "/assets/images/lazy.webp",
    data: [
      {
        src: "https://open.spotify.com/album/6eKPp0p7fb6w0SQlyvHzp0",
        imageUrl: "/assets/images/spotify.png",
      },
      {
        src: "https://tidal.com/browse/album/136916865",
        imageUrl: "/assets/images/tidal.png",
      },
      {
        src: "https://music.youtube.com/playlist?list=OLAK5uy_mZWYpsOls5ank7HnSNuvOeR3eQgvZO9t8",
        imageUrl: "/assets/images/youtube.png",
      },
      {
        src: "https://music.apple.com/pl/album/lazy-swingers-band/1507094483",
        imageUrl: "/assets/images/apple.png",
      },
    ],
  },
  {
    name: "Lazy Christmas",
    cover: "/assets/images/christmas.webp",
    data: [
      {
        src: "https://open.spotify.com/album/5XkBiCPt7nEQUnGjLSjG3P",
        imageUrl: "/assets/images/spotify.png",
      },
      {
        src: "https://tidal.com/browse/album/168182006",
        imageUrl: "/assets/images/tidal.png",
      },
      {
        src: "https://music.youtube.com/playlist?list=OLAK5uy_lkk1xPxBViBc6BJV15Z1go2wJyJRYvNQI",
        imageUrl: "/assets/images/youtube.png",
      },
      {
        src: "https://music.apple.com/pl/album/lazy-christmas-single/1547365804",
        imageUrl: "/assets/images/apple.png",
      },
    ],
  },
  {
    name: "Polish Swing For Lindy Hop",
    cover: "/assets/images/polish.webp",
    data: [
      {
        src: "https://open.spotify.com/album/66XnsvDO5h60grrk1hpzkG",
        imageUrl: "/assets/images/spotify.png",
      },
      {
        src: "https://tidal.com/browse/album/236091664",
        imageUrl: "/assets/images/tidal.png",
      },
      {
        src: "https://music.youtube.com/playlist?list=OLAK5uy_n6alLLIMeF5-DwTYv1UvoAMrzi1GeIaBY",
        imageUrl: "/assets/images/youtube.png",
      },
      {
        src: "https://music.apple.com/pl/album/polish-swing-for-lindy-hop/1632523593",
        imageUrl: "/assets/images/apple.png",
      },
    ],
  },
];

export function ListenUsView() {
  return (
    <section id="albumy" aria-labelledby="albums-heading">
      <ListenUsSection>
        <header>
          <h2 id="albums-heading">
            <ListenUsHeader>Albumy</ListenUsHeader>
          </h2>
        </header>
        <ListenAlbumsWrapper
          role="list"
          aria-label="Lista albumów zespołu Lazy Swing Band"
        >
          {cards.map((card, index) => (
            <Card
              key={index}
              name={card.name}
              coverSrc={card.cover}
              tags={card.data}
            />
          ))}
        </ListenAlbumsWrapper>
      </ListenUsSection>
    </section>
  );
}
