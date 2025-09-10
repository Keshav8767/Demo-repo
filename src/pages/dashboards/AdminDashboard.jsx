import React from 'react'

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Manage Admissions">
          <p className="text-gray-600 mb-3">Review and approve student applications.</p>
          <button className="px-3 py-1.5 rounded bg-gray-800 text-white text-sm">Open Admissions</button>
        </Card>
        <Card title="Track Fees">
          <p className="text-gray-600 mb-3">Monitor payments and dues.</p>
          <button className="px-3 py-1.5 rounded bg-green-600 text-white text-sm">Open Finance</button>
        </Card>
        <Card title="Generate Reports">
          <p className="text-gray-600 mb-3">Create admission and fee reports.</p>
          <button className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">Generate</button>
        </Card>
      </div>
    </div>
  )
}

