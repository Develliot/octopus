import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'src/theme';
import GlobalStyle from 'src/globalStyles';
import { Page } from 'src/components/Page';
import { BasketProvider } from 'src/contexts/BasketContext';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <ThemeProvider theme={theme}>
                {/* Octopus font-face */}
                <link
                    rel='stylesheet'
                    href='https://octopus.energy/static/consumer/fonts/738074/621DC664BE6660B48.css'
                ></link>
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
