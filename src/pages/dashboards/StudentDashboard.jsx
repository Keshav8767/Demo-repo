import React from 'react'

function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-5">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  )
}

export default function StudentDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Student Dashboard</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Admission Form">
          <p className="text-gray-600 mb-3">Fill and submit your admission details.</p>
          <button className="px-3 py-1.5 rounded bg-gray-800 text-white text-sm">Open Form</button>
        </Card>
        <Card title="Fee Payment + Receipt">
          <p className="text-gray-600 mb-3">Pay semester fees and download receipt.</p>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 rounded bg-green-600 text-white text-sm">Pay Now</button>
            <button className="px-3 py-1.5 rounded border text-sm">Download Receipt</button>
          </div>
        </Card>
        <Card title="Exam Results">
          <p className="text-gray-600 mb-3">View your latest exam results.</p>
          <button className="px-3 py-1.5 rounded bg-blue-600 text-white text-sm">View Results</button>
        </Card>
      </div>
    </div>
  )
}

