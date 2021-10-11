import { createContext, useContext } from 'react'

export type GlobalState = {
  totalPlayers: number
  setTotalPlayers: (players: number) => void
  players?: number[]
  error: string
  setError: (error: string) => void
}

export const MyGlobalContext = createContext<GlobalState>({
  totalPlayers: 10,
  setTotalPlayers: () => {},
  players: [],
  error: '',
  setError: () => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext)
