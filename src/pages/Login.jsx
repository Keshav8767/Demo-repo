import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'

const roles = ['Student', 'Faculty', 'Admin', 'Finance', 'Super Admin']

export default function Login() {
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [role, setRole] = useState('Student')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(role, name || role)
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Role</label>
          <select value={role} onChange={(e)=>setRole(e.target.value)} className="w-full border rounded px-3 py-2">
            {roles.map(r => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <button type="submit" className="w-full bg-gray-800 text-white rounded py-2">Login</button>
      </form>
    </div>
  )
}

