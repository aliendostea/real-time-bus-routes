import { configureStore } from "@reduxjs/toolkit";

import routesFollowedReducer from "./busRoutesFollowed";

const store = configureStore({
  reducer: {
    busRoutes: routesFollowedReducer,
  },
});

export default store;
