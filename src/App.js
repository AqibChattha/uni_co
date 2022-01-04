import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import Contant from './components/Contant';

function App() {
  return (
    <div className="App">
    <Navbar />
      <SideMenu />
    </div>
  );
}

export default App;
