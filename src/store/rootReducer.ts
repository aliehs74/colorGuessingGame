import { combineSlices } from "@reduxjs/toolkit";
import { themeSlice } from './reducers/themeSlice';


const rootReducer = combineSlices( themeSlice);
export default rootReducer;