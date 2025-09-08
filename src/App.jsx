import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Body from "./components/Body";
import { Provider } from "react-redux";
import Store from "./components/Store";
import { lazy } from "react";
import Error from "./components/Error";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
const Dashboard = lazy(() => import("./components/Dashboard"));

function App() {
  return (
    <>
      <Provider store={Store}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/login" element={<Login />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path="/dashboard" element={<Dashboard />}></Route>
              </Route>
              <Route path="/error" element={<Error />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
