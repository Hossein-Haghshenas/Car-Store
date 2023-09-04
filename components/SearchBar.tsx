"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
// Components
import { SearchManufacturer } from ".";

// search btn component
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  // router
  const router = useRouter();
  // States
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check manufacturer or model isn't empty
    if (manufacturer === "" && model === "") {
      return alert("please fill in the search bar");
    }
    // apply search params on url
    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    // check if model or manufacturer is valid then set that on params
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    // create pathname
    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    // push to new pathname
    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      {/* manufacturer search box */}
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      {/* model search box */}
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="car model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      {/* lg screen search btn */}
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
