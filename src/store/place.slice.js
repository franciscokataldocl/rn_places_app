import { createSlice } from "@reduxjs/toolkit";
import Place from '../models/Place';


const initialState = {
  places: [{}],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    //action
    addPlace: (state, action)=>{
      const newPlace = new Place(Date.now(), action.payload);
      //nuevo place al state
      state.places.push(newPlace);
    }
  },
});

export const {addPlace} = placeSlice.actions;

export default placeSlice.reducer;
