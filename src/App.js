import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Profile from './pages/Profile';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="Sgeulaiche" />} />
          <Route path="/projects" element={<Projects userName="Sgeulaiche" />} />
          <Route path="/projects/:name" element={<ProjectDetail userName="Sgeulaiche" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
