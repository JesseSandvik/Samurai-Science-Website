import { NavLink } from 'react-router-dom';
import SamuraiLogo from "./images/samurai-logo.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/shop">shop</NavLink>
            </li>
            <li>
              <NavLink to="/about">about us</NavLink>
            </li>
            <li>
              <NavLink to="/store-locator">where to buy</NavLink>
            </li>
            <li>
            <img alt="Samurai Science Logo" src={SamuraiLogo} />
            </li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <NavLink to="/cart">cart</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
