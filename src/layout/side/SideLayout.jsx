import React from "react";
import { Aside } from "./SideLayoutStyle.jsx";

const SideLayout = () => {
  const navTitle = [
    {
      id: 1,
      title: "기업소개",
    },
    {
      id: 2,
      title: "제품소개",
    },
    {
      id: 3,
      title: "문의사항",
    },
  ];
  return (
    <Aside>
      {navTitle.map((menu) => (
        <li>{menu.title}</li>
      ))}
    </Aside>
  );
};

export default SideLayout;
