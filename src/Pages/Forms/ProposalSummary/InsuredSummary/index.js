import React from "react";
import { Form } from "react-bootstrap";
import TextBox from "../../../../Components/Textbox";

const MainInfo = ({ data, changeHandler }) => (
  <div>
    {console.log(data)}
    <Form>
      <TextBox
        labelCol="2"
        labelVal="Nama"
        StateKey="insured_name"
        TextCol="10"
        TextType="text"
        Value={data.insured_name}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Jenis Kelamin"
        StateKey="insured_gender"
        TextCol="10"
        TextType="text"
        Value={data.insured_gender}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Tanggal Lahir"
        StateKey="insured_birth_date"
        TextCol="10"
        TextType="text"
        Value={data.insured_birth_date}
        HandleChange={changeHandler}
      />
      <TextBox
        labelCol="2"
        labelVal="Usia"
        StateKey="insured_age"
        TextCol="10"
        TextType="text"
        Value={data.insured_age}
        HandleChange={changeHandler}
      />
    </Form>
  </div>
);

export default MainInfo;
