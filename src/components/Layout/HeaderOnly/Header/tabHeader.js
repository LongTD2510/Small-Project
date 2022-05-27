import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../../assets/img/logo-header.svg";
import PostsApi from "../PostsApi/PostsApi";
import TabCenterHeader from "./Header/tabCenterHeader";
import TabRightHeader from "./tabRightHeader";
import * as ConstantsList from "../../../../const/ConstFile"
export default function TabHeader() {
  // const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
  const [tab, setTab] = useState('posts');
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${tab}`).then(res => res.json()).then(posts => {
      setPosts(posts);
    })
    // axios
    //   .get(`https://jsonplaceholder.typicode.com/${tab}`)
    //   .then((res) => {
    //     console.log(res);
    //     setPosts(res.data);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  }, [tab]);
  const onClickBtnTab = (nameTab) => {
    setTab(nameTab);
  };
  return (
    <>
      {/* <div className="top-header">
        <div id="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="center-header">
          <ul className="tab-content">
            <TabCenterHeader tabHeaders={ConstantsList.CONFIG_TAB} onClickBtnTab={onClickBtnTab} />
          </ul>
        </nav>
        <TabRightHeader />
      </div> */}
    </>
  );
}
