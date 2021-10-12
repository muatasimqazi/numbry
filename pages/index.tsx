import { CallToAction, Navbar, Players, Roller, Error } from '../components'
import { useGlobalContext } from '../context'

const Homepage = () => {
  const { error, totalPlayers } = useGlobalContext()
  return (
    <div>
      <Navbar />
      <main className="min-h-screen mb-auto container mx-auto text-center">
        <CallToAction />
        <Roller />
        {error ? <Error /> : totalPlayers > 0 && <Players />}
      </main>
    </div>
  )
}

export default Homepage
