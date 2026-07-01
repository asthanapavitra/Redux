import React from "react";
import { useDispatch } from "react-redux";
import {
  addedToast,
  removeCollection,
  removeToast,
} from "../redux/features/collectionSlice";

const CollectionCard = ({ item }) => {
  const dispatch = useDispatch();
  const removeFromCollection = (item) => {
    dispatch(removeCollection(item));
    dispatch(removeToast("Removed From Collection ⚡"));
  };
  return (
    <div className=" relative  w-[17vw] h-70  ">
      <div className="w-full h-full ">
        <a target="_blank" href={item.src}>
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
        onClick={() => {
          removeFromCollection(item);
        }}
        className="absolute top-2 right-2 px-4 py-2 font-semibold cursor-pointer
       bg-(--c3)  text-white text-sm rounded-full shadow-md  hover:bg-(--c4)
       backdrop-blur-sm transition-colors duration-150 active:scale-95"
      >
        Remove
      </button>
    </div>
  );
};

export default CollectionCard;
