import React from "react";
import { Link } from "react-router-dom";

export default function TabCenterHeader({ tabName, onClickBtnTab, slug }) {
  return (
    <>
      <Link to={`/${slug}`}>
          <li
            onClick={() => {
              onClickBtnTab(tabName);
            }}
          >
            <span>{tabName}</span>
          </li>
      </Link>
    </>
  );
}
