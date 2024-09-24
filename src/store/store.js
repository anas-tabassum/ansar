import { createStore, combineReducers } from "redux";

// Action Types
const UPDATE_FORM_DATA = "UPDATE_FORM_DATA";
const SET_ERRORS = "SET_ERRORS";

// Action Creators
export const updateFormData = (step, data) => ({
  type: UPDATE_FORM_DATA,
  payload: { step, data },
});

export const setErrors = (step, errors) => ({
  type: SET_ERRORS,
  payload: { step, errors },
});

// Initial State
const initialState = {
  step1: {
    name: "",
    email: "",
    address: "",
    city: "",
    country: "",
    state: "",
    phone: "",
    errors: {},
  },
  step2: {
    hajjBefore: "",
    lastHajjYear: "",
    campType: "",
    errors: {},
  },
  step3: {
    travelers: [{ name: "", age: "", email: "", gender: "" }], // Array of travelers
    errors: {},
  },
  step4: {
    dietaryRestriction: "",
    ageRestriction: "",
    firstLanguage: "",
    comments: "",
    disabilities: "",
    errors: {},
  },
};

// Reducer to handle form data and validation errors
const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_FORM_DATA:
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          ...action.payload.data,
        },
      };

    case SET_ERRORS:
      return {
        ...state,
        [action.payload.step]: {
          ...state[action.payload.step],
          errors: action.payload.errors,
        },
      };

    default:
      return state;
  }
};

// Combine Reducers (in case you want to add more reducers in the future)
const rootReducer = combineReducers({
  form: formReducer,
});

// Create Store
const store = createStore(rootReducer);

export default store;
