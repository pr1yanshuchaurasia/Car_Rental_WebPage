"use client";
import image from "next/image";
import { SearchManufacturer } from "@/components";
import { useState } from "react";

const SearchButton = ({ otherClasses }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}></button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const handleSearch = () => {};
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <SearchButton otherClasses="sm:hidden" />
    </form>
  );
};

export default SearchBar;
