import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";
import { CountriesGrid } from "./components/CountriesGrid";
function App() {

  return (
    <div className="App h-screen bg-white dark:slate-800">
      <Navbar />
      <Searchbar />
      <CountriesGrid />
    </div>
  );
}

export default App;
