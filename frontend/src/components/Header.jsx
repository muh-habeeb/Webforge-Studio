import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-evenly">
      <h1 className="text-xl font-bold">WebForge Studio</h1>
      <nav>
        <ul className="flex space-x-4 mt-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/builder">Builder</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
