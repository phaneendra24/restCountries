function EachCountry({ data, flag }) {
  console.log(data);

  return (
    <>
      {data.map((item) => {
        let countryName = item.name.common;
        let countryFlag = item.flags.svg;
        let population = item.population.toLocaleString();
        let Region = item.region;
        let capital = item.capital;
        let countryCode = item.cca3;
        return (
          <>
              <div className="bg-white shadow-xl mb-10 w-4/5 h-2/3 flex  ">
                <img src={countryFlag} alt="" className="w-1/3" />

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
          </>
        );
      })}
    </>
  );
}

export { EachCountry };
