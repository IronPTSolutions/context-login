import React from 'react'
import useFetchWithLoading from '../hooks/useFetchWithLoading'
import { getTweets } from '../services/ApiClient'

const Home = () => {
  const { data, loading } = useFetchWithLoading(getTweets)

  return <div className="Home">
    {loading ? 'Loading...' : data.map(tweet => (
      <div>{JSON.stringify(tweet)}</div>
    ))}
  </div>
}

export default Home
