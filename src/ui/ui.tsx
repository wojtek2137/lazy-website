import styled from '@emotion/styled';
import React from 'react';
// import { ListenUsView } from './pages/ListenUsView/ListenUsView';
import { MainView } from './pages/MainView/MainView';
import About from 'src/assets/images/about.jpg';
import Another from 'src/assets/images/Another.jpg';

export const Wrapper = styled('section')`
    display:flex;
    height: 100vh;
    width: 100%;
    background: url('${About}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: right;
  `;
export const Wrapper2 = styled('section')`
    display:flex;
    height: 100vh;
    width: 100%;
    background: url('${Another}');
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: right;
  `;

export function Ui() {
    return (
        <>
            <MainView />
            {/* <Wrapper />
            <ListenUsView />
            <Wrapper2 /> */}
        </>
    );
};
