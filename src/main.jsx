import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import store, { persistor } from "./store"
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import App from "./App"
import "./styles/index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          stacked
          position="bottom-right"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnHover={true}
          theme="dark"
          transition:Bounce
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)

