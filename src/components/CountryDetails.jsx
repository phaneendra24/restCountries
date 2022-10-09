import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

async function fetch_data(countryCode) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${countryCode}/`
  );
  const data = await response.json();
  return data;
}

function CountryDetails() {
  let [country, setcountry] = useState([]);

  const countryCode = useParams().countryCode;
  useEffect(() => {
    fetch_data(countryCode).then((res) => {
      setcountry(res);
    });
  }, [countryCode]);

  return (
    <>
      <div className="lg:flex lg:flex-col items-center h-screen ">
        <Navbar />

        <div className=" h-2/3 w-full flex items-center justify-evenly ">
          {country.map((item, i) => {
            let countryName = item.name.common;
            let countryFlag = item.flags.svg;
            let population = item.population.toLocaleString();
            let Region = item.region;
            let subregion = item.subregion;
            let capital = item.capital;
            let borders = item.borders;
            return (
              <div
                className=" mb-10 w-6/6 h-2/3 flex flex-col lg:justify-between  lg:mx-12 mx-6"
                key={item.cca3}
              >
                <Link to="/">
                  <div className="h-12 w-24 flex justify-evenly items-center rounded-lg shadow-md border-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z"
                      />
                    </svg>
                    back
                  </div>
                </Link>

                <div className=" lg:flex lg:justify-evenly p-2">
                  <img src={countryFlag} alt="" className="lg:w-3/12 sm:w-4/6" />
                <div className=" flex flex-col justify-around my-8">
                    <div className=" font-bold text-xl ">
                    <h1 className="font-bold">{countryName}</h1>
                    </div>

                    <div className="">
                    <h3 className="font-semibold">
                      population :{" "}
                      <span className="font-light text-base">{population}</span>
                    </h3>
                    <h3 className="font-semibold">
                      Region :{" "}
                      <span className="font-light text-base">{Region}</span>
                    </h3>
                    <h3 className="font-semibold">
                      Sub region :{" "}
                      <span className="font-light text-base">{subregion}</span>
                    </h3>
                    <h3 className="font-semibold">
                      Capital :{" "}
                      <span className="font-light text-base">{capital}</span>
                    </h3>
                    </div>

                    <div className="">
                    <h4 className="font-semibold flex   ">
                      Border countires :{" "}
                      <span className="font-light text-base">
                        <div className="lg:flex">
                          {borders ? (
                            borders.map((item, i) => {
                              return (
                                <div key={i} className="">
                                  <h3 className="w-20 h-8 shadow-xl flex justify-center">
                                    {item}
                                  </h3>
                                </div>
                              );
                            })
                            ) : (
                                <>"No borders"</>
                                )}
                        </div>
                      </span>
                    </h4>
                    </div>
                </div>
                    <div className="">
                      <h3 className="font-semibold">
                        Top level domain :{" "}
                        <span className="font-light text-base">{item.tld}</span>
                      </h3>
                      <h3>
                        Currencies :{" "}
                        <span className="font-light text-base">{}</span>
                      </h3>
                      <h3>
                        Languages :{" "}
                        <span className="font-light text-base">{item.tld}</span>
                      </h3>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export { CountryDetails };
