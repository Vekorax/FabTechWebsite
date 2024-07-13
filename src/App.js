import Navigationbar from './components/Navigationbar';
import HomePage from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import SpecificBuild from './pages/specific/SpecificBuild';
import SpecificReview from './pages/specific/SpecificReview';
import './App.css';
import './services.css';
import Error404 from './_misc/pages/Error404';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import BuildsPage from './pages/BuildsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactMe from './pages/ContactMe';

function App() {
  const route = <>
    <Navigationbar/>
        <Routes>
          <Route path='' element={<HomePage/>}/>
          <Route path='review/:id' element={<SpecificReview/>}/>
          <Route path='build/:id' element={<SpecificBuild/>}/>
          <Route path='builds' element={<BuildsPage/>}/>
          <Route path='reviews' element={<ReviewsPage/>}/>
          <Route path='services' element={<ServicesPage/>}/>
          <Route path='contactme' element={<ContactMe/>}/>
          <Route path='*' element={<Error404 />}/>
        </Routes>
    <Footer/>
</>;
  return (
      <div className="App">
        {route}
        
      </div>
  );
}

export default App;
