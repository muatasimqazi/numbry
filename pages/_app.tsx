import { useState } from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { MyGlobalContext } from '../context'
import '../styles/base.css'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [totalPlayers, setTotalPlayers] = useState(0)
  const [error, setError] = useState('')
  return (
    <MyGlobalContext.Provider
      value={{ totalPlayers, setTotalPlayers, error, setError }}
    >
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="Assign cricket numbers" />
          <meta name="keywords" content="Keywords" />
          <title>Cricket Numbry</title>

          <link rel="manifest" href="/manifest.json" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          
          <meta name="theme-color" content="#317EFB" />
        </Head>
        <Component {...pageProps} />
      </>
    </MyGlobalContext.Provider>
  )
}

export default MyApp
