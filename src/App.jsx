import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./routes/router";
import './index.css'

function App() {
  return (
    <>
      <Router />
      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        hideProgressBar
        closeButton={false}
        newestOnTop
        pauseOnHover
        draggable
        toastClassName="shoppy-toast"
        bodyClassName="shoppy-toast-body"
      />
    </>
  );
}

export default App;
