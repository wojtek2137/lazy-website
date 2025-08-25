import React, { useState, useEffect } from 'react';
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
  PolandMap,
  MapContainer,
  PolandMapImage,
  CityOverlay,
  CityMarker,
  CityLabel,
  ImageCarousel,
  CarouselContainer,
  CarouselTrack,
  CarouselCard,
  CardImageWrapper,
  CardContent,
  CarouselIndicators,
  IndicatorDot,
  SwipeHint,
  CarouselRadioLogo
} from './LatoZRadiemSection.style';

// Use responsive images from public folder

// Cities with coordinates adjusted for Poland map PNG borders
const cities = [
  {
    name: 'Zakopane',
    url: 'https://jedynka.polskieradio.pl/artykul/3546524,Rusza-Trasa-Lata-z-Radiem-i-Telewizja-Polska-Co-wydarzy-sie-w-Zakopanem',
    x: 50,
    y: 85
  },
  {
    name: 'Chorzów',
    url: 'https://jedynka.polskieradio.pl/artykul/3552975,Lato-z-Radiem-i-Telewizja-Polska-przystanek-trzeci-Superautopl-Stadion-Slaski',
    x: 45,
    y: 75
  },
  {
    name: 'Giżycko',
    url: 'https://jedynka.polskieradio.pl/artykul/3556077,Lato-z-Radiem-i-Telewizja-Polska-w-Gizycku-Jakie-atrakcje-zaplanowano',
    x: 70,
    y: 20
  },
  {
    name: 'Poddębice',
    url: 'https://jedynka.polskieradio.pl/artykul/3559214,Lato-z-Radiem-i-Telewizja-Polska-w-Poddebicach-Jakie-atrakcje-zaplanowano',
    x: 42,
    y: 55
  },
  {
    name: 'Lublin',
    url: 'https://jedynka.polskieradio.pl/artykul/3562277,Lato-z-Radiem-i-Telewizja-Polska-w-Lublinie-Jakie-atrakcje-zaplanowano',
    x: 75,
    y: 60
  },
  {
    name: 'Mrozy',
    url: 'https://jedynka.polskieradio.pl/artykul/3563339,Lato-z-Radiem-w-uniwersum-Rancza-Co-wydarzy-sie-w-Jeruzalu-i-Mrozach',
    x: 65,
    y: 45
  },
  {
    name: 'Elbląg',
    url: 'https://jedynka.polskieradio.pl/artykul/3549480,Drugi-przystanek-na-trasie-Lata-z-Radiem-i-Telewizj%C4%85-Polsk%C4%85-Co-wydarzy%C5%82o-si%C4%99-w-Elbl%C4%85gu',
    x: 52,
    y: 15
  },
  {
    name: 'Tarnów',
    url: 'https://jedynka.polskieradio.pl/artykul/3568543,Lato-z-Radiem-i-Telewizja-Polska-tym-razem-w-Tarnowie',
    x: 58,
    y: 78
  },
  {
    name: 'Grudziądz',
    url: 'https://jedynka.polskieradio.pl/artykul/3570215,Lato-z-Radiem-i-Telewizja-Polska-w-Grudziadzu',
    x: 48,
    y: 30
  }
];

const carouselSlides = [
  {
    src: '/images/responsive/lato_z_radiem_1.webp', 
    alt: 'Występ zespołu podczas potańcówki',
    title: 'Potańcówki międzypokoleniowe',
    description: 'Energia swingu łączy wszystkie pokolenia'
  },
  {
    src: '/images/responsive/lato_z_radiem_2.webp',
    alt: 'Z Panią redaktor Sławą Bieńczycką podczas wydarzenia Lato z Radiem',
    title: 'Z Radiem w całej Polsce',
    description: 'Po jednym z koncertów z Panią redaktor Sławą Bieńczycką.'
  },
  {
    src: '/images/responsive/lato_z_radiem_3.webp',
    alt: 'Z Panem redaktorem Marianem Czejarkiem podczas koncertu Lazy Swing Band w trakcie Lata z Radiem',
    title: 'Radiowe wywiady',
    description: 'Opowiadamy o pasji do jazzu z Panem redaktorem Marianem Czejarkiem.'
  },
  {
    src: '/images/responsive/lato_z_radiem.webp',
    alt: 'Lazy Swing Band podczas Lata z Radiem',
    title: 'Lazy Swing Band',
    description: 'Reprezentujemy swingową scenę na najważniejszych festiwalach w Polsce.'
  }
];

