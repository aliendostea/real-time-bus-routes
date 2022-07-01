import { createSlice } from "@reduxjs/toolkit";
import { busRouteResponseTypes } from "../../types/response/busRouteResponse";

interface busRoutesTypes {
  allRoutes: busRouteResponseTypes[];
}

const initialState = {
  allRoutes: [],
};

const routesFollowedSlice = createSlice({
  name: "routes",
  initialState: initialState,
  reducers: {
    setAllBusRoutes(state, action) {
      state.allRoutes = action.payload;
    },
    setItemFollowed(state: busRoutesTypes, action) {
      const indexItem = state.allRoutes.findIndex(
        (element: busRouteResponseTypes) => element?.id === action.payload
      );
      state.allRoutes[indexItem].followed =
        !state.allRoutes[indexItem].followed;
    },
  },
});

export const routesFollowedActions = routesFollowedSlice.actions;

export default routesFollowedSlice.reducer;
