import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-bootstrap";
import TextBox from "../../../Components/Textbox";

const MainInfo = (props) => (
  <div>
    <Form>
      <TextBox
        labelCol="2"
        labelVal="Tipe Dokumen"
        TextCol="10"
        TextType="text"
        Value={props["data"]["tipe_dokumen"]}
        Disabled={true}
      />
      <TextBox
        labelCol="2"
        labelVal="SPAJ"
        TextCol="10"
        TextType="text"
        Value={props["data"]["no_spaj"]}
        Disabled={true}
      />
      <TextBox
        labelCol="2"
        labelVal="Kantor Pemasaran"
        TextCol="10"
        TextType="text"
        Value={props["data"]["kantor_pemasaran"]}
      />
      <TextBox
        labelCol="2"
        labelVal="Nomor Proposal"
        TextCol="10"
        TextType="text"
        Value={props["data"]["no_proposal"]}
      />
      <TextBox
        labelCol="2"
        labelVal="Marketing Program"
        TextCol="10"
        TextType="text"
        Value={props["data"]["marketing_program"]}
      />
    </Form>
  </div>
);

export default MainInfo;
