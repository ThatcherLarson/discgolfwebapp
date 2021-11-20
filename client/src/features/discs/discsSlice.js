import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  discsList: [],
  status: "idle",
  manufacturer: "",
  searchFilter: "",
  minSpeed: 0.0,
  maxSpeed: 20.0,
  minGlide: 0.0,
  maxGlide: 20.0,
  minTurn: -20.0,
  maxTurn: 20.0,
  minFade: -20.0,
  maxFade: 20.0,
};

export const discsSlice = createSlice({
  name: "discs",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addDisc: (state, action) => {
      state.discsList.push(action.payload);
      console.log("Added a disc: " + action.payload);
    },
    removeDisc: (state, action) => {
      console.log("Removed a disc!: " + action.payload);
      state.discsList = state.discsList.filter(
        (disc) => disc.disc_id !== action.payload
      );
    },
    updateDisc: (state, action) => {
      console.log("Updated a disc!: " + action.payload);
      // TODO: test this logic, will likely require changes
      state.discsList = state.discsList.map((disc) =>
        disc.disc_id === action.payload.disc_id ? action.payload : disc
      );
    },
    getDiscs: (state, action) => {
      console.log("Getting list of Discs");
      state.discsList = action.payload;
    },
    setMinSpeed: (state, action) => {
      console.log("Set min speed");
      state.minSpeed = parseFloat(action.payload);
    },
    setMaxSpeed: (state, action) => {
      console.log("Set max speed");
      state.maxSpeed = parseFloat(action.payload);
    },
    setMinGlide: (state, action) => {
      console.log("Set min glide");
      state.minGlide = parseFloat(action.payload);
    },
    setMaxGlide: (state, action) => {
      console.log("Set max glide");
      state.maxGlide = parseFloat(action.payload);
    },
    setMinTurn: (state, action) => {
      console.log("Set min turn");
      state.minTurn = parseFloat(action.payload);
    },
    setMaxTurn: (state, action) => {
      console.log("Set max turn");
      state.maxTurn = parseFloat(action.payload);
    },
    setMinFade: (state, action) => {
      console.log("Set min fade");
      state.minFade = parseFloat(action.payload);
    },
    setMaxFade: (state, action) => {
      console.log("Set max fade");
      state.maxFade = parseFloat(action.payload);
    },
    setManufacturer: (state, action) => {
      console.log("Set brand");
      state.manufacturer = action.payload;
    },
    setSearchFilter: (state, action) => {
      console.log("Set search");
      state.searchFilter = action.payload;
    },
  },
});

export const {
  addDisc,
  removeDisc,
  updateDisc,
  getDiscs,
  setMinSpeed,
  setMaxSpeed,
  setMinGlide,
  setMaxGlide,
  setMinTurn,
  setMaxTurn,
  setMinFade,
  setMaxFade,
  setManufacturer,
  setSearchFilter,
} = discsSlice.actions;

export const stateSelector = (state) => state.discs;
export const manufacturerSelector = (state) => state.discs.manufacturer;
export const discsListSelector = (state) => state.discs.discsList;
export const minSpeedSelector = (state) => state.discs.minSpeed;
export const maxSpeedSelector = (state) => state.discs.maxSpeed;
export const minGlideSelector = (state) => state.discs.minGlide;
export const maxGlideSelector = (state) => state.discs.maxGlide;
export const minTurnSelector = (state) => state.discs.minTurn;
export const maxTurnSelector = (state) => state.discs.maxTurn;
export const minFadeSelector = (state) => state.discs.minFade;
export const maxFadeSelector = (state) => state.discs.maxFade;
export const searchFilterSelector = (state) => state.discs.searchFilter;

export const discsFilterSelector = (state) => {
  const discs = discsListSelector(state);
  const minSpeed = minSpeedSelector(state);
  const maxSpeed = maxSpeedSelector(state);
  const minGlide = minGlideSelector(state);
  const maxGlide = maxGlideSelector(state);
  const minTurn = minTurnSelector(state);
  const maxTurn = maxTurnSelector(state);
  const minFade = minFadeSelector(state);
  const maxFade = maxFadeSelector(state);
  const manufacturer = manufacturerSelector(state);
  const searchFilter = searchFilterSelector(state);

  console.log("what is happening here.. " + typeof discs);

  if (manufacturer !== "" && manufacturer !== "Choose a brand") {
    // figure out a better way to do this or switch brand to be a text entry like search

    return discs.filter(
      (disc) =>
        disc.speed >= minSpeed &&
        disc.speed <= maxSpeed &&
        disc.glide >= minGlide &&
        disc.glide <= maxGlide &&
        disc.turn >= minTurn &&
        disc.turn <= maxTurn &&
        disc.fade >= minFade &&
        disc.fade <= maxFade &&
        disc.brand === manufacturer &&
        disc.mold.toLowerCase().includes(searchFilter.toLowerCase())
    );
  }

  return discs.filter(
    (disc) =>
      disc.speed >= minSpeed &&
      disc.speed <= maxSpeed &&
      disc.glide >= minGlide &&
      disc.glide <= maxGlide &&
      disc.turn >= minTurn &&
      disc.turn <= maxTurn &&
      disc.fade >= minFade &&
      disc.fade <= maxFade &&
      disc.mold.toLowerCase().includes(searchFilter.toLowerCase())
  );
};

export default discsSlice.reducer;
