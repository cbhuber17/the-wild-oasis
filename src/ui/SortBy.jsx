import { useSearchParams } from "react-router-dom";
import Select from "./Select";

/* eslint react/prop-types: 0 */
function SortBy({ options }) {
  // Sorting state dictated by URL
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || ""; // Default empty string will be first value

  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    // Select pull down menu
    <Select
      options={options}
      type="white"
      value={sortBy}
      onChange={handleChange}
    />
  );
}

export default SortBy;
