import { useEffect } from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { queryParams } from '../helpers/helpers'
import { socialLogin } from '../services/ApiClient'

const SocialAuthCallback = () => {
  const { login } = useAuthContext()

  useEffect(() => {
    const { code } = queryParams()

    socialLogin(code)
      .then(user => {
        login(user)
      })
  }, [login])

  return null
}

export default SocialAuthCallback
