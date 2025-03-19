import React from 'react'
import { FaRocket } from 'react-icons/fa'

function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2">
          <FaRocket className="text-2xl text-indigo-600" />
          <h1 className="text-xl font-bold text-gray-900">Pump.fun Launch Tracker</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
