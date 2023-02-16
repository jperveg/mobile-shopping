import { createContext, useContext, useMemo, useReducer } from 'react'
import { useInitialAppState } from 'hooks'
import { rootReducer } from '../store'

// @ts-ignore
export const AppStateContext = createContext()

export const AppProvider = ({ children }) => {
  const initialState = useInitialAppState()
  const [state, dispatch] = useReducer(rootReducer, initialState)
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  return (
    <AppStateContext.Provider value={contextValue}>
      {children}
    </AppStateContext.Provider>
  )
}

export const useStateValue = () => useContext(AppStateContext)
