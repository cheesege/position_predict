import React from "react";
import Head from "next/head";
import Item from "./item";
const GSAT = () => {
  return (
    <div>
      <h1>請輸入成績 </h1>
      <form action="">
        <Item name="國文" subject="chinese" />
        <Item name="英文" subject="english" />
        <Item name="數A " subject="mathA" />
        <Item name="數B " subject="mathB" />
        <Item name="自然" subject="nature" />
        <Item name="社會" subject="society" />
      </form>
    </div>
  );
};

export default GSAT;
