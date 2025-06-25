import React, { useEffect, useState } from 'react'
import quotesList from '../data/quotes.json'

export default function Home() {
  const [quote, setQuote] = useState(null)
  const [favorites, setFavorites] = useState(() =>
    JSON.parse(localStorage.getItem('favorites')) || []
  )

  const getRandomQuote = () => {
    const random = quotesList[Math.floor(Math.random() * quotesList.length)]
    setQuote(random)
    console.log('Citação sorteada:', random) // debug
  }

  const addToFavorites = () => {
    if (!quote) return
    const newFavorite = {
      text: quote.text || quote.content,
      author: quote.author || 'Autor desconhecido'
    }
    const updated = [...favorites, newFavorite]
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="bg-white dark:bg-zinc-800 text-center text-zinc-900 dark:text-white p-8 rounded-2xl shadow-xl max-w-xl w-full transition">
        {quote ? (
          <>
            <p className="text-xl md:text-2xl font-medium mb-4">
              "{quote.text || quote.content}"
            </p>
            <p className="text-sm text-zinc-500 mb-6">
              – {quote.author || 'Autor desconhecido'}
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={getRandomQuote}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl shadow"
              >
                Nova Citação 🔁
              </button>
              <button
                onClick={addToFavorites}
                className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-xl shadow"
              >
                Favoritar 💖
              </button>
            </div>
          </>
        ) : (
          <p>Carregando citação...</p>
        )}
      </div>
    </div>
  )
}
