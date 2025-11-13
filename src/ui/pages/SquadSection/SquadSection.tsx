import React from "react";
import { ResponsiveLazyImage } from "../../components/ResponsiveLazyImage";
import {
  SquadSection as SquadSectionWrapper,
  ImageBox,
  ImageWrapper,
  SquadHeader,
  SquadName,
  SquadInstrument,
  SquadHeaderMain,
  SquadResponsiveImage,
} from "./SquadSection.style";

const squadData = [
  {
    person: "Sylwia Buchalska-Augustyn",
    imageSrc: "/images/responsive/sylwia.webp",
    description: "Wokal",
  },
  {
    person: "Wojciech Rejdych",
    imageSrc: "/images/responsive/wojtek.webp",
    description: "Saksofon",
  },
  {
    person: "Dominik Borek",
    imageSrc: "/images/responsive/dominik.webp",
    description: "Trąbka",
  },
  {
    person: "Michał Biel",
    imageSrc: "/images/responsive/michal.webp",
    description: "Kontrabas",
  },
  {
    person: "Łukasz Giergiel",
    imageSrc: "/images/responsive/lukasz.webp",
    description: "Perkusja",
  },
  {
    person: "Miłosz Bazarnik",
    imageSrc: "/images/responsive/milosz.webp",
    description: "Fortepian",
  },
];

export function SquadSection() {
  return (
    <section id="zespol" aria-labelledby="squad-heading">
      <SquadSectionWrapper>
        <SquadHeaderMain id="squad-heading">
          <span>Skład zespołu</span>
        </SquadHeaderMain>
        {squadData.map((squad, index) => (
          <ImageBox key={index}>
            <ImageWrapper>
              <SquadResponsiveImage>
                <ResponsiveLazyImage
                  src={squad.imageSrc}
                  alt={`Zdjęcie ${squad.person}, ${squad.description} w zespole Lazy Swing Band`}
                  loading="lazy"
                  useResponsive={true}
                />
              </SquadResponsiveImage>
            </ImageWrapper>
            <SquadHeader>
              <SquadName>{squad.person}</SquadName>
              <SquadInstrument>{squad.description}</SquadInstrument>
            </SquadHeader>
          </ImageBox>
        ))}
      </SquadSectionWrapper>
    </section>
  );
}
