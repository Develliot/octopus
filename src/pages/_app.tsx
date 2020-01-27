import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';
import GlobalStyle from 'src/globalStyles';
import { Page } from 'src/components/Page';
import { BasketProvider } from 'src/contexts/BasketContext';

// TODO: include octopus fonts;

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                <BasketProvider>
                    <GlobalStyle />
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </BasketProvider>
            </ThemeProvider>
        );
    }
}
