import React, { useState } from "react";
import "./index.css";

const Tabs = ({ items, defaultActiveKey, onChange }) => {
  // defaultActiveKey is optional, if it doesn't exist in list then set the first item default
  const [selectedTab, setSelectedTab] = useState(
    items?.some((item) => item.key === defaultActiveKey)
      ? defaultActiveKey
      : items?.length > 1
      ? items[0].key
      : null
  );

  return items?.length > 1 ? (
    <div className="container">
      <div className="tab-btns">
        {items.map((item) => {
          return (
            <span
              key={item.key}
              className={`btn ${selectedTab === item.key ? "activeTab" : ""}`}
              onClick={() => {
                setSelectedTab(item.key);
                if (typeof onChange === "function") {
                  onChange(item.key);
                }
              }}
            >
              {item.label}
            </span>
          );
        })}
      </div>
      <div className="content">
        {items.map((item) => {
          return selectedTab === item.key ? (
            <div key={item.key}>{item.children}</div>
          ) : null;
        })}
      </div>
    </div>
  ) : null;
};

export default Tabs;
