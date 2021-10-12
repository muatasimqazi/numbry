import { useState, useEffect } from 'react'
import moment from 'moment' // <-- new

type Check = {
  isIOS?: boolean
  isSafari?: boolean
  prompt?: boolean
}
const checkForIOS = (): Check => {
//   if (navigator?.standalone) {
//     return false
//   }
  const today = moment().toDate()
  const lastPrompt = moment(localStorage.getItem('installPrompt'))
  const days = moment(today).diff(lastPrompt, 'days')
  const ua = window.navigator.userAgent
  const webkit = !!ua.match(/WebKit/i)
  const isIPad = !!ua.match(/iPad/i)
  const isIPhone = !!ua.match(/iPhone/i)
  const isIOS = isIPad || isIPhone
  const isSafari = isIOS && webkit && !ua.match(/CriOS/i)

  const prompt = (isNaN(days) || days > 30) && isIOS && isSafari

  if (prompt && 'localStorage' in window) {
    localStorage.setItem('installPrompt', `${today}`)
  }

  return { isIOS, isSafari, prompt }
}

const useIsIOS = () => {
  const [isIOS, setIsIOS] = useState<Check>({})

  useEffect(() => {
    setIsIOS(checkForIOS())
    return () => console.log('CLEANUP INSTALL PROMPT', isIOS)
  }, [])

  return isIOS
}

export default useIsIOS;
