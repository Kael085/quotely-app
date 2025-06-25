import React, { useState, useEffect } from 'react'

export default function Favorites() {
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem('favorites')
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      console.error('Erro ao carregar favoritos:', e)
      return []
    }
  })

  // Função para remover dos favoritos
  const removeFromFavorites = (indexToRemove) => {
    const updated = favorites.filter((_, index) => index !== indexToRemove)
    setFavorites(updated)
    localStorage.setItem('favorites', JSON.stringify(updated))
  }

  useEffect(() => {
    console.log(favorites)  // Verifique se o array 'favorites' está sendo carregado corretamente
  }, [favorites])

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-start p-6">
      <h1 className="text-3xl font-bold mb-6 text-zinc-800 dark:text-white">Citações Favoritas 💖</h1>

      {favorites.length === 0 ? (
        <p className="text-lg text-center text-zinc-500 dark:text-zinc-400">
          Nenhuma citação adicionada ainda.
        </p>
      ) : (
        <ul className="space-y-4 w-full max-w-xl">
          {favorites.map((quote, index) => (
            <li
              key={index}
              className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-md flex justify-between items-start gap-4"
            >
              <div className="flex-1">
                <p className="text-lg text-zinc-800 dark:text-white">
  "{quote.text || 'Sem conteúdo'}"
</p>

                <p className="text-sm text-right mt-2 text-zinc-500">
                  – {quote.author || 'Autor desconhecido'} {/* Exibe o autor corretamente */}
                </p>
              </div>
              <button
                onClick={() => removeFromFavorites(index)}
                className="text-red-600 hover:text-red-800 font-bold text-xl"
                title="Remover dos favoritos"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
