import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function All_coutry_data({ data, name,region }) {
  let [newdata, setnewdata] = useState([]);
  useEffect(() => {
    setnewdata(data);
  });
  let [filteredData, setfiltdata] = useState([]);

  function regionalfilter(i) {
    if (i.region === region) {
      return i.region === region;
    }
  }

  useEffect(() => {
    if (region !== "obj") {
      let regionalData = newdata.filter(regionalfilter);
      filteredData = regionalData;
      setfiltdata(filteredData);
    } else if (region === "obj") {
      filteredData = data;
      setfiltdata(filteredData);
    }
  }, [region]);

  useEffect(() => {
    if (name.length !== 0) {
      filteredData = newdata.filter(searchFilter);
      function searchFilter(item) {
        if (name !== "") {
          return item.name.common.includes(`${name}`);
        }
      }
      setfiltdata(filteredData);
    } else {
      setfiltdata(data);
    }
  }, [name]);
  return (
    <>
      {
        filteredData.length!==0?
        
      filteredData.map((item,i) => {
        let countryName = item.name.common;
        let countryFlag = item.flags.svg;
        let population = item.population.toLocaleString();
        let Region = item.region;
        let capital = item.capital;
        let countryCode = item.cca3;
        return (
          <>
          <div key={i}>

            <Link to={`/CountryDetails/${countryCode}`}>
              <div className="bg-white shadow-xl mb-10 w-5/5 h-80 hover:scale-105 duration-200" >
                <img src={countryFlag} alt="" className="w-full h-48" />
                <div className="pl-5 pr-5 pb-8">
                  <h1 className="font-bold">{countryName}</h1>
                  <h3 className="font-semibold">
                    population :{" "}
                    <span className="font-light text-base">{population}</span>
                  </h3>
                  <h3 className="font-semibold">
                    Region :{" "}
                    <span className="font-light text-base">{Region}</span>
                  </h3>
                  <h3 className="font-semibold">
                    Capital :{" "}
                    <span className="font-light text-base">{capital}</span>
                  </h3>
                </div>
              </div>
            </Link>
          </div>
          </>
        );
      })
      :(<>
      <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"  stroke="currentColor" className="w-6 h-6">
  <path  d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
</svg>
country not found
      </div>
      </>)
    }
    </>
  );
}

export { All_coutry_data };
