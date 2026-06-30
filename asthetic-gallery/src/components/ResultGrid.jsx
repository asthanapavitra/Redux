import React, { useEffect } from "react";
import { fetchGifs, fetchPhotos, fetchVideos } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import ResultCard from "./ResultCard";
const ResultGrid = () => {
  const dispatch = useDispatch();
  const { query, activeTab, error, loading, results } = useSelector(
    (store) => store.search,
  );
  useEffect(
    function () {
      async function getData() {
        if (!query) return;
        try {
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            data = response.results.map((item) => ({
              id: item.id,
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
              type: "photo",
            }));
          } else if (activeTab == "videos") {
            let response = await fetchVideos(query);
            console.log(response.videos);
            data = response.videos.map((item) => ({
              id: item.id,
              title: item.user.name,
              src: item.url,
              type: "video",
              thumbnail: item.video_files[1].link,
            }));
          } else {
            let response = await fetchGifs(query);
            console.log(response.data);
            data = response.data.map((item) => ({
              id: item.id,
              title: item.title,
              src: item.url,
              type: "gif",
              thumbnail: item.images["preview_gif"].url,
            }));
          }
          dispatch(setResults(data));
        } catch (err) {
          console.log(err);
          dispatch(setError(err.message));
        }
      }
      getData();
    },
    [query, activeTab],
  );
  if (error) {
    return <h1>Error</h1>;
  }
  if (loading) {
    return <h1>Loading.....</h1>;
  }
  return (
    <div className="flex flex-wrap gap-6 overflow-auto w-full px-6 justify-between">
      {results.map((item, idx) => {
        return (
         
            <ResultCard key={idx} item={item} />
        
        );
      })}
    </div>
  );
};

export default ResultGrid;
