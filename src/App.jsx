import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Watchlist from './pages/Watchlist';
import AppCollection from './pages/AppCollection';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/apps" element={<AppCollection />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
