import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  list: [],
  cart: [],
  rekap: [],
  totalPrice: 0,
  totalRevenue: 0,
  error: '',
  isFetch: true,
};

// generates pending, fullfilled and rejected action types
export const fetchList = createAsyncThunk('list/fetchList', async () => {
  return axios.get('https://fakestoreapi.com/products').then((response) => {
    const data = response.data.map((data) => {
      data.quantity = 0;
      data.stock = 5;
      return data;
    });
    return data;
  });
});

const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    updateStock: {
      reducer(state, action) {
        state.list[action.payload.index].stock = action.payload.stock;
      },
    },
    updateStockBy1: {
      reducer(state, action) {
        state.list[action.payload].stock += 1
      },
    },
    removeStockBy1: {
      reducer(state, action) {
        state.list[action.payload].stock -= 1
      },
    },
    cartAdded: {
      reducer(state, action) {
        const newItem = { ...action.payload };

        let temp = state.cart.find((obj) => obj.id === newItem.id);
        const indexStock = state.list.findIndex((object) => {
          return object.id === newItem.id;
        });
        if (temp === undefined) {
          if (
            state.list[indexStock].stock < 0 ||
            state.list[indexStock].stock === 0
          ) {
            alert('Stock sudah habis');
          } else {
            newItem.quantity = 1;
            state.cart.push(newItem);
            state.totalPrice = state.totalPrice + newItem.price;
            state.list[indexStock].stock -= 1;
          }
        } else {
          const index = state.cart.findIndex((object) => {
            return object.id === newItem.id;
          });

          if (
            state.list[indexStock].stock < 0 ||
            state.list[indexStock].stock === 0
          ) {
            alert('Stock sudah habis');
          } else {
            state.cart[index].quantity += 1;
            state.totalPrice = state.totalPrice + newItem.price;
            state.list[indexStock].stock -= 1;
          }
        }
      },
    },
    cartAdd1: {
      //add quantity by 1
      reducer(state, action) {
        const newItem = { ...action.payload };
        const indexStock = state.list.findIndex((object) => {
          return object.id === newItem.id;
        });
        const index = state.cart.findIndex((object) => {
          return object.id === newItem.id;
        });
        if (state.list[indexStock].stock === 0) {
          alert('Stock tidak tersedia');
        } else {
          state.cart[index].quantity += 1;
          state.totalPrice = state.totalPrice + newItem.price;
          state.list[indexStock].stock -= 1;
        }
      },
    },
    cartRemove1: {
      //minus quantity by 1
      reducer(state, action) {
        const newItem = { ...action.payload };
        //find rekap id
        const indexStock = state.list.findIndex((object) => {
          return object.id === newItem.id;
        });

        const index = state.cart.findIndex((object) => {
          return object.id === newItem.id;
        });
        if (state.cart[index].quantity > 1) {
          state.cart[index].quantity -= 1;
          state.totalPrice = state.totalPrice - state.cart[index].price;
          state.list[indexStock].stock += 1;
        } else if (state.cart[index].quantity === 1) {
          state.totalPrice = state.totalPrice - state.cart[index].price;
          state.list[indexStock].stock += 1;
          state.cart = state.cart.filter((cart) => cart.id !== newItem.id);
          
        }
      },
    },
    checkOut: {
      //checkout to rekap
      reducer(state, action) {
        let dataTemp = action.payload;
        if (state.cart.length !== 0) {
          dataTemp.map((data) => {
            let temp = state.rekap.find((obj) => obj.id === data.id);
            if (temp === undefined) {
              state.rekap.push(data);
            } else {
              const index = state.rekap.findIndex((object) => {
                return object.id === data.id;
              });
              state.rekap[index].quantity =
                state.rekap[index].quantity + data.quantity;
            }
            return data;
          });
          state.totalRevenue = state.totalRevenue + state.totalPrice;
          state.cart = [];
          state.totalPrice = 0;
        } else {
          alert('Cart Masih Kosong!');
        }
      },
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      if (state.isFetch === true) {
        state.list = state.list.concat(action.payload);
      }
      state.isFetch = false;
      state.loading = false;
      state.error = '';
    });
    builder.addCase(fetchList.rejected, (state, action) => {
      state.loading = false;
      state.list = [];
      state.error = action.error.message;
    });
  },
});

export const { updateStock, cartAdded, cartAdd1, cartRemove1, checkOut, updateStockBy1, removeStockBy1 } =
  listSlice.actions;
export default listSlice.reducer;
