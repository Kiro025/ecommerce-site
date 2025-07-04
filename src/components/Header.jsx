import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem', backgroundColor: '#222', color: 'white' }}>
      <h1>SwiftFit</h1>
      <nav>
        <Link to="/" style={{ marginRight: '1rem', color: 'white' }}>Home</Link>
        <Link to="/cart" style={{ color: 'white' }}>Cart</Link>
      </nav>
    </header>
  );
};

export default Header;
