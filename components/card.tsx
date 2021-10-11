import React from 'react'

const Card: React.FC<{}> = ({ children }) => {
  return (
    <div className="rounded overflow-hidden border shadow-lg p-4 py-10">{children}</div>
  )
}

export default Card
