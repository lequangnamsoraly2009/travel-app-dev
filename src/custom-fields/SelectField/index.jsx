import React from "react";
import PropTypes from "prop-types";
import { FormFeedback, FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import  Select  from "react-select";
import { ErrorMessage } from 'formik';


SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: "",
  placeholder: "",
  disabled: false,
  options: [],
};

function SelectField(props) {
    const {field,label,disabled,placeholder,options,form} = props;
    const {name,value} = field;
    const selectOptionValueName = options.find(x=>x.label===value);
    const {errors,touched} = form;
    const showError = errors[name] && touched[name];
   

    const handleOnChangeSelect = (option) =>{
        const optionValues = option ? option.label : option;

        const changeEvent = {
            target:{
                name:name,
                value: optionValues,
            }
        }
        // overwrite thuộc tính onChange của field
        field.onChange(changeEvent);
    }

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        name={name}
        {...field}
        value={selectOptionValueName}
        onChange={handleOnChangeSelect}

        disabled={disabled}
        placeholder={placeholder}
        options={options}
        className={showError ? 'is-invalid' : ''}
      />
      <ErrorMessage name={name} component={FormFeedback} />
      {/* {error ? <ErrorMessage>{error}</ErrorMessage> : null} */}
    </FormGroup>
  );
}

export default SelectField;
