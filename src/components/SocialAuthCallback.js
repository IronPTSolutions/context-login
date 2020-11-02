import React, { useEffect } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { getProfile } from '../services/ApiClient'

const SocialAuthCallback = () => {
  const { login } = useAuthContext()

  useEffect(() => {
    getProfile()
      .then(user => {
        login(user)
      })
  }, [login])

  return null
}

export default SocialAuthCallback