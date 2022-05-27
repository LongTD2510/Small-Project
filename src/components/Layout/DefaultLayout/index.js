import HeaderDefault from "./Header/HeaderDefault";

import React from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="wrapper-container">
        <HeaderDefault />
        <div className="container">
          <Sidebar />
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}
