import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";


function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-base-200">
      <NavBar></NavBar>
      <main className="grow">
        <Outlet />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default Dashboard;
