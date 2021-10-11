import * as _ from 'lodash'
import classNames from 'classnames'
import { useGlobalContext } from '../context'
import { letters } from '../constants'
const Players = () => {
  const { totalPlayers } = useGlobalContext()
  const playersTurns = _.sortBy(
    _.map(
      _.shuffle(_.range(totalPlayers)),
      (player: number, index: number) => ({
        player: letters[player],
        turn: index + 1,
      })
    ),
    (item) => item.player
  )

  return (
    <table className="table-fixed w-full border shadow-lg">
      <thead>
        <tr>
          <th className="w-1/2 px-4 py-2">Player</th>
          <th className="w-auto px-4 py-2">Turn</th>
        </tr>
      </thead>
      <tbody>
        {playersTurns.map(({ player, turn }, index) => {
          const odd = index % 2 === 1
          return (
            <tr key={index}>
              <td
                className={classNames(
                  {
                    'bg-gray-100': odd,
                    'bg-white': !odd,
                  },
                  'border px-4 py-2'
                )}
              >
                {player}
              </td>

              <td
                className={classNames(
                  {
                    'bg-gray-100': odd,
                    'bg-white': !odd,
                  },
                  'border px-4 py-2'
                )}
              >
                {turn}
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Players
