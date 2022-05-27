import React from "react";
import LogicPosts from "./LogicPosts";

export default function Posts({ posts ,onEditBtnClick,openModal }) {
  return (
    <>
      {posts.map((post) => (
        <LogicPosts key={post.id} LogicPosts={post} onEditBtnClick ={onEditBtnClick} openModal={openModal} />
      ))}
    </>
  );
}
