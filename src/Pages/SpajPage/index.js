import React, { Component } from "react";
import PropTypes from "prop-types";
import MainInfo from "../Forms/MainInfo";
import SaveBox from "../../Components/SaveBox";
import qs from "qs";

import { Accordion, Card, Button } from "react-bootstrap";

class OtherPage extends Component {
  componentDidMount() {
    const query = qs.parse(this.props.location.search, {
      ignoreQueryPrefix: true,
    });
    const spajType = this.props.location.pathname.split("/")[1];

    this.props.updateTitle("title", query["no"].toUpperCase());
  }

  render() {
    const { formView, formEdit, formTitle, saveChanges } = this.props;

    if (!formEdit || !formView) {
      return <span>LOADING</span>;
    }
    return (
      <div>
        <h1>{formTitle["title"]}</h1>
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="text" eventKey="0">
                Informasi Umum
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <MainInfo data={formEdit} />
                <SaveBox onSaveAction={saveChanges} />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>

        {/* <SaveBar
          onDiscardAction={discardChanges}
          open={hasChanged}
          onSaveAction={saveChanges}
        /> */}
      </div>
    );
  }
}

//Setting validation for properties
OtherPage.propTypes = {
  addChange: PropTypes.func.isRequired,
  discardChanges: PropTypes.func.isRequired,
  formView: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  formEdit: PropTypes.shape({
    title: PropTypes.string,
    field: PropTypes.string,
  }),
  hasChanged: PropTypes.bool,
  saveChanges: PropTypes.func.isRequired,
  setUpEditableForm: PropTypes.func.isRequired,
};

OtherPage.defaultProps = {
  formView: null,
  formEdit: null,
  hasChanged: true,
};

export default OtherPage;
