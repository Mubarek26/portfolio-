import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-customOrange">
      <h3> 📞 +251964537304</h3>
      {/* <p>+251964537304</p> */}
      {Icons.map((icon, index) => (
        <span
          key={`${icon.name}-${index}`} // Combining name with index for uniqueness
          className="p-2 cursor-pointer inline-flex items-center
          rounded-full  mx-1.5 text-xl hover:text-gray-100 hover:bg-customOrange
          duration-300"
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
