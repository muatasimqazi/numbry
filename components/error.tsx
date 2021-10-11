import { useGlobalContext } from '../context'
import { Card } from '.'
const Error = () => {
  const { error } = useGlobalContext()
  return (
    <Card>
      <div className="text-red-500">{error}</div>
    </Card>
  )
}

export default Error
