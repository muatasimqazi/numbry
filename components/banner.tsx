import React from 'react'

interface Props {
  isActive: boolean
  children: React.ReactChild
}
const Banner = ({ isActive, children }: Props) => {
  return <div className="drop-shadow-xl border mt-0 bg-blue-200 p-2">{isActive && children}</div>
}

export default Banner
