import React, { useState } from 'react'
import { useAuth } from '../auth/AuthContext.jsx'

export default function Register() {
  const { login } = useAuth()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login('Student', name || 'Student')
  }

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input value={name} onChange={(e)=>setName(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="Jane Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="jane@example.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full border rounded px-3 py-2" placeholder="••••••••" />
        </div>
        <button type="submit" className="w-full bg-gray-800 text-white rounded py-2">Create account</button>
      </form>
    </div>
  )
}

