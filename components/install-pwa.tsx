// import './PWA.css'
import { useEffect } from 'react'
import ShareIcon from '../assets/ios-share.svg'
// import share from '../../images/AppleShare.png'
import Banner from './banner'
import { useModal } from '../hooks'

const InstallPWA = ({ ...props }) => {
  const { modalOpen, setModalOpen, toggleModal } = useModal()

  useEffect(() => {
    setModalOpen(true)
  }, [])

  return (
    <Banner isActive={modalOpen}>
      <div>
        <div className="text-center font-bold">
          <h3>Install Numbry!</h3>
        </div>
        <div className="text-gray-500">
          <div className="flex font-grayscale text-center">
            <div>
              Install this application on your homescreen for a better
              experience. Tap
            </div>
            <div className="text-blue-600">
              <ShareIcon />
            </div>
            <div>then &quot;Add to Home Screen&quot;</div>

            <button
              className="justify-self justify-end p-2 px-3 text-black font-semibold focus:outline-none ml-auto"
              onClick={() => setModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Banner>
  )
}

export default InstallPWA
