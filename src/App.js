
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import SingleMovie from './components/SingleMovie';
import Header from './components/Header';
import Movie from './components/Movie';


function App() {
  return (
    <BrowserRouter>
    <main>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<SingleMovie />}/>
        <Route path='movie' element={<Movie />}/>
        <Route path='*' element={<Error />}/>
      </Routes>
    </main>
    </BrowserRouter>
    
  );
}

export default App;
