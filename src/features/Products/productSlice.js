import { createSlice } from "@reduxjs/toolkit";

const initalValueDefault = [
  {
    id: '1344',
    title: "Xin Chào Việt Nam 2",
    locatedId: "Dak Nong",
    linkImage:
      "https://jinjunsora.com/wp-content/uploads/2019/10/howmuchisyourjob.jpg",
    information: "ABC",
    categoryId: "Luxury",
  },
];

const product = createSlice({
  name: "products",
  initialState: initalValueDefault,
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    removeProduct: (state, action) => {
      const removeProductId = action.payload;
      return state.filter(product => product.id !== removeProductId);
    },
    editProduct: (state, action) => {
      const productUpdate = action.payload;
      const indexProductNeedUpdate = state.findIndex(product => product.id === productUpdate.id);

      if(indexProductNeedUpdate >=0){
        state[indexProductNeedUpdate] = productUpdate;
      }
    }
  },
});

export const { addProduct ,removeProduct,editProduct } = product.actions;
export default product.reducer;
