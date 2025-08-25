import React from 'react';
import { GlobalWrapper } from './config/GlobalWrapper';
import { Ui } from './ui/ui';
import PWAManager from './components/PWAManager';

export function App() {
    return (
        <>
            <GlobalWrapper />
            <PWAManager />
            <Ui />
        </>
    );
}