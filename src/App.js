import { CountriesGrid } from "./components/CountriesGrid";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CountryDetails } from "./components/CountryDetails";
import { QueryClient, QueryClientProvider } from "react-query";
const queryclient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryclient}>

      <BrowserRouter>

        <div className="App  dark:slate-800">
          <Routes>
            <Route path="/" element={<CountriesGrid />} />
            {/* <Route path='/countryDetails/:countryCode' element={<CountryDetails />} /> */}
          </Routes>
        </div >
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
