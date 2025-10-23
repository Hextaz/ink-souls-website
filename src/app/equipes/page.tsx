import { supabase } from '@/lib/supabaseClient'

export const revalidate = 60 // Revalidate data every 60 seconds

async function getTeams() {
  const { data: equipes, error } = await supabase.from('Equipes').select('nom')

  if (error) {
    console.error('Error fetching teams:', error)
    return []
  }

  return equipes
}

export default async function EquipesPage() {
  const equipes = await getTeams()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-purple-400">
        Nos Équipes
      </h1>
      {equipes && equipes.length > 0 ? (
        <ul className="bg-gray-800/50 rounded-lg shadow-lg p-6 max-w-md mx-auto">
          {equipes.map((equipe) => (
            <li
              key={equipe.nom}
              className="text-lg text-white border-b border-gray-700 py-3 last:border-b-0 transition-colors hover:bg-purple-900/20 px-2"
            >
              {equipe.nom}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-400 mt-8">
          Aucune équipe trouvée pour le moment.
        </p>
      )}
    </main>
  )
}
