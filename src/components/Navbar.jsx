import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-zinc-800 p-4 shadow-md flex justify-center gap-6 text-lg font-semibold">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-700 dark:text-white'}>
        Home
      </NavLink>
      <NavLink to="/favorites" className={({ isActive }) => isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-700 dark:text-white'}>
        Favorites
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => isActive ? 'text-blue-600 dark:text-blue-400' : 'text-zinc-700 dark:text-white'}>
        Settings
      </NavLink>
    </nav>
  )
}
