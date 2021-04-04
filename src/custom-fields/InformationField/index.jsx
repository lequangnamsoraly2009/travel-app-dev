import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup } from 'reactstrap';
import { Label } from 'reactstrap';
import { Input } from 'reactstrap';
import { ErrorMessage } from 'formik';

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
    const {field,type,label,form} = props;
    const {name} = field;
    const {errors,touched} = form;
    const showError = errors[name] && touched[name];
  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input type={type} name={name} id={name} {...field} invalid={showError}/>

      <ErrorMessage name={name} component={FormFeedback}/>
    </FormGroup>
  );
}

export default InformationField;
