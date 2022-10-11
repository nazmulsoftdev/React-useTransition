import React from "react";

import { AiTwotoneFire as Fire } from "react-icons/ai";

function Eye({ children }) {
  return (
    <div className="user_Eye">
      <h3>
        {children} <Fire size={30} />
      </h3>
    </div>
  );
}

export default Eye;
