import React, { useState } from 'react';
import { CardContainer, CardContentWrapper, CardHeader, CardWrapper, Img, ImgBox, ListenSpan, StreamingList, StreamingTag, StreamingTagWrapper } from './Card.style';

interface PropsType {
    coverSrc: string,
    tagSrc: string
}

export function Card(props: PropsType) {
    const { coverSrc, tagSrc } = props;
    const [isHover, setIsHover] = useState<boolean>(false);

    return (
        <CardContainer>
            <CardWrapper
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
            >
                <ImgBox isHover={isHover}>
                    <Img src={coverSrc} isHover={isHover} />
                </ImgBox>
                <CardContentWrapper>
                    <CardHeader>

                        Lazy Swingers <br /> Band
                        <ListenSpan>listen album: </ListenSpan>

                    </CardHeader>


                    <StreamingList>

                        <StreamingTagWrapper>
                            <a href="https://music.apple.com/pl/album/lazy-swingers-band/1507094483">
                                <StreamingTag src={tagSrc} />
                            </a>
                        </StreamingTagWrapper>
                        <StreamingTagWrapper>
                            <a href="https://music.apple.com/pl/album/lazy-swingers-band/1507094483">
                                <StreamingTag src={tagSrc} />
                            </a>
                        </StreamingTagWrapper>
                        <StreamingTagWrapper>
                            <a href="https://music.apple.com/pl/album/lazy-swingers-band/1507094483">
                                <StreamingTag src={tagSrc} />
                            </a>
                        </StreamingTagWrapper>
                        <StreamingTagWrapper>
                            <a href="https://music.apple.com/pl/album/lazy-swingers-band/1507094483">
                                <StreamingTag src={tagSrc} />
                            </a>
                        </StreamingTagWrapper>
                    </StreamingList>

                </CardContentWrapper>
            </CardWrapper>
        </CardContainer >
    );
};
