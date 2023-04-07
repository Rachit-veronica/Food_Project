import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../style/LandingPageStyle/searchStyle.scss";

const Search = (props) => {
  console.log(props);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const searchBtn = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="search" style={{ display: props.style }}>
        <form>
          <input type="search" placeholder="Search..." />
          <button onClick={searchBtn}>
            <FontAwesomeIcon id="icon" icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
