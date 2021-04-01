import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";

FileUpLoadField.propTypes = {
  form: PropTypes.object.isRequired,
  field: PropTypes.object.isRequired,

  label: PropTypes.string,
  type: PropTypes.string,
};

FileUpLoadField.defaultProps = {
  label: "",
  type: "file",
};

function FileUpLoadField(props) {
  const { field, label, type } = props;
  const { name, value } = field;
  const handleOnChangeFile = (e) => {
    const fileSubmit = e.target.files[0];
    const changeFile = {
      target: {
        name: name,
        value: fileSubmit.name,
      },
    };
    field.onChange(changeFile);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Input
        type={type}
        name={name}
        id={name}
        {...field}
        value={value.name}
        onChange={handleOnChangeFile}
      />
    </FormGroup>
  );
}

export default FileUpLoadField;
