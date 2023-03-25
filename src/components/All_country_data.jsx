import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStore from "../store";

function All_coutry_data({ data, name, region, theme, setTheme }) {
  const newtheme = useStore((state) => state.theme);

  let [newdata, setnewdata] = useState([]);
  useEffect(() => {
    setnewdata(data);
  }, [data]);
  let [filteredData, setfiltdata] = useState([]);

  useEffect(() => {
    function regionalfilter(i) {
      if (i.region === region) {
        return i.region === region;
      }
    }
    if (region !== "obj") {
      let regionalData = newdata.filter(regionalfilter);
      setfiltdata(regionalData);
    } else if (region === "obj") {
      setfiltdata(data);
    }
  }, [region, data, newdata]);

  useEffect(() => {
    if (name.length !== 0) {
      let filteredData = newdata.filter(searchFilter);
      function searchFilter(item) {
        if (name !== "") {
          return item.name.common.includes(`${name}`);
        }
      }
      setfiltdata(filteredData);
    } else {
      setfiltdata(data);
    }
  }, [name, data, newdata]);
  return (
    <>
      {filteredData.length !== 0 ? (
        filteredData.map((item, i) => {
          let countryName = item.name.common;
          let countryFlag = item.flags.svg;
          let population = item.population.toLocaleString();
          let Region = item.region;
          let capital = item.capital;
          let countryCode = item.cca3;
          return (
            <div key={i}>
              <Link to={`/CountryDetails/${countryCode}`}>
                <div
                  className={`${
                    newtheme ? "bg-[#1f2d36] text-white" : "bg-white text-black"
                  }  shadow-xl mb-10 w-5/5 h-80 hover:scale-105 duration-200`}
                  key={i}
                >
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
          );
        })
      ) : (
        <>
          <div className="">
            Not Found
            <img src="/404.png" alt="loading.." width={300} height={300} />
          </div>
        </>
      )}
    </>
  );
}

export { All_coutry_data };
