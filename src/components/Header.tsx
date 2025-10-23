const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4">
      <nav className="flex justify-between items-center">
        <div className="text-2xl font-bold">Ink Souls</div>
        <div>
          <a href="#" className="px-4 hover:text-pink-400">Accueil</a>
          <a href="#" className="px-4 hover:text-purple-400">Équipe</a>
          <a href="#" className="px-4 hover:text-indigo-400">Matchs</a>
        </div>
      </nav>
    </header>
  )
}

export default Header
