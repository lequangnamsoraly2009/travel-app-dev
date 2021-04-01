import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';

InformationField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
};

InformationField.defaultProps = {
  type: "textarea",
  label: "",
};

function InformationField(props) {
    const {field,type,label} = props;
    const {name} = field;
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input type={type} name={name} id={name} {...field}/>
    </FormGroup>
  );
}

export default InformationField;
