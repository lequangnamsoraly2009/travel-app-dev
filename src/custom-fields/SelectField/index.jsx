import React from "react";
import PropTypes from "prop-types";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import  Select  from "react-select";


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
    const {field,label,disabled,placeholder,options} = props;
    const {name,value} = field;
    const selectOptionValueName = options.find(x=>x.value===value);

    const handleOnChangeSelect = (option) =>{
        const optionValues = option ? option.value : option;

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
      />
    </FormGroup>
  );
}

export default SelectField;
