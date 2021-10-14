import React, { useState } from 'react'
import { useGlobalContext } from '../context'
const Roller = () => {
  const [value, setValue] = useState(0)
  const { setError, setTotalPlayers } = useGlobalContext()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (value < 1 || value > 26 || Number.isNaN(value)) {
      setError('Total players should be a number between 1 and 26')
    } else {
      setTotalPlayers(value)
    }
  }
  return (
    <div className="mx-auto py-6 px-4">
      <form
        className="self-center flex pt-2 mx-auto text-gray-700 max-w-3xl"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-gray-400 border-r-0 rounded-l-md bg-white h-12 px-5 pr-16 w-full focus:outline-none"
          placeholder="Enter number of players"
          inputMode="numeric"
          onChange={(e) => {
            setTotalPlayers(0)
            setError('')
            setValue(+e.target.value)
          }}
        />
        <button
          type="submit"
          className="py-2 px-11 border-2 border-yellow-400 bg-yellow-400 rounded-r-md text-gray-900 font-semibold focus:outline-none"
        >
          Roll
        </button>
      </form>
    </div>
  )
}

export default Roller
