import React, { useState } from 'react';
import { CardContainer, CardContentWrapper, CardHeader, CardWrapper, Img, ImgBox, ListenSpan, StreamingList, StreamingTag, StreamingTagWrapper } from './Card.style';

interface PropsType {
    name: string,
    coverSrc: string,
    tags: Array<{
        src: string,
        imageUrl: string
    }>
}

export function Card(props: PropsType) {
    const { name, coverSrc, tags } = props;
    const [isHover, setIsHover] = useState<boolean>(false);

    function insertBreak(name: string, afterWordNumber: number): JSX.Element[] {
        const arr = name.split(' ');
        let firstPart = arr.slice(0, afterWordNumber).join(' ');
        let secondPart = arr.slice(afterWordNumber).join(' ');
        return [<span key="1">{firstPart}</span>, <br key="2" />, <span key="3">{secondPart}</span>];
    }
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

                        {insertBreak(name, 2)}
                        <ListenSpan>listen album: </ListenSpan>

                    </CardHeader>


                    <StreamingList>
                        {tags.map(tag => {
                            return <StreamingTagWrapper>
                                <a href={tag.src}>
                                    <StreamingTag src={tag.imageUrl} />
                                </a>
                            </StreamingTagWrapper>
                        })}
                    </StreamingList>

                </CardContentWrapper>
            </CardWrapper>
        </CardContainer >
    );
};
