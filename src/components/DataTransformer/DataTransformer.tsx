import { useNavigate } from 'react-router-dom';
import './DataTransformer.scss'

function DataTransformer() {
  const navigate = useNavigate();

  return (
    <div className='data-transformer'>
      <button onClick={() => navigate('/')} className='back-button'>⬅️ Back to Home Page</button>
      <h2>Data Transformer</h2>
    </div>
  );
}

export default DataTransformer;
