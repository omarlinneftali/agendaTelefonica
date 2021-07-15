import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./layout";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "font-awesome/css/font-awesome.min.css";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <ToastContainer />
        <main className={"mt-3"}>
          <AppRoutes />
        </main>
      </Router>
    </>
  );
}

export default App;
