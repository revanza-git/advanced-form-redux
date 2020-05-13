import { combineReducers } from "redux";
import * as constants from "./constants";

const initialState = {
  spaj: {
    status: null,
    title: "title",
    data: {
      tipe_dokumen: "",
      no_spaj: "",
      kantor_pemasaran: "",
      no_proposal: "",
      marketing_program: "",
    },
    changed: null,
  },
};

function viewReducer(state = initialState.spaj, action) {
  switch (action.type) {
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        status: constants.EDIT_FORM_SUCCESS,
        data: action.form,
      };
    default:
      return state;
  }
}

function editReducer(state = initialState.spaj, action) {
  switch (action.type) {
    case constants.ADD_CHANGE:
      const newForm = { ...state.data };
      newForm[action.fieldName] = action.fieldValue;
      return {
        ...state,
        changed: true,
        data: newForm,
      };
    case constants.SET_UP_EDIT_FORM:
      return {
        ...state,
        changed: false,
        data: action.form,
      };
    case constants.EDIT_FORM_SUCCESS:
      return {
        ...state,
        changed: false,
        data: action.form,
        status: constants.EDIT_FORM_SUCCESS,
      };
    case constants.UPDATE_FORM_TITLE:
      const newTitle = { ...state.title };
      newTitle[action.fieldName] = action.fieldValue;
      return {
        ...state,
        title: newTitle,
      };
    default:
      return state;
  }
}

export default combineReducers({
  view: viewReducer,
  edit: editReducer,
});
