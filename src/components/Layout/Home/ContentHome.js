import React from "react";
import Button from "@atlaskit/button";

export default function ContentHome({ tabs,onClickBtnTab}) {
  return (
    <>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          className="title-api"
          onClick={() => {
            onClickBtnTab(tab.nameTab);
          }}
        >
          {tab.nameTab}
        </Button>
      ))}
    </>
  );
}
