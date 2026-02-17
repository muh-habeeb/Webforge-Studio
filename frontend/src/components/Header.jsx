
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">WebForge Studio</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Projects</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header