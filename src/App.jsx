import React from 'react'
import LaunchTracker from './components/LaunchTracker'
import Header from './components/Header'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <LaunchTracker />
      </main>
    </div>
  )
}

export default App
