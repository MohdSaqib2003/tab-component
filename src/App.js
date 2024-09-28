import React from "react";
import Tabs from "./components/tabs";

const items = [
  {
    key: "1",
    label: "Tab 1",
    children: "Content of Tab Pane 1",
  },
  {
    key: "2",
    label: "Tab 2",
    children: "Content of Tab Pane 2",
  },
  {
    key: "3",
    label: "Tab 3",
    children: <h5>Content of Tab Pane 3 in </h5>,
  },
];

const App = () => {
  const onChange = (active) => {
    console.log("Current Tab : ", active);
  };

  return (
    <div>
      <h1>Tab component</h1>
      {/* By default first tab will be active */}
      <Tabs items={items} defaultActiveKey="2" onChange={onChange} />
    </div>
  );
};

export default App;
