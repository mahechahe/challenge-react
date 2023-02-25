import { GlobalContext } from './useContext'
import { getUserRandom } from '../services/getUserRandom'
import { useState } from 'react'

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getUserContext = async () => {
    setLoading(true)
    const user = await getUserRandom()
    if (user) {
      setUser(user)
      setLoading(false)
    } else {
      setError('User not found')
    }
  }

  return (
    <GlobalContext.Provider value={{ data: user, user, getUserContext, loading, error }}>
      {children}
    </GlobalContext.Provider>
  )
}

// Design pattern used for the project: Pattern Provider
// The provider pattern is a design pattern used in the React library to handle the global state of an application. This pattern is used in combination with React's Context API to provide data to any component that needs it, without having to explicitly pass properties through multiple component levels.
