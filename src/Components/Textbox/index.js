import React from "react";
import PropTypes from "prop-types";
import { Form, Col, Row } from "react-bootstrap";

const Textbox = ({
  labelCol,
  labelVal,
  TextType,
  TextCol,
  Value,
  Placeholder = "",
  Disabled = false,
}) => (
  <div>
    <Form.Group as={Row}>
      <Form.Label column sm={labelCol}>
        {labelVal}
      </Form.Label>
      <Col sm={TextCol}>
        <Form.Control
          type={TextType}
          defaultValue={Value}
          placeholder={Placeholder}
          disabled={Disabled}
        />
      </Col>
    </Form.Group>
  </div>
);

export default Textbox;
