import './App.css';
import { NewHomes, NavBar, MarketingFooter, HomeCardCollection } from './ui-components'
function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeCardCollection />
      <MarketingFooter />
    </div>
  );
}

export default App;