import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);
  const [searchItem, setSearchItem] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(searchItem));
  };
  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="bg-(--c3) w-full flex justify-center gap-5 px-6 py-6 "
      >
        <input
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Example: cat"
          className=" w-full border-3 px-4 py-2 outline-none rounded text-xl"
          style={{ borderColor: isFocused ? "var(--c4)" : undefined }}
          type="text"
        />
        <button className="hover:bg-(--c4) border-3 px-4 py-2 outline-none rounded text-lg cursor-pointer active:scale-95">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
