import { createSlice } from "@reduxjs/toolkit";
import Place from '../models/Place';
import * as FileSystem from 'expo-file-system';


const initialState = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    //action
    addPlace: (state, action)=>{
      const newPlace = new Place(Date.now(), action.payload.title, action.payload.image);
      //nuevo place al state
      state.places.push(newPlace);
    }
  },
});

export const {addPlace} = placeSlice.actions;

export const savePlace = (title, image) =>{
  return async (dispatch) =>{
    const fileName = image.split("/").pop();
    const Path = FileSystem.documentDirectory + fileName;
    try {
      //mover imagen a ruta definitva
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });


    } catch (error) {
      console.log(error.message)
      throw error;
    }
    dispatch(addPlace({title, image: Path}));
  }
}

export default placeSlice.reducer;
