import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";
const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};
const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: (state, action) => {
      toast.success(action.payload, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        progressStyle: {
          background: "var(--c3)",
        },
      });
    },

    removeToast: (state, action) => {
      toast.warning(action.payload, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
        progressStyle: {
          background: "var(--c3)",
        },
      });
    },
  },
});
export const { addCollection,removeToast, addedToast, removeCollection, clearCollection } =
  collectionSlice.actions;
export default collectionSlice.reducer;
