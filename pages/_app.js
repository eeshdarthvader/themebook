import App from 'next/app'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from '../components/page-layout'
import {THEME} from './theme'

const theme = {
  PRIMARY:{
    LIGHT: '#0076b6',
  },
  FONT_SIZES: {
    EXTRA_LARGE: 40,
    LARGE: 30,
    MEDIUM: 26,
    NORMAL: 16,
    SMALL: 14,
    SMALLER: 12
  },
  MOBILE_FONT_SIZES:{
    EXTRA_LARGE: 36,
      LARGE: 20,
      MEDIUM: 18,
      NORMAL: 16,
      SMALL: 14,
      SMALLER: 12
  }
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={THEME}>
        <Layout ><Component {...pageProps}/></Layout>
      </ThemeProvider>
    )
  }
}