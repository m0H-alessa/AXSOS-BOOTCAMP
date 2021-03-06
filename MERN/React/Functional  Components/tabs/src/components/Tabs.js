import React, { useState } from "react";

const Tabs = (props) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  return (
    <>
      <div style={{ margin: 30 }}>
        {props.tabItems.map((tab, i) => {
          const tabStyle = {
            marginRight: 20,
            padding: 10,
            border: "2px solid black",
          };
          if (selectedTabIndex === i) {
            tabStyle.backgroundColor = "black";
            tabStyle.color = "white";}
          return (
            <span onClick={(e) => {setSelectedTabIndex(i);}} style={tabStyle}> {tab.tab}</span>
          );
        })}
      </div>
      <div className="box">
        <p>{props.tabItems[selectedTabIndex].content}</p>
      </div>
    </>
  );
};

export default Tabs;
