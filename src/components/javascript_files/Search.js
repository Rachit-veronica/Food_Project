import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import "../style/LandingPageStyle/searchStyle.scss";
import { useNavigate } from "react-router-dom";

const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const searchinfo = [
    { name: "pizza", url: "/Order/Pizza" },
    { name: "sides", url: "/Order/Sides" },
    { name: "drinks", url: "/Order/Drinks" },
    { name: "dessert", url: "/Order/Dessert" },
    { name: "food", url: "/Order" },
    { name: "burger", url: "/Order" },
    { name: "sweet", url: "/Order/Dessert" },
    {
      name: "Burgers & Fries",
      url: "/Order/Pizza",
    },
    {
      name: "Burgers",
      url: "/Order/Pizza",
    },
    {
      name: "Noodles",
      url: "/Order/Sides",
    },
    {
      name: "Sushi & Rolls",
      url: "/Order/Sides",
    },
    {
      name: "Pizza & Pasta",
      url: "/Order/Pizza",
    },
    {
      name: "Coffee & Desserts",
      url: "/Order/Dessert",
    },
    {
      name: "Healthy & Food",
      url: "/Order/Drinks",
    },
  ];

  const handleSearchQueryChange = (event) => {
    const lowercaseValue = event.target.value;
    setSearchQuery(lowercaseValue);
  };
  const searchBtn = (e) => {
    e.preventDefault();
    console.log(searchQuery.toLowerCase());
    const filteredUsers = searchinfo.filter(
      (data) =>
        searchQuery.toLowerCase().replace(/\s/g, "") ==
        data.name.toLowerCase().replace(/\s/g, "")
    );
    if (!searchQuery) {
      alert("Please Enter The Value");
    } else {
      if (filteredUsers.length > 0) {
        navigate(filteredUsers[0].url);
      } else {
        alert("No results found");
      }
    }
  };

  return (
    <>
      <div className="search" style={{ display: props.style }}>
        <form>
          <input
            type="search"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <button onClick={searchBtn}>
            <FontAwesomeIcon id="icon" icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default Search;
