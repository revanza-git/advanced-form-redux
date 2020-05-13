import React from "react";
import { Button, Form, Col, Row } from "react-bootstrap";

const SaveBox = ({ onSaveAction }) => (
  <div>
    <Form.Group as={Row}>
      <Col sm={{ span: 10, offset: 2 }}>
        <Button onClick={onSaveAction} type="submit">
          Submit
        </Button>
      </Col>
    </Form.Group>
  </div>
);

export default SaveBox;
