import React, { useState, useEffect } from 'react'
import LaunchCard from './LaunchCard'
import { fetchLaunches } from '../services/api'

function LaunchTracker() {
  const [launches, setLaunches] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadLaunches = async () => {
      try {
        const data = await fetchLaunches()
        setLaunches(data)
        setLoading(false)
      } catch (err) {
        setError('Failed to load launches')
        setLoading(false)
      }
    }

    loadLaunches()
    const interval = setInterval(loadLaunches, 30000) // Refresh every 30 seconds

    return () => clearInterval(interval)
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
  )
}

export default LaunchTracker
