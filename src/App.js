import { Navbar } from "./components/Navbar";
import { Searchbar } from "./components/Searchbar";
import { CountriesGrid } from "./components/CountriesGrid";
import { Route, Routes } from 'react-router-dom'
import { CountryDetails } from "./components/CountryDetails";
function App() {

  return (
    <div className="App h-screen bg-white dark:slate-800">
      <Navbar />
      <Searchbar />
      <Routes>
        <Route path="/" element={<CountriesGrid />} />
        <Route path='/countryDetails/:countryCode' element={<CountryDetails />} />
      </Routes>
    </div >
  );
}

export default App;
