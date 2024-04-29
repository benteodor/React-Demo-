import {Link} from 'react-router-dom'

const Header = () => {
    return (
      <header>
        <h1>React Demo</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Landing page</Link>
          <Link to="/persons">Persons</Link>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
    </header>
     
    );
  };
  
  export default Header;