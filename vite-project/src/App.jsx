import './App.css';
import { Home } from './components/Home/Home';
import { Nav } from './components/Nav/Nav';
import { Portfolio } from './components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Portfolio/>
    </div>
  )
}

export default App
