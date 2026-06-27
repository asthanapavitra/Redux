import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { setQuery } from '../redux/features/searchSlice';


const SearchBar = () => {
const dispatch= useDispatch();
const [searchItem, setSearchItem]=useState('');
const submitHandler=(e)=>{
    e.preventDefault();
    console.log(searchItem);
    dispatch(setQuery)
    setSearchItem('')
}
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='bg-gray-900 flex justify-center gap-5 px-4 py-5'>
        <input
        value={searchItem}
        onChange={(e)=>{
            setSearchItem(e.target.value);
        }}
         className= " w-3/4 border-2 px-4 py-2 outline-none rounded text-xl" type="text" />
        <button className= " border-2 px-4 py-2 outline-none rounded text-lg cursor-pointer active:scale-95">Search</button>
      </form>
    </div>
  )
}

export default SearchBar
