import Navigationbar from './components/Navigationbar';
import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import SpecificBuild from './pages/SpecificBuild';
import SpecificReview from './pages/SpecificReview';
import './App.css';

function App() {
  const route = <>
    <Navigationbar/>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='builds/:id' element={<SpecificBuild/>}/>
          <Route path='review/:id' element={<SpecificReview/>}/>
        </Routes>
</>;
  return (
    <div className="App">
      {route}
      
    </div>
  );
}

export default App;
