import { Navbar } from "./components/Navbar";
import { CountriesGrid } from "./components/CountriesGrid";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CountryDetails } from "./components/CountryDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
const queryclient = new QueryClient()
function App() {

  return (
    <QueryClientProvider client={queryclient}>

      <BrowserRouter>

        <div className="App h-screen bg-white dark:slate-800">
          <Navbar />
          <Routes>
            <Route path="/" element={<CountriesGrid />} />
            <Route path='/countryDetails/:countryCode' element={<CountryDetails />} />
          </Routes>
        </div >
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
