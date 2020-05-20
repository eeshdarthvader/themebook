import App from 'next/app';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/page-layout';
import { THEME } from './theme';

export default class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <ThemeProvider theme={THEME}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        );
    }
}
