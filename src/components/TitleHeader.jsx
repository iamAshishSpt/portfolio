import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-xl text-white-50">{sub}</p>
    </div>
  );
};

export default TitleHeader;