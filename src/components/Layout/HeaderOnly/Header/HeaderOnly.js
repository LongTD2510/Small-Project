import React, { useEffect, useState } from "react";
import TabRightHeader from "../Header/tabRightHeader";
import TabCenterHeader from "../Header/tabCenterHeader";
import logo from "../../../../assets/img/logo-header.svg";
import { Link } from "react-router-dom";
import * as ConstantsList from "../../../../const/ConstFile"
//  Chỉ 1 const import  import {Tabs} from "../../../../const/constTab"
export default function HeaderDefault() {
  const [tab, setTab] = useState("posts");
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tab}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [tab]);
  const onClickBtnTab = (nameTab) => {
    setTab(nameTab);
  };
  return (
    <>
      <div className="top-header">
        <Link to="/">
          <div id="logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </Link>
        <nav className="center-header">
          <ul className="tab-content">
            {ConstantsList.CONFIG_TAB.map((tab) => (
              <TabCenterHeader
                key={tab.id}
                tabName={tab.nameTab}
                onClickBtnTab={onClickBtnTab}
                slug={tab.slug}
              />
            ))}
          </ul>
        </nav>
        <TabRightHeader />
      </div>
    </>
  );
}
