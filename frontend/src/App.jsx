import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/nav/Layout";
import SignUp from "./components/forms/SignUp";
import SignIn from "./components/forms/SignIn";
import { RequireAuth } from "./components/Authentication";
import Todo from "./pages/Todo";


const App = () => {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/auth/users/sign-up" element={<SignUp />} />
              <Route path="/auth/users/sign-in" element={<SignIn />} />
              <Route element={<RequireAuth />}>
                <Route path="/home" element={<Todo />} />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  )
}

export default App;