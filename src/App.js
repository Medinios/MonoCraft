import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="calculator"><Calculator/></div>
      <div className="footer"><Footer/></div>
    </div>
  );
}

export default App;
