import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTweetsContext } from '../contexts/TweetsContext'
import useFetchWithLoading from '../hooks/useFetchWithLoading'
import { getTweets } from '../services/ApiClient'

const Home = () => {
  const { data, loading } = useFetchWithLoading(getTweets)
  const { tweets, setTweets } = useTweetsContext()

  useEffect(() => {
    data && setTweets(data)
  }, [data, setTweets])

  return <div className="Home">
    {loading ? 'Loading...' : data.map(tweet => (
      <div>
        <Link to={`/tweets/${tweet.id}`}>Go to tweet</Link>
      </div>
    ))}
  </div>
}

export default Home
