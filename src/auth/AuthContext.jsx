import React, { createContext, useContext, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext(null)

const roleToDashboardPath = {
  Student: '/dashboard/student',
  Admin: '/dashboard/admin',
  'Super Admin': '/dashboard/admin',
  Faculty: '/dashboard/student',
  Finance: '/dashboard/admin',
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (role, name) => {
    const nextUser = { role, name: name || role }
    setUser(nextUser)
    const target = roleToDashboardPath[role] || '/'
    navigate(target, { replace: true })
  }

  const logout = () => {
    setUser(null)
    navigate('/', { replace: true })
  }

  const value = useMemo(() => ({ user, login, logout }), [user])
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

