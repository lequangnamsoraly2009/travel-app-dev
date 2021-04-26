import React from "react";
import PropTypes from "prop-types";
import { FormGroup, Button } from "reactstrap";
import "./ProductsAddItems.scss";
import { Formik, Form, FastField } from "formik";
import InputField from "../../../../custom-fields/InputField";
import SelectField from "../../../../custom-fields/SelectField";
import { LOCATE_OPTIONS } from "constants/Locate";
import { CATEGORY_TRAVEL } from "constants/Category";
import * as Yup from "yup";
// import FileUpLoadField from "custom-fields/FileUpLoadField";
import InformationField from "custom-fields/InformationField";
// import ImageField from "custom-fields/ImageField";

ProductsAddItems.propTypes = {
  onSubmit: PropTypes.func,
};

ProductsAddItems.defaultProps = {
  onSubmit: null,
};

function ProductsAddItems(props) {
  // Khởi tạo giá trị ban đầu cho Formik
  const {initialValues} =props;

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required"),

    categoryId: Yup.string().required("This field is required").nullable(),


    locatedId: Yup.string().required("This field is required").nullable(),


    information: Yup.string().required("This field is required"),

    linkImage: Yup.string().required("This field is required"),
  });


  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
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
              name="locatedId"
              component={SelectField}
              label="Locate"
              placeholder="Fuck off ?"
              options={LOCATE_OPTIONS}
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What the fuck are u doing?"
              options={CATEGORY_TRAVEL}
            />

            <FastField
              name="linkImage"
              // component={FileUpLoadField}
              component={InputField}
              label="Link Image"
              placeholder="https://images.unsplash.com/photo-1617298352465-85a0cb27a81d"
            />

            <div>
              <img
                src={values.linkImage}
                width="200"
                height="200"
                alt="Ảnh lỗi bạn ơi"
              />
            </div>

            <FastField
              name="information"
              component={InformationField}
              label="Information"
            />

            <FormGroup>
              <Button type="submit" color="primary">
                Submit
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default ProductsAddItems;
