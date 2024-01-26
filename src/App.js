import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <>
      <div className='banner'>
        <h1>Jammming</h1>
      </div>
      <div className='double-column'>
        <div className='search-container'>
          <SearchBar />
          <SearchResults />
        </div>
        <Playlist />
      </div>
    </>
  );
}

export default App;
