import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionCard from "../components/CollectionCard";
import { clearCollection } from "../redux/features/collectionSlice";

const CollectionPage = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collection.items);
  return (
    <div className="px-10 py-4">
      {collection.length == 0 ? (
        <h2 className="text-2xl text-center py-10 font-medium "> Collection is Empty </h2>
      ) : (
        <div>
          <button
            onClick={() => {
              dispatch(clearCollection());
            }}
            className={`mr-5  bg-red-800 font-medium uppercase rounded border-2 cursor-pointer px-2 py-2 text-md transition active:scale-95 float-right `}
          >
            Clear Collection
          </button>
          <div className="flex flex-wrap gap-6 overflow-auto w-full px-4 justify-start py-5">
            {collection.map((item, idx) => {
              return <CollectionCard item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
