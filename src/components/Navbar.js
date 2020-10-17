import React from 'react'
import { useAuthContext } from '../contexts/AuthContext'
import { logout } from '../services/ApiClient'

const NavBar = () => {
  const authContext = useAuthContext()

  if (!authContext.user) {
    return null
  }

  const handleLogout = async () => {
    try {
      await logout()

      authContext.logout()
    } catch(err) {
      console.error(err)
    }
  }

  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <a className="navbar-brand" href="/">Navbar</a>

      <div className="d-flex align-items-center">
        <div className="mr-4">{authContext.user.name}</div>
        <button onClick={handleLogout} type="button" className="btn btn-small btn-danger">log out</button>
      </div>
    </nav>
  )
}

export default NavBar