import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import '@styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

        <meta
          name="description"
          content="75% das empresas que investiram no design das suas embalagens registraram aumento de vendas"
        />
        <meta
          name="keywords"
          content="branding, embalagem, design de embalagem, venda, marketing"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="Venda mais com Design de Embalagem"
          key="twcard"
        />
        <meta
          name="twitter:creator"
          content="75% das empresas que investiram no design das suas embalagens registraram aumento de vendas"
          key="twhandle"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Venda mais com Design de Embalagem"
        />
        <meta
          property="twitter:description"
          content="75% das empresas que investiram no design das suas embalagens registraram aumento de vendas"
        />

        {/* Open Graph */}
        <meta
          property="og:site_name"
          content="Estúdio La.Bomba Platform"
          key="ogsitename"
        />
        <meta
          property="og:title"
          content="Venda mais com Design de Embalagem"
          key="ogtitle"
        />
        <meta
          property="og:description"
          content="75% das empresas que investiram no design das suas embalagens registraram aumento de vendas"
          key="ogdesc"
        />

        <title>Venda mais com Design de Embalagem | Estúdio La.Bomba</title>
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />

        <ToastContainer position="bottom-center" />
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default MyApp
