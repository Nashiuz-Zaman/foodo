//redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  quantity: 0,
  totalPrice: 0,
  totalDeliveryFee: 0,
  tax: 0,
  isOpen: false,
  totalIncludingAllExpenses: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },

    //  add items to the cart
    addItem: (state, { payload }) => {
      const item = {
        id: payload.id,
        name: payload.name,
        amount: 1,
        price: payload.price,
        deliveryFee: payload.delivery_fee,
      };

      // if array is empty that means the item doesn't exist at all so push it in the array
      if (state.cartItems.length === 0) {
        state.cartItems.push(item);
      } else {
        // if array has elements then check if any of the element has same id, if yes then increase its amount
        state.cartItems.forEach((product) => {
          if (product.id === item.id) {
            product.amount++;
          }
        });

        // if the product is not present in the array then this block adds it in the cart
        if (!state.cartItems.some((product) => product.id === item.id)) {
          state.cartItems.push(item);
        }
      }
    },

    removeItem: (state, { payload }) => {
      state.cartItems.forEach((product, i, arr) => {
        if (product.id === payload) {
          // if amount is greater than 1 than remove only 1
          if (product.amount > 1) {
            product.amount--;
          } else {
            // if amount is equal to 1 then remove the element from the array
            arr.splice(i, 1);
          }
        }
      });
    },

    // provide a summary of total quantity, total price, total delivery fee of products in the cart
    summarizeCart: (state) => {
      let quantity = 0;
      let totalPrice = 0;
      let totalDeliveryFee = 0;

      state.cartItems.forEach((product) => {
        quantity = quantity + product.amount;
        totalPrice = totalPrice + product.amount * product.price;
        totalDeliveryFee =
          totalDeliveryFee + product.amount * product.deliveryFee;
      });

      state.quantity = quantity;
      state.totalPrice = totalPrice;
      state.tax = totalPrice * 0.15;
      state.totalDeliveryFee = totalDeliveryFee;
      state.totalIncludingAllExpenses =
        state.totalPrice + state.totalDeliveryFee + state.tax;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },

    resetAll: (state) => {
      state.cartItems.splice(0);
      state.quantity = 0;
      state.totalPrice = 0;
      state.totalDeliveryFee = 0;
      state.tax = 0;
      state.totalIncludingAllExpenses = 0;
    },
  },
});

export default cartSlice.reducer;
export const {
  addItem,
  summarizeCart,
  toggleCart,
  removeItem,
  resetAll,
  closeCart,
} = cartSlice.actions;
