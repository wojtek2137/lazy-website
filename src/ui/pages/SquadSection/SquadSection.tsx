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
  SquadResponsiveImage
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
