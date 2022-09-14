import { Outlet } from "react-router-dom";
import Content from "./Content";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Content>
        <Outlet></Outlet>
      </Content>
    </>
  );
};

export default Layout;
