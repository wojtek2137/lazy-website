import React from "react";
import { ResponsiveLazyImage } from "../../components/ResponsiveLazyImage";
import {
  SquadSection as SquadSectionWrapper,
  ImageBox,
  ImageWrapper,
  SquadHeader,
  SquadName,
  SquadInstrument,
  SquadHeaderMain
} from "./SquadSection.style";

// Squad member images
import Wojtek from "assets/images/wojtek.jpg";
import Michal from "assets/images/michal.jpg";
import Lukasz from "assets/images/lukasz.jpg";
import Sylwia from "assets/images/sylwia.jpg";
import Dominik from "assets/images/dominik.jpg";
import Milosz from "assets/images/milosz.jpg";

const squadData = [
  {
    person: "Sylwia Buchalska",
    imageSrc: Sylwia,
    description: "Wokal",
  },
  {
    person: "Wojciech Rejdych",
    imageSrc: Wojtek,
    description: "Saksofon",
  },
  {
    person: "Dominik Borek",
    imageSrc: Dominik,
    description: "Trąbka",
  },
  {
    person: "Michał Biel",
    imageSrc: Michal,
    description: "Kontrabas",
  },
  {
    person: "Łukasz Giergiel",
    imageSrc: Lukasz,
    description: "Perkusja",
  },
  {
    person: "Miłosz Wójcik",
    imageSrc: Milosz,
    description: "Gitara",
  },
];

export function SquadSection() {
  return (
    <SquadSectionWrapper>
      <SquadHeaderMain>
        <span>Skład zespołu</span>
      </SquadHeaderMain>
      {squadData.map((squad, index) => (
        <ImageBox key={index}>
          <ImageWrapper>
            <ResponsiveLazyImage 
              src={squad.imageSrc} 
              alt={squad.person}
              loading="lazy"
              useResponsive={true}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover',
                objectPosition: 'center top'
              }}
            />
          </ImageWrapper>
          <SquadHeader>
            <SquadName>{squad.person}</SquadName>
            <SquadInstrument>{squad.description}</SquadInstrument>
          </SquadHeader>
        </ImageBox>
      ))}
    </SquadSectionWrapper>
  );
}
