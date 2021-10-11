import { useState } from 'react'
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
      <Component {...pageProps} />
    </MyGlobalContext.Provider>
  )
}

export default MyApp
