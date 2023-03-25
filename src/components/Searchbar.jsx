import useStore from "../store";

function Searchbar({ setName, setRegion }) {
  const newtheme = useStore((state) => state.theme);

  function search_fn(e) {
    let evalue = e.target.value;
    let value = evalue.charAt(0).toUpperCase() + evalue.slice(1);
    setName(value);
  }

  //search value
  function region(e) {
    setRegion(e.target.value);
  }
  return (
    <div className="mt-10 pr-10 pl-10 sm:pr-14 sm:pl-14  flex justify-between">
      <i className="fas fa-search icon absolute text-black pt-3 pl-2"></i>

      <input
        className={`w-4/6 h-10 pl-10 pr-5 sm:w-2/6  shadow-xl outline-none text-black`}
        onChange={(e) => search_fn(e)}
        placeholder="Search for a country"
      />
      <select
        name="filters "
        className={`w-36 h-10 shadow-xl 
        ${newtheme ? "bg-[#1f2d36] text-white" : "bg-white text-black"}
        outline-none
         `}
        onChange={(e) => region(e)}
      >
        <option value="obj" className="">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Amercia</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export { Searchbar };
