import React from "react";
import PropTypes from "prop-types";
import {  FormGroup, Button, Input, Label } from "reactstrap";
import "./ProductsAddItems.scss";
import Select from "react-select";
import { LOCATE_OPTIONS } from "constants/Locate";
import { Formik,Form,FastField} from "formik";
import InputField from "../../../../custom-fields/InputField";

ProductsAddItems.propTypes = {
  onSubmit: PropTypes.func,
};

ProductsAddItems.defaultProps = {
  onSubmit: null,
};

function ProductsAddItems(props) {
  return (
    <Formik>
      {(formikProps) => {
        const {values,errors,touched} = formikProps;
        console.log({values,errors,touched});
        // .....
        return (
          <Form>
            <FastField 
              name='title'
              component={InputField}

              label="Title"
              placeholder="Phố Thị Hoa Vàng"
            />


            <FormGroup>
              <Label for="locateId">Locate</Label>
              <Select
                id="locateId"
                name="locateId"
                placeholder="Where fuck off ?"
                options={LOCATE_OPTIONS}
              />
            </FormGroup>

            <FormGroup>
              <Label for="filePhotoId">Photo In Here</Label>
              <Input type="file" name="filePhoto" id="filePhotoId" />
            </FormGroup>

            <FormGroup>
              <Label for="textAreaId">Information </Label>
              <Input type="textarea" name="textArea" id="textAreaId" />
            </FormGroup>

            <FormGroup>
              <Button color="primary">Submit</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProductsAddItems;
