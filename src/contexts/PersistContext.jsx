import config from '../config'
import { createContext, useContext, useEffect, useState } from 'react'
import { AppStateContext } from './AppContext'

// @ts-ignore
export const PersistContext = createContext()

export const PersistProvider = ({ children }) => {
  const { state } = useContext(AppStateContext)
  const [persistedData, setPersistedData] = useState()
  useEffect(() => {
    localStorage.setItem(config.ROOT_PERSIST, JSON.stringify(state))
    setPersistedData(JSON.parse(localStorage.getItem(config.ROOT_PERSIST)))
  }, [state])

  return (
    <PersistContext.Provider value={persistedData}>
      {children}
    </PersistContext.Provider>
  )
}
