import Header from './Layout/Header'
import Footer from './Layout/Footer'
import PokemonList from './Pages/PokemonList';

function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-between antialiased">
      <Header />
      <PokemonList />
      <Footer />
    </div>
  );
}

export default App;
