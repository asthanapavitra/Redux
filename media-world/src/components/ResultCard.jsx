import React from "react";
import { useDispatch } from "react-redux";
import { addCollection, addedToast } from "../redux/features/collectionSlice";

const ResultCard = ({ item }) => {
  const dispatch= useDispatch();
  const addToCollection=(item)=>{
   dispatch(addCollection(item));
   dispatch(addedToast("Added to Collection 😜"));
  
  }
  return (
    <div className=" relative  w-[17vw] h-70  ">
      <div className="w-full h-full ">
        <a  target="_blank" href={item.src}>
          {item.type == "video" ? (
            <video
              autoPlay
              loop
              muted
              className="h-full w-full object-cover object-center"
              src={item.thumbnail}
            ></video>
          ) : (
            <img
              className="h-full w-full object-cover object-center"
              src={item.thumbnail}
              alt=""
            />
          )}
        </a>
      </div>

      <h2
        id="bottom"
        className="absolute bottom-0 px-4 py-3 capitalize text-md w-full font-semibold"
      >
        {item.title}
      </h2>
      <button 
      onClick={()=>{
        addToCollection(item)
      }}
      className="absolute top-2 right-2 px-4 py-2 font-semibold cursor-pointer
       bg-white/90 hover:bg-white text-gray-900 text-sm rounded-full shadow-md 
       backdrop-blur-sm transition-colors duration-150 active:scale-95">
  Save
</button>
    </div>
  );
};

export default ResultCard;
