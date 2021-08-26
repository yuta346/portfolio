import './App.css';
import Experience from './components/Experience';
import Navbar from './components/Navbar';
import TopPage from './components/TopPage';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopPage/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
