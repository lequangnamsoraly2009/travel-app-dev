import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Button } from "reactstrap";
import "./ProductsAddItems.scss";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { LOCATE_OPTIONS } from "constants/Locate";
import FileUpLoadField from "custom-fields/FileUpLoadField";
import InformationField from "custom-fields/InformationField";

ProductsAddItems.propTypes = {
  onSubmit: PropTypes.func,
};

ProductsAddItems.defaultProps = {
  onSubmit: null,
};

function ProductsAddItems(props) {
  // Khởi tạo giá trị ban đầu cho Formik
  const initialValues = {
    title: "",
    locateId: null,
    fileUpload: "",
    information:'',
  };

  return (
    <Formik initialValues={initialValues}>
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        // .....
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Phố Thị Hoa Vàng"
            />

            <FastField
              name="locateId"
              component={SelectField}
              label="Locate"
              placeholder="Fuck off ?"
              options={LOCATE_OPTIONS}
            />

            <FastField
              name="fileUpload"
              component={FileUpLoadField}
              label="File Upload"
            />

            <FastField
              name="information"
              component={InformationField}
              label="Information"
            />

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
