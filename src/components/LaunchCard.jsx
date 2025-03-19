import React from 'react'
import { formatDistanceToNow } from 'date-fns'
import { FaClock, FaLink } from 'react-icons/fa'

function LaunchCard({ launch }) {
  const timeUntilLaunch = formatDistanceToNow(new Date(launch.launchTime), { addSuffix: true })

  return (
    <div className="launch-card">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-xl font-semibold">{launch.name}</h2>
        <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
          {launch.network}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-gray-600">
          <FaClock />
          <span>{timeUntilLaunch}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-medium">Initial Price:</span>
          <span>{launch.initialPrice} USD</span>
        </div>
        
        {launch.website && (
          <a
            href={launch.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
          >
            <FaLink />
            <span>Website</span>
          </a>
        )}
      </div>
    </div>
  )
}

export default LaunchCard
