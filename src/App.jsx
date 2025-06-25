import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Settings from './pages/Settings'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen transition-colors">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  )
}