export function LatoZRadiemSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);


  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Handle touch gestures for mobile swipe
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    } else if (isRightSwipe) {
      setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Map interaction handler
  const handleCityClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
                <strong> Lazy Swing Band</strong> dołączył do ekipy <strong> <a href="https://www.latozradiem.pl/pikniki" target="_blank" rel="noopener noreferrer">"Lata z Radiem i Telewizją Polską"</a></strong> występując na
                <strong> <a href="https://jedynka.polskieradio.pl/artykul/3553019,Pota%C5%84c%C3%B3wki-Lata-z-Radiem-Jak%C4%85-muzyk%C4%99-gra-Lazy-Swing-Band" target="_blank" rel="noopener noreferrer"> 9 wyjątkowych potańcówkach międzypokoleniowych w najpiękniejszych zakątkach Polski.</a></strong>
              </p>
              
              
              <p>
                Program <strong>  <a href="https://www.latozradiem.pl/" target="_blank" rel="noopener noreferrer">"Lato z Radiem"</a></strong> to inicjatywa Polskiego Radia, 
                która promuje najlepszą polską muzykę w całym kraju. 
                Jesteśmy dumni, że możemy reprezentować swingową scenę 
                i pokazywać, że jazz to muzyka ponadczasowa, która 
                łączy wszystkich bez względu na wiek.
              </p>
            </ArticleText>
            
            <PolandMap>
              <h3>Trasa "Lato z Radiem" - Miasta, które odwiedziliśmy:</h3>
              <MapContainer>
                <PolandMapImage 
                  src="/images/responsive/poland_map.png"
                  alt="Mapa Polski z trasą Lato z Radiem"
                  loading="lazy"
                />
                <CityOverlay>
                  {cities.map((city, index) => (
                    <React.Fragment key={index}>
                      <CityMarker
                        $x={city.x}
                        $y={city.y}
                        onClick={() => handleCityClick(city.url)}
                        role="button"
                        tabIndex={0}
                        aria-label={`Przeczytaj artykuł o wydarzeniu Lato z Radiem w ${city.name}`}
                        title={`Kliknij, aby przeczytać więcej o wydarzeniu w ${city.name}`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            handleCityClick(city.url);
                          }
                        }}
                      />
                      <CityLabel $x={city.x} $y={city.y}>
                        {city.name}
                      </CityLabel>
                    </React.Fragment>
                  ))}
                </CityOverlay>
              </MapContainer>
            </PolandMap>
          </TextContent>
          
          <ImageCarousel>
            <CarouselContainer
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <CarouselRadioLogo>
                <a 
                  href="https://jedynka.polskieradio.pl/artykul/3553019,Pota%C5%84c%C3%B3wki-Lata-z-Radiem-Jak%C4%85-muzyk%C4%99-gra-Lazy-Swing-Band" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Przeczytaj artykuł o Lazy Swing Band w programie Lato z Radiem"
                  title="Kliknij, aby przeczytać artykuł o naszym udziale w programie Lato z Radiem"
                >
                  <ResponsiveLazyImage
                    src="/images/responsive/polskie_radio_jedynka.webp"
                    alt="Logo Polskiego Radia Jedynka"
                    loading="lazy"
                    useResponsive={true}
                  />
                </a>
              </CarouselRadioLogo>

              <CarouselTrack $currentIndex={currentSlide}>
                {carouselSlides.map((slide, index) => (
                  <CarouselCard key={index}>
                    <CardImageWrapper>
                      <ResponsiveLazyImage
                        src={slide.src}
                        alt={slide.alt}
                        loading="lazy"
                        useResponsive={true}
                      />
                    </CardImageWrapper>
                    <CardContent>
                      <h3>{slide.title}</h3>
                      <p>{slide.description}</p>
                    </CardContent>
                  </CarouselCard>
                ))}
              </CarouselTrack>

              <CarouselIndicators>
                {carouselSlides.map((_, index) => (
                  <IndicatorDot
                    key={index}
                    $isActive={index === currentSlide}
                    onClick={() => goToSlide(index)}
                    aria-label={`Przejdź do slajdu ${index + 1}`}
                  />
                ))}
              </CarouselIndicators>

              <SwipeHint>Przesuń</SwipeHint>
            </CarouselContainer>
          </ImageCarousel>
        </ContentGrid>
      </ContentContainer>
    </LatoZRadiemWrapper>
  );
}
