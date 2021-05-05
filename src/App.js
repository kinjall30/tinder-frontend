import './App.css';
import Header from './Header.js'
import SwipeButtons from './SwipeButtons.js';
import TinderCard from './TinderCard.js';


function App() {
  return (
    <div className="app">
    <h5>Made by: Kinjal Prajapati</h5>
        <Header />
        <TinderCard />
        <SwipeButtons />
    </div>
  );
}

export default App;
