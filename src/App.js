import Header from './Layout/Header'
import Content from './Layout/Content'
import Footer from './Layout/Footer'

function App() {
  return (
    <div className="bg-gray-300 min-h-screen flex flex-col justify-between antialiased">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
