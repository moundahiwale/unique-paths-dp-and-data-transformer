import { NavLink } from 'react-router-dom';
import './Home.scss'

function Home() {
  return (
    <div className='home-page'>
      <h1>Programming Questions</h1>
      <nav className='nav-container'>
        <NavLink to={'/uniquePaths'}>Unique Paths</NavLink>
        <NavLink to={'/dataTransformer'}>Data Transformer</NavLink>
      </nav>
    </div>
  );
}

export default Home;
