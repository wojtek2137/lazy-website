import React from 'react';
import { ResponsiveLazyImage } from 'ui/components/ResponsiveLazyImage';
import {
  LatoZRadiemWrapper,
  ContentContainer,
  SectionHeader,
  MainTitle,
  Subtitle,
  ContentGrid,
  TextContent,
  ArticleText,
  CitiesList,
  ImageCollage,
  CollageImage,
  CollageImageWrapper,
  RadioLogo
} from './LatoZRadiemSection.style';

// Import images from assets
import LatoZRadiemMain from 'assets/images/lato_z_radiem.jpg';
import LatoZRadiem1 from 'assets/images/lato_z_radiem_1.jpg';
import LatoZRadiem2 from 'assets/images/lato_z_radiem_2.jpg';
import LatoZRadiem3 from 'assets/images/lato_z_radiem_3.jpg';
import PolskieRadioLogo from 'assets/images/polskie_radio_jedynka.png';

const cities = [
  {
    name: 'Zakopane',
    url: 'https://jedynka.polskieradio.pl/artykul/3546524,Rusza-Trasa-Lata-z-Radiem-i-Telewizja-Polska-Co-wydarzy-sie-w-Zakopanem'
  },
  {
    name: 'Chorzów',
    url: 'https://jedynka.polskieradio.pl/artykul/3552975,Lato-z-Radiem-i-Telewizja-Polska-przystanek-trzeci-Superautopl-Stadion-Slaski'
  },
  {
    name: 'Giżycko',
    url: 'https://jedynka.polskieradio.pl/artykul/3556077,Lato-z-Radiem-i-Telewizja-Polska-w-Gizycku-Jakie-atrakcje-zaplanowano'
  },
  {
    name: 'Poddębice',
    url: 'https://jedynka.polskieradio.pl/artykul/3559214,Lato-z-Radiem-i-Telewizja-Polska-w-Poddebicach-Jakie-atrakcje-zaplanowano'
  },
  {
    name: 'Lublin',
    url: 'https://jedynka.polskieradio.pl/artykul/3562277,Lato-z-Radiem-i-Telewizja-Polska-w-Lublinie-Jakie-atrakcje-zaplanowano'
  },
  {
    name: 'Mrozy',
    url: 'https://jedynka.polskieradio.pl/artykul/3563339,Lato-z-Radiem-w-uniwersum-Rancza-Co-wydarzy-sie-w-Jeruzalu-i-Mrozach'
  },
  {
    name: 'Elbląg',
    url: 'https://jedynka.polskieradio.pl/artykul/3549480,Drugi-przystanek-na-trasie-Lata-z-Radiem-i-Telewizj%C4%85-Polsk%C4%85-Co-wydarzy%C5%82o-si%C4%99-w-Elbl%C4%85gu'
  },
  {
    name: 'Tarnów',
    url: 'https://jedynka.polskieradio.pl/artykul/3568543,Lato-z-Radiem-i-Telewizja-Polska-tym-razem-w-Tarnowie'
  }
];

const collageImages = [
  {
    src: LatoZRadiemMain,
    alt: 'Lazy Swing Band podczas Lata z Radiem',
    position: 'side' as const
  },
  {
    src: LatoZRadiem1, 
    alt: 'Występ zespołu podczas potańcówki',
    position: 'main' as const
  },
  {
    src: LatoZRadiem2,
    alt: 'Z Panią redaktor Sławą Bieńczycką podczas wydarzenia Lato z Radiem',
    position: 'bottom' as const
  },
  {
    src: LatoZRadiem3,
    alt: 'Z Panem redaktorem Marianem Czejarkiem podczas koncertu Lazy Swing Band w trakcie Lata z Radiem',
    position: 'top' as const
  }
];

export function LatoZRadiemSection() {
  return (
    <LatoZRadiemWrapper id="lato-z-radiem" aria-labelledby="lato-z-radiem-heading">
      <ContentContainer>
        <SectionHeader>
          <MainTitle id="lato-z-radiem-heading">
            Lato z Radiem
          </MainTitle>
          <Subtitle>
            Międzypokoleniowe potańcówki z Lazy Swing Band
          </Subtitle>
        </SectionHeader>
        
        <ContentGrid>
          <TextContent>
            <ArticleText>
              <p>
                <strong>2025 rok</strong> oznacza dla nas szczególną przygodę! 
                Lazy Swing Band dołączył do ekipy 
                <strong> <a href="https://jedynka.polskieradio.pl/artykul/3553019,Pota%C5%84c%C3%B3wki-Lata-z-Radiem-Jak%C4%85-muzyk%C4%99-gra-Lazy-Swing-Band" target="_blank" rel="noopener noreferrer">"Lata z Radiem i Telewizją Polską"</a></strong>, 
               występując na <strong>9 wyjątkowych potańcówkach międzypokoleniowych </strong> 
                w najpiękniejszych zakątkach Polski.
              </p>
              
              <p>
                Każda potańcówka to nie tylko 
                koncert, ale prawdziwe święto muzyki, gdzie babcie tańczą 
                ze swoimi wnukami, a melodie lat 20. i 30. XX wieku 
                ponownie ożywają.
              </p>
              
              <p>
                Program <strong>"Lato z Radiem"</strong> to inicjatywa <a href="https://jedynka.polskieradio.pl/" target="_blank" rel="noopener noreferrer">Polskiego Radia</a>, 
                która promuje najlepszą polską muzykę w całym kraju. 
                Jesteśmy dumni, że możemy reprezentować swingową scenę 
                i pokazywać, że jazz to muzyka ponadczasowa, która 
                łączy wszystkich bez względu na wiek.
              </p>
            </ArticleText>
            
            <CitiesList>
              <h3>Miasta, które odwiedziliśmy:</h3>
              <ul>
                {cities.map((city, index) => (
                  <li key={index}>
                    <a 
                      href={city.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`Przeczytaj artykuł o wydarzeniu Lato z Radiem w ${city.name}`}
                      title={`Kliknij, aby przeczytać więcej o wydarzeniu w ${city.name}`}
                    >
                      {city.name}
                    </a>
                  </li>
                ))}
              </ul>
            </CitiesList>
          </TextContent>
          
          <ImageCollage>
            {collageImages.map((image, index) => (
              <CollageImage key={index} $position={image.position}>
                <CollageImageWrapper>
                  <ResponsiveLazyImage
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    useResponsive={true}
                  />
                </CollageImageWrapper>
              </CollageImage>
            ))}
            
            <RadioLogo>
              <a 
                href="https://jedynka.polskieradio.pl/artykul/3553019,Pota%C5%84c%C3%B3wki-Lata-z-Radiem-Jak%C4%85-muzyk%C4%99-gra-Lazy-Swing-Band" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Przeczytaj artykuł o Lazy Swing Band w programie Lato z Radiem na stronie Polskiego Radia Jedynka"
                title="Kliknij, aby przeczytać artykuł o naszym udziale w programie Lato z Radiem"
              >
                <ResponsiveLazyImage
                  src={PolskieRadioLogo}
                  alt="Logo Polskiego Radia Jedynka"
                  loading="lazy"
                  useResponsive={true}
                />
              </a>
            </RadioLogo>
          </ImageCollage>
        </ContentGrid>
      </ContentContainer>
    </LatoZRadiemWrapper>
  );
}
