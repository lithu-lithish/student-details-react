import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import List from "./pages/table/Table";

import New from "./pages/new/New";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./pages/user/User";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
          </Route>
          <Route path="/dashboard">
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="/newuser">
            <Route index element={<Register />} />
          </Route>

          <Route path="/registration">
            <Route index element={<New />} />
          </Route>

          <Route path="/table">
            <Route index element={<List />} />
          </Route>
          <Route path="/user/:id">
            <Route index element={<User />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

{
  /* <Route path="users">
<Route
  path="new"
  element={<New />}
/>
</Route> */
}

export default App;
