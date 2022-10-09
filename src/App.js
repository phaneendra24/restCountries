import { CountriesGrid } from "./components/CountriesGrid";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CountryDetails } from "./components/CountryDetails";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
const queryclient = new QueryClient()
function App() {
  const [theme,setTheme] = useState(true)
  return (
    <QueryClientProvider client={queryclient}>

      <BrowserRouter>
 
        <div className={`App dark:bg-gray-800 flex flex-col justify-center items-center dark:text-white ${theme?'bg-dark':'white'}`}>
          <Routes>
            <Route path="/" element={<CountriesGrid theme={theme} setTheme={setTheme}/>} />
            <Route path='/countryDetails/:countryCode' element={<CountryDetails/>} />
          </Routes>
        </div >
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
