import { getFormEdit, getFormView, getFormTitle } from "./selectors";
import {
  editFormSuccess,
  editFormPending,
  setNewEditableForm,
} from "./actions";

export function setupTitle() {
  return function _titleForm(dispatch, getState) {
    const form = getFormTitle(getState());
    dispatch(setNewEditableForm(form));
  };
}

export function setupForm() {
  return function _resetForm(dispatch, getState) {
    const form = getFormView(getState());
    dispatch(setNewEditableForm(form));
  };
}

export function saveForm() {
  return function _saveForm(dispatch, getState) {
    dispatch(editFormPending());
    const form = getFormEdit(getState());
    dispatch(editFormSuccess(form));
  };
}
