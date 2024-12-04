import React from "react";
import { Homesection } from "./homesection";
import { Sidebar } from "../../layouts/sidebar";
import { Navbar } from "../../components";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Homesection />
      </div>
    </div>
  );
};
