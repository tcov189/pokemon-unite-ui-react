import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Layout/Header'
import Footer from './Layout/Footer'
import PokemonList from './Pages/PokemonList';

function App() {
  return (
    <div className="bg-gray-500 min-h-screen flex flex-col justify-between antialiased">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <PokemonList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
