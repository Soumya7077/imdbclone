
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/header/header';
import MovieList from './components/movielist/movielist';
import { Home } from './pages/home/home';
import MovieDetails from './pages/movie details/moviedetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='movie/:id' element={<MovieDetails />}></Route>
          <Route path='movies/:type' element={<MovieList />}></Route>
          <Route path='/*' element={<h1>Error Page</h1>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
