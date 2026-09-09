import './App.css';
import Header from './components/Header/Header';
import Introduction from './components/Introduction/Introduction';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        <Introduction />
      </main>
    </div>
  );
}

export default App;
