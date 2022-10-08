import Navbar from "../component/Navbar/Navbar";
import ScrollToTop from "react-scroll-to-top";
import { Outlet } from "react-router-dom";

const Main = () => {
  
  return (
    <div>
      <ScrollToTop
        smooth
        color="white"
        style={{
          backgroundColor: "rgba(30, 72, 136, 0.623)",
          borderRadius: "50%",
        }}
        top="250"
      />
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
