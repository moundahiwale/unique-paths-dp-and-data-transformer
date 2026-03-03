import { useNavigate } from 'react-router-dom';
import './UniquePaths.scss'

function UniquePaths() {
    const navigate = useNavigate();

  return (
    <div className='unique-paths'>
      <button onClick={() => navigate('/')} className='back-button'>
        ⬅️ Back to Home Page
      </button>
      <h2>Unique Paths</h2>
    </div>
  );
}

export default UniquePaths;
