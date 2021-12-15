import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import "./app.css";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
`;

function App() {
  return (
    <Router>
      <Topbar />
      <Container>
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
        </Routes>
        <Routes>
          <Route path="/users" element={<UserList />} exact />
        </Routes>
        <Routes>
          <Route path="/user/:userId" element={<User />} exact />
        </Routes>
        <Routes>
          <Route path="/newUser" element={<NewUser />} exact />
        </Routes>

        <Routes>
          <Route path="/products" element={<ProductList />} exact />
        </Routes>
        <Routes>
          <Route path="/product/:productId" element={<Product />} exact />
        </Routes>
        <Routes>
          <Route path="/newProduct" element={<NewProduct />} exact />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
