import React from "react"; // Required in each JSX file
import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SKILLS } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="PRODUCTS" />
      <Item Links={RESOURCES} title="RESOURCES" />
      <Item Links={COMPANY} title="Project Ideas" />
      <Item Links={SKILLS} title="SKILLS" />
    </div>
  );
};

export default ItemsContainer;
