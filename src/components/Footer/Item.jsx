import React from "react";

const Item = ({ Links, title }) => {
  return (
    <ul>
      <p className="mb-1 font-semibold">{title}</p> {/* Changed h1 to h2 */}
      {Links.map((link, index) => (
        <li key={`${link.name}-${index}`}>
          <a
            className="text-gray-400 hover:text-customOrange duration-300 text-sm cursor-pointer leading-6"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
