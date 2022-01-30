import './App.css';

import NavBar from './components/NavBar';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
     <NavBar className="navbar"/>
     <Content className="content"/>
    </div>
  );
}

export default App;
