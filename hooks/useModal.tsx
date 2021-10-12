import { useState, useEffect } from 'react'
const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => setModalOpen(!modalOpen)

  return {modalOpen, setModalOpen, toggleModal}
}

export default useModal;
