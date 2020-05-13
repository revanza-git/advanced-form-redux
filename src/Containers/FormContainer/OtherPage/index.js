import { connect } from "react-redux";
import OtherPage from "../../../Pages/SpajPage";
import {
  getFormView,
  getFormEdit,
  getHasChanged,
  getFormTitle,
} from "../../../Store/Form/selectors";
import { setupForm, saveForm } from "../../../Store/Form/thunk";
import { addChange, updateFormTitle } from "../../../Store/Form/actions";

const mapStateToProps = (state) => ({
  formView: getFormView(state),
  formEdit: getFormEdit(state),
  formTitle: getFormTitle(state),
  hasChanged: getHasChanged(state),
});

const mapDispatchToProps = (dispatch) => ({
  addChange: (fieldName, fieldValue) =>
    dispatch(addChange(fieldName, fieldValue)),
  discardChanges: () => dispatch(setupForm()),
  saveChanges: () => dispatch(saveForm()),
  setUpEditableForm: () => dispatch(setupForm()),
  updateTitle: (fieldName, fieldValue) =>
    dispatch(updateFormTitle(fieldName, fieldValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OtherPage);
