import React from 'react'
import { Redirect, useParams } from 'react-router-dom'
import { useTweetsContext } from '../contexts/TweetsContext'

const TweetDetail = () => {
  const { id } = useParams()
  const { tweets } = useTweetsContext()

  const tweet = tweets?.find(t => t.id === id)

  return tweet ? <div>{JSON.stringify(tweet)}</div> : <Redirect to="/"/>
}

export default TweetDetail