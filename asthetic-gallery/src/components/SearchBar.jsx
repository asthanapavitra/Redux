import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const [searchItem, setSearchItem] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchItem));
    console.log(query);
  };
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-gray-900 w-full flex justify-center gap-5 px-4 py-6 "
      >
        <input
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          className=" w-[80%] border-2 px-4 py-2 outline-none rounded text-xl"
          type="text"
        />
        <button className=" border-2 px-4 py-2 outline-none rounded text-lg cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
