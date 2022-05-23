import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import logo from "../../assets/img/logo-header.svg";
import PostsApi from "../PostsApi/PostsApi";
import TabCenterHeader from "./Header/tabCenterHeader";
import TabRightHeader from "./tabRightHeader";
export default function TabHeader() {
  // const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users'];
  const [tab, setTab] = useState('posts');
  const [posts, setPosts] = useState([]);
  const tabs = [
    {
      id: 0,
      nameTab: "posts",
    },
    {
      id: 1,
      nameTab: "comments",
    },
    {
      id: 2,
      nameTab: "albums",
    },
    {
      id: 3,
      nameTab: "photos",
    },
    {
      id: 4,
      nameTab: "todos",
    },
    {
      id: 5,
      nameTab: "users",
    },
  ];
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
      <div className="top-header">
        <div id="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <nav className="center-header">
          <ul className="tab-content">
            <TabCenterHeader tabHeaders={tabs} onClickBtnTab={onClickBtnTab} />
          </ul>
        </nav>
        <TabRightHeader />
      </div>
    </>
  );
}
