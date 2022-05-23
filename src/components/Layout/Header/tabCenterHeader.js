import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumsApi from "../../AlbumsApi/AlbumsApi";
import CommentsApi from "../../CommentsApi/CommentsApi";
import PhotosApi from "../../PhotosApi/PhotosApi";
import PostsApi from "../../PostsApi/PostsApi";
import TodosApi from "../../TodosApi/TodosApi";
import UsersApi from "../../UsersApi/UsersApi";
export default function TabCenterHeader({ tabHeaders, onClickBtnTab }) {
  return (
    <>
      {/* {tabHeaders.map((tabHeader) => (
        <li
          key={tabHeader.id}
          onClick={() => {
            onClickBtnTab(tabHeader.nameTab);
          }}
        >
          <span>{tabHeader.nameTab}</span>
        </li>
      ))} */}
      đâsdasd
    </>
  );
}
