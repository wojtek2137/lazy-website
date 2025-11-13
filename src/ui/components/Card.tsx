import React, { useState } from "react";
import {
  CardContainer,
  CardContentWrapper,
  CardHeader,
  CardWrapper,
  Img,
  ImgBox,
  ListenSpan,
  StreamingList,
  StreamingTag,
  StreamingTagWrapper,
} from "./Card.style";

interface PropsType {
  name: string;
  coverSrc: string;
  tags: Array<{
    src: string;
    imageUrl: string;
  }>;
}

export function Card(props: PropsType) {
  const { name, coverSrc, tags } = props;
  const [isHover, setIsHover] = useState<boolean>(false);

  function insertBreak(name: string, afterWordNumber: number): JSX.Element[] {
    const arr = name.split(" ");
    let firstPart = arr.slice(0, afterWordNumber).join(" ");
    let secondPart = arr.slice(afterWordNumber).join(" ");
    return [
      <span key="1">{firstPart}</span>,
      <br key="2" />,
      <span key="3">{secondPart}</span>,
    ];
  }
  return (
    <article
      aria-labelledby={`album-${name.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <CardContainer>
        <CardWrapper
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <figure>
            <ImgBox isHover={isHover}>
              <Img
                src={coverSrc}
                isHover={isHover}
                alt={`Okładka albumu ${name} zespołu Lazy Swing Band`}
              />
            </ImgBox>
            <figcaption className="sr-only">Okładka albumu {name}</figcaption>
          </figure>

          <CardContentWrapper>
            <header>
              <h3 id={`album-${name.replace(/\s+/g, "-").toLowerCase()}`}>
                <CardHeader>{insertBreak(name, 2)}</CardHeader>
              </h3>
              <p>
                <ListenSpan>listen album: </ListenSpan>
              </p>
            </header>

            <nav aria-label={`Platformy do słuchania albumu ${name}`}>
              <StreamingList role="list">
                {tags.map((tag, index) => {
                  const platformName = new URL(tag.src).hostname.includes(
                    "spotify"
                  )
                    ? "Spotify"
                    : new URL(tag.src).hostname.includes("tidal")
                      ? "Tidal"
                      : new URL(tag.src).hostname.includes("youtube")
                        ? "YouTube Music"
                        : new URL(tag.src).hostname.includes("apple")
                          ? "Apple Music"
                          : "Platforma muzyczna";

                  return (
                    <StreamingTagWrapper key={index} role="listitem">
                      <a
                        href={tag.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Słuchaj ${name} na ${platformName}`}
                      >
                        <StreamingTag
                          src={tag.imageUrl}
                          alt={`Logo ${platformName}`}
                        />
                      </a>
                    </StreamingTagWrapper>
                  );
                })}
              </StreamingList>
            </nav>
          </CardContentWrapper>
        </CardWrapper>
      </CardContainer>
    </article>
  );
}
