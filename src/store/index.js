import { configureStore } from "@reduxjs/toolkit"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"
import authReducer from "./slices/authSlice"
import cartReducer from "./slices/cartSlice"
import productReducer from "./slices/productSlice"
import wishlistReducer from "./slices/wishlistSlice"
import searchReducer from "./slices/searchSlice"
import userReducer from "./slices/userSlice"
import orderReducer from "./slices/orderSlice"
import categoryReducer from "./slices/categorySlice"
import collaborationReducer from "./slices/collaborationSlice"

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
}

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["cartItems"],
}

const wishlistPersistConfig = {
  key: "wishlist",
  storage,
  whitelist: ["wishlistItems"],
}

const userPersistConfig = {
  key: "user",
  storage,
  whitelist: ["addresses"],
}

const orderPersistConfig = {
  key: "orders",
  storage,
  whitelist: ["orders"],
}

const categoryPersistConfig = {
  key: "categories",
  storage,
  whitelist: ["categories", "featuredCategories"],
}

const collaborationPersistConfig = {
  key: "collaborations",
  storage,
  whitelist: ["collaborations"],
}

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    cart: persistReducer(cartPersistConfig, cartReducer),
    products: productReducer,
    wishlist: persistReducer(wishlistPersistConfig, wishlistReducer),
    search: searchReducer,
    user: persistReducer(userPersistConfig, userReducer),
    orders: persistReducer(orderPersistConfig, orderReducer),
    categories: persistReducer(categoryPersistConfig, categoryReducer),
    collaborations: persistReducer(collaborationPersistConfig, collaborationReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
})

// Create and export the persistor
export const persistor = persistStore(store)

export default store