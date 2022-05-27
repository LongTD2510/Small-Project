import React from "react";
import Button from "@atlaskit/button";
import styled, { css } from "styled-components";
import CheckIcon from "@atlaskit/icon/glyph/check-circle";
import EditIcon from "@atlaskit/icon/glyph/edit-filled";
const ButtonStyled = styled(Button)`
  margin-top: 5px;
  text-align: left;
  &:hover {
    .check-icon {
      display: inline-block;
    }
  }
  .check-icon {
    display: none;
  }
  &:hover {
    background-color: #e2e2e2;
    border-radius: 3px;
  }
`;
export default function LogicPosts({ LogicPosts, onEditBtnClick, openModal }) {
  return (
    <>
      <ButtonStyled
        shouldFitContainer
        iconAfter={
          <>
            <span
              className="check-icon"
              // onClick={() => onCheckBtnCick(LogicPosts.id)}
            >
              <CheckIcon primaryColor="#4fff4f" />
            </span>
            <span 
              onClick={() => {
                onEditBtnClick(LogicPosts);
                openModal();
              }}
            >
              <EditIcon primaryColor="#7BC7EB" />
            </span>
          </>
        }
      >
        {LogicPosts.title || LogicPosts.name}
      </ButtonStyled>
    </>
  );
}
