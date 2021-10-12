import {
  CallToAction,
  Navbar,
  Players,
  Roller,
  Error,
  InstallPWA,
} from '../components'
import { useGlobalContext } from '../context'
import { useIsIOS } from '../hooks'

const Homepage = () => {
  const { error, totalPlayers } = useGlobalContext()
  const { prompt } = useIsIOS();
  return (
    <div>
      {prompt && <InstallPWA />}
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
