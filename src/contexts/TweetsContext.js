import React, { useState, createContext, useContext } from 'react'

const TweetsContext = createContext()

export const useTweetsContext = () => useContext(TweetsContext)

export const TweetsContextProvider = ({ children }) => {
  const [tweets, setTweets] = useState(null)

  const value = { tweets, setTweets }

  return (
    <TweetsContext.Provider value={value}>
      {children}
    </TweetsContext.Provider>
  )
}
