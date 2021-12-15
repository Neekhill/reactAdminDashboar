import SideBar from "./components/SideBar";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";

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
      </Container>
    </Router>
    /* </Router>
     <Route exact path="/">
     <Home />
   </Route>
   <Route path="/users">
     <UserList />
   </Router> */
  );
}

export default App;
