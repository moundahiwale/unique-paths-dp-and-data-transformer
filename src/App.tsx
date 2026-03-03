import { Route, Routes } from 'react-router-dom';
import UniquePaths from './components/UniquePaths/UniquePaths';
import DataTransformer from './components/DataTransformer/DataTransformer';
import Home from './components/Home';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/uniquePaths' element={<UniquePaths />} />
      <Route path='/dataTransformer' element={<DataTransformer />} />

      <Route
        path='*'
        element={<div className='page-not-found'>Page Not Found</div>}
      />
    </Routes>
  );
}

export default App;
