import logo from './logo.svg';
import './App.css';
import MoviePage from './pages/MoviePage';
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<MoviePage/>}/>
  
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
