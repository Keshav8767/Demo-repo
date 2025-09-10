import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-3">College ERP System</h1>
      <p className="text-gray-600 mb-8">Admissions, Fees, Exams, Hostel, Library — unified.</p>
      <div className="flex items-center justify-center gap-3">
        <Link to="/login" className="px-4 py-2 rounded bg-gray-800 text-white">Login</Link>
        <Link to="/register" className="px-4 py-2 rounded border">Register</Link>
      </div>
    </div>
  )
}

